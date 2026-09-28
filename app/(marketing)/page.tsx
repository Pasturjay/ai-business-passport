import Link from "next/link";
import { PRODUCT_COPY } from "@/lib/copy";

export default function MarketingPage() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-6">
        <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
          Nigeria&apos;s Business Operating System
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Run your business without the headache.
        </h1>
        <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg">
          Tell us about your business once. We help you stay registered, handle{" "}
          <strong className="font-semibold text-gray-800">
            {PRODUCT_COPY.complianceSectionTitle.toLowerCase()}
          </strong>
          , organize <strong className="font-semibold text-gray-800">{PRODUCT_COPY.documentsVaultTitle}</strong>, and share your verified Business Passport with anyone.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/sign-up"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {PRODUCT_COPY.getStarted}
          </Link>
          <Link
            href="/p/demo"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {PRODUCT_COPY.viewPassport}
          </Link>
        </div>

        <p className="pt-4 text-xs text-gray-500">
          {PRODUCT_COPY.trustNotice}
        </p>
      </div>
    </div>
  );
}
