import { completeLLM } from "@/lib/llm";
import {
  ExtractedRequirement,
  ExtractTenderResult,
  extractRequirementsDeterministic,
} from "./ruleExtractor";

export {
  type ExtractedRequirement,
  type ExtractTenderResult,
  extractRequirementsDeterministic,
};

/**
 * Extracts structured tender requirements from document text or OCR chunks.
 */
export async function extractTenderRequirements(
  documentText: string,
  fileName: string = "tender_document.pdf"
): Promise<ExtractTenderResult> {
  const prompt = `Extract statutory and technical requirements from this tender document:
Document Name: ${fileName}

Document Text:
${documentText.slice(0, 8000)}

Return JSON object:
{
  "title": "Tender Title",
  "issuer": "Issuing Agency/Company Name",
  "deadline": "YYYY-MM-DD",
  "overallConfidence": 0.9,
  "requirements": [
    {
      "id": "REQ-01",
      "category": "company_docs|technical|financial|submission",
      "text": "Exact description of requirement",
      "mandatory": true,
      "sourcePageRef": "Page X",
      "confidence": 0.95
    }
  ],
  "unparsedSections": ["Sections that could not be fully parsed with high confidence"]
}`;

  try {
    const llmRes = await completeLLM(
      [
        { role: "system", content: "You are a tender analyst extracting requirements for Nigerian procurement bids." },
        { role: "user", content: prompt },
      ],
      { tier: "strong", responseFormat: "json" }
    );

    let parsed: any = null;
    try {
      parsed = JSON.parse(llmRes.content);
    } catch {
      parsed = null;
    }

    if (parsed && Array.isArray(parsed.requirements)) {
      const requirements: ExtractedRequirement[] = parsed.requirements.map((r: any, idx: number) => ({
        id: r.id || `REQ-0${idx + 1}`,
        category: ["company_docs", "technical", "financial", "submission"].includes(r.category)
          ? r.category
          : "company_docs",
        text: r.text || "Unspecified requirement",
        mandatory: typeof r.mandatory === "boolean" ? r.mandatory : true,
        sourcePageRef: r.sourcePageRef || "Page 1",
        confidence: typeof r.confidence === "number" ? r.confidence : 0.85,
      }));

      return {
        title: parsed.title || "Public Procurement Tender",
        issuer: parsed.issuer || "Federal Ministry of Works",
        deadline: parsed.deadline || "2026-10-31",
        requirements,
        unparsedSections: Array.isArray(parsed.unparsedSections) ? parsed.unparsedSections : [],
        overallConfidence: parsed.overallConfidence || 0.9,
      };
    }
  } catch (err) {
    console.warn("[Tender Extractor] Fallback extraction:", err);
  }

  // Fallback Rule-Based Heuristic Extraction if LLM JSON fails
  return extractRequirementsDeterministic(documentText, fileName);
}
