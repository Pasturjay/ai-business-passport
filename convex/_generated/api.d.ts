/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 */

import type { ApiFromModules, FilterApi, FunctionReference } from "convex/server";
import type * as passports from "../passports";
import type * as users from "../users";
import type * as advisors from "../advisors";
import type * as brain from "../brain";

/**
 * A utility for referencing Convex functions in your app's API.
 */
declare const fullApi: ApiFromModules<{
  passports: typeof passports;
  users: typeof users;
  advisors: typeof advisors;
  brain: typeof brain;
}>;

export declare const api: FilterApi<typeof fullApi, FunctionReference<any, "public">>;
export declare const internal: FilterApi<typeof fullApi, FunctionReference<any, "internal">>;
