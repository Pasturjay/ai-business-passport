import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

/**
 * Public Passport Resolver Query.
 * Enforces Non-Negotiable Principle #3 (Privacy by design).
 * Returns STRICTLY a minimal public shape at the database query layer.
 * Private fields (director NIN, BVN, turnover, bank details, tax ID) are NEVER returned.
 */
export const getPublicPassport = query({
  args: { passportSlug: v.string() },
  handler: async (ctx, args) => {
    const passport = await ctx.db
      .query("passports")
      .withIndex("by_slug", (q) => q.eq("passportSlug", args.passportSlug))
      .unique();

    if (!passport) {
      return null;
    }

    const business = await ctx.db.get(passport.businessId);
    if (!business) {
      return null;
    }

    // STRICT MINIMAL PUBLIC SHAPE
    return {
      passportSlug: passport.passportSlug,
      isVerified: passport.isVerified,
      status: passport.status,
      issuedAt: passport.issuedAt,
      businessName: business.identity.legalName,
      registrationNumber: business.identity.rcNumber,
      entityType: business.identity.businessType,
      state: business.identity.address.state,
      industry: business.identity.industry,
    };
  },
});

/**
 * Owner Passport Query.
 * Returns the full business record only when authorized by ownerId.
 */
export const getOwnerPassport = query({
  args: {
    businessId: v.id("businesses"),
    ownerId: v.string(),
  },
  handler: async (ctx, args) => {
    const business = await ctx.db.get(args.businessId);
    if (!business || business.ownerUserId !== args.ownerId) {
      throw new Error("Unauthorized access to business profile");
    }

    const passport = await ctx.db
      .query("passports")
      .withIndex("by_business", (q) => q.eq("businessId", args.businessId))
      .unique();

    return {
      business,
      passport,
    };
  },
});

/**
 * Compliance Item Mutation.
 * Enforces Non-Negotiable Principle #2:
 * Low confidence (< 0.85) automatically forces confirmBeforeFiling = true
 * enforced in a Convex mutation, not in prompts.
 */
export const createComplianceItem = mutation({
  args: {
    businessId: v.id("businesses"),
    title: v.string(),
    category: v.string(),
    dueDate: v.string(),
    source: v.string(),
    lastReviewedAt: v.string(),
    effectiveDate: v.string(),
    confidence: v.number(),
    confirmBeforeFiling: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    // ENFORCED RULE: low confidence => confirmBeforeFiling = true
    const enforcedConfirmBeforeFiling =
      args.confidence < 0.85 ? true : (args.confirmBeforeFiling ?? false);

    return await ctx.db.insert("complianceItems", {
      businessId: args.businessId,
      ruleKey: args.category || "CAC_ANNUAL_RETURN",
      ruleVersion: 1,
      status: "needs_attention",
      dueDate: args.dueDate,
      plainSummary: args.title,
      source: args.source,
      lastReviewedAt: args.lastReviewedAt,
      confirmBeforeFiling: enforcedConfirmBeforeFiling,
      confidence: args.confidence,
      createdFrom: "manual",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  },
});
