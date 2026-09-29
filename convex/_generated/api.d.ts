/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as admin from "../admin.js";
import type * as advisors from "../advisors.js";
import type * as assistant from "../assistant.js";
import type * as authHelpers from "../authHelpers.js";
import type * as brain from "../brain.js";
import type * as compliance from "../compliance.js";
import type * as connections from "../connections.js";
import type * as documents from "../documents.js";
import type * as documentsStudio from "../documentsStudio.js";
import type * as marketplace from "../marketplace.js";
import type * as notifications from "../notifications.js";
import type * as passports from "../passports.js";
import type * as requests from "../requests.js";
import type * as seedComplianceRules from "../seedComplianceRules.js";
import type * as seeds_pilotDemoSeed from "../seeds/pilotDemoSeed.js";
import type * as seeds_templatesSeed from "../seeds/templatesSeed.js";
import type * as subscriptions from "../subscriptions.js";
import type * as tenders from "../tenders.js";
import type * as users from "../users.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  admin: typeof admin;
  advisors: typeof advisors;
  assistant: typeof assistant;
  authHelpers: typeof authHelpers;
  brain: typeof brain;
  compliance: typeof compliance;
  connections: typeof connections;
  documents: typeof documents;
  documentsStudio: typeof documentsStudio;
  marketplace: typeof marketplace;
  notifications: typeof notifications;
  passports: typeof passports;
  requests: typeof requests;
  seedComplianceRules: typeof seedComplianceRules;
  "seeds/pilotDemoSeed": typeof seeds_pilotDemoSeed;
  "seeds/templatesSeed": typeof seeds_templatesSeed;
  subscriptions: typeof subscriptions;
  tenders: typeof tenders;
  users: typeof users;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
