import { PRODUCT_COPY } from "@/lib/copy";

interface PassportPublicProps {
  params: Promise<{
    passportId: string;
  }>;
}

export default async function PublicPassportPage({ params }: PassportPublicProps) {
  const { passportId } = await params;

  // In later segments, this fetches from the minimal public Convex query
  const mockPublicPassport = {
    id: passportId,
    businessName: "Acme Logistics & Technology Ltd",
    registrationNumber: "RC-1928374",
    entityType: "Private Limited Company (LTD)",
    status: "Active & Verified",
    state: "Lagos",
    isVerified: true,
    issuedAt: "2026-01-15",
  };

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b pb-4">
          <div>
            <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
              {PRODUCT_COPY.passportBadgeVerified}
            </span>
            <h1 className="mt-2 text-xl font-bold text-gray-900 sm:text-2xl">
              {mockPublicPassport.businessName}
            </h1>
            <p className="text-xs text-gray-500">
              {PRODUCT_COPY.passportPublicSubtitle}
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 text-sm">
          <div>
            <span className="block text-xs font-medium text-gray-500">Registration Number</span>
            <span className="font-semibold text-gray-900">{mockPublicPassport.registrationNumber}</span>
          </div>

          <div>
            <span className="block text-xs font-medium text-gray-500">Entity Type</span>
            <span className="font-semibold text-gray-900">{mockPublicPassport.entityType}</span>
          </div>

          <div>
            <span className="block text-xs font-medium text-gray-500">State of Operations</span>
            <span className="font-semibold text-gray-900">{mockPublicPassport.state}</span>
          </div>

          <div>
            <span className="block text-xs font-medium text-gray-500">Status</span>
            <span className="font-semibold text-green-600">{mockPublicPassport.status}</span>
          </div>
        </div>

        <div className="mt-6 border-t pt-4">
          <p className="text-center text-xs text-gray-400">
            Passport ID: {mockPublicPassport.id} &bull; Issued {mockPublicPassport.issuedAt}
          </p>
        </div>
      </div>
    </div>
  );
}
