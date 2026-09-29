import { completeLLM } from "@/lib/llm";
import {
  evaluateDeterministicQC,
  getBrainValue,
  QCError,
  QCWarning,
  QCReport,
} from "./deterministicQC";

export {
  evaluateDeterministicQC,
  getBrainValue,
  type QCError,
  type QCWarning,
  type QCReport,
};

/**
 * Full QC Pass Engine (Deterministic + LLM Contradictions & Superlatives Check).
 */
export async function runDocumentQC(
  brainSnapshot: Record<string, any>,
  templateKey: string,
  vaultDocuments?: Array<Record<string, any>>,
  currentDate: Date = new Date()
): Promise<QCReport> {
  // 1. Run Deterministic Pass
  const detResult = evaluateDeterministicQC(brainSnapshot, templateKey, vaultDocuments, currentDate);

  const contradictions: string[] = [];
  const errors = [...detResult.errors];
  const warnings = [...detResult.warnings];

  // If missing critical errors exist, we can skip expensive LLM check or run it for full feedback
  // 2. LLM Contradictions & Superlatives Check
  try {
    const prompt = `Analyze this Business Brain data for factual contradictions or unsupported superlatives:
Brain Data: ${JSON.stringify({
      legalName: brainSnapshot.identity?.legalName,
      yearFounded: brainSnapshot.identity?.yearFounded,
      description: brainSnapshot.identity?.description,
      experience: brainSnapshot.experience,
      credentials: brainSnapshot.credentials,
    })}

Return JSON object: { "contradictions": ["..."], "superlatives": ["..."] }`;

    const llmRes = await completeLLM(
      [
        { role: "system", content: "You are a legal & compliance QC auditor checking business documents for contradictions." },
        { role: "user", content: prompt },
      ],
      { tier: "fast", responseFormat: "json" }
    );

    let parsed: any = null;
    try {
      parsed = JSON.parse(llmRes.content);
    } catch {
      parsed = null;
    }

    if (parsed && Array.isArray(parsed.contradictions)) {
      for (const item of parsed.contradictions) {
        contradictions.push(item);
        warnings.push({
          field: "contradictions",
          issue: item,
        });
      }
    }

    if (parsed && Array.isArray(parsed.superlatives)) {
      for (const sup of parsed.superlatives) {
        warnings.push({
          field: "superlatives",
          issue: `Unsupported superlative statement: "${sup}". Verify documentation backings.`,
        });
      }
    }
  } catch (err) {
    // If LLM check fails or times out, proceed with deterministic result
    console.warn("[QC Engine] LLM contradiction check fallback:", err);
  }

  const passed = errors.length === 0;

  return {
    passed,
    errors,
    warnings,
    missingFields: detResult.missingFields,
    inconsistencies: detResult.inconsistencies,
    contradictions,
  };
}
