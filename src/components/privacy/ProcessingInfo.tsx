import { FC } from "react";
import { DataTable } from "./DataTable";

export const ProcessingInfo: FC = () => {
  const dataExporterRows = [
    { label: "Name:", content: "Customer (as defined in the Agreement)" },
    { label: "Address:", content: "As set forth in the relevant Order Form." },
    {
      label: "Contact person's name, position and contact details:",
      content: "As set forth in the relevant Order Form.",
    },
    {
      label: "Activities relevant to the data transferred under these Clauses:",
      content:
        "Recipient of the Services provided by Alma Labs in accordance with the Agreement.",
    },
    {
      label: "Signature and date:",
      content: "Signature and date are set out in the Agreement.",
    },
    { label: "Role (controller/processor):", content: "Controller" },
  ];

  const dataImporterRows = [
    { label: "Name:", content: "Alma Labs Inc." },
    {
      label: "Address:",
      content:
        "3411 Silverside Rd, Ste 104, Wilmington, New Castle, DE 19810 USA",
    },
    {
      label: "Contact person's name, position and contact details:",
      content: (
        <>
          Dhruv Sogani,{" "}
          <span className="text-[#00c4b5]">global.sales@almaconnect.com</span>
        </>
      ),
    },
    {
      label: "Activities relevant to the data transferred under these Clauses:",
      content:
        "Provision of the Services to the Customer in accordance with the Agreement.",
    },
    {
      label: "Signature and date:",
      content: "Signature and date are set out in the Agreement.",
    },
    { label: "Role (controller/processor):", content: "Processor" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-[#282a2c] text-lg font-bold leading-8">
        1. List of Parties
      </h2>
      <DataTable title="Data Exporter" rows={dataExporterRows} />
      <DataTable title="Data Importer" rows={dataImporterRows} />

      <h2 className="text-[#282a2c] text-lg font-bold leading-8">
        2. Competent Supervisory Authority
      </h2>
      <div className="bg-white border border-[#b6b9bb] flex items-stretch gap-[40px_50px] text-sm text-[#3a3f42] font-normal flex-wrap p-4">
        <div className="leading-5 grow">
          Identify the competent supervisory authority/ies in accordance with
          Applicable Data Protection Clause
        </div>
        <div className="flex items-stretch gap-[17px] leading-none">
          <div className="border-l border-[#b6b9bb] h-20" />
          <div className="my-auto">Data Protection Authority</div>
        </div>
      </div>

      <h2 className="text-[#282a2c] text-lg font-bold leading-8">
        3. Processing Information
      </h2>
      <div className="bg-white border border-[#b6b9bb] mt-3">
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-5">
            <div className="text-sm text-[#3a3f42] font-normal">
              <div className="leading-5">
                Categories of data subjects whose personal data is transferred
              </div>
              <div className="mt-[114px]">
                Categories of personal data transferred
              </div>
              <div className="mt-[113px]">
                Sensitive personal data transferred
              </div>
              <div className="mt-5">Frequency of the transfer</div>
              <div className="mt-[60px]">Nature of the processing</div>
              <div className="mt-[45px]">
                Purpose of the data transfer and further processing
              </div>
              <div className="mt-[750px]">
                For processing involving California consumers, please select the
                Business Purpose(s) for Processing Personal Data
              </div>
              <div className="mt-[700px]">
                Period for which the personal data will be retained or criteria
                used to determine that period
              </div>
              <div className="mt-10">
                Subprocessor transfers – subject matter, nature, and duration of
                processing
              </div>
            </div>

            <div className="text-sm text-[#3a3f42] font-normal">
              <div className="leading-none">
                Customer's authorized users of the Services
              </div>

              <div className="mt-[30px] leading-none">
                Processed automatically by the Services:
              </div>
              <div className="mt-[9px]">
                Name
                <br />
                Email
              </div>

              <div className="mt-[9px]">
                Processed where and to the extent provided by Customer or its
                authorized users in connection with audit services provided by
                Alma Labs:
              </div>
              <div className="mt-[9px]">
                address
                <br />
                date of birth
                <br />
                past employment details
              </div>

              <div className="leading-none mt-5">None</div>
              <div className="leading-none mt-5">Continuous</div>

              <div className="mt-5">
                The nature of the processing is more fully described in the
                Agreement and accompanying order forms but will include the
                following basic processing activities: The provision of Services
                to Customer. In order to provide people data, Alma Labs receives
                identifying Customer Personal Data to permit Alma Labs to query,
                cleanse, standardize, enrich, (when required) send to additional
                data to feed providers, and to store the query information.
                <br />
                <br />
                The purpose of the transfer is to facilitate the performance of
                the Services more fully described in the Agreement and
                accompanying order forms.
              </div>

              <div className="mt-5">
                ☐ N/A
                <br />
                <br />
                ☐ Auditing related to counting ad impressions to unique
                visitors, verifying positioning and quality of ad impressions,
                and auditing compliance with this specification and other
                standards
                <br />
                <br />
                ☒ Helping to ensure security and integrity to the extent the use
                of the consumer's personal information is reasonably necessary
                and proportionate for these purposes
                <br />
                <br />
                ☒ Debugging to identify and repair errors that impair existing
                intended functionality.
                <br />
                <br />
                ☐ Short-term, transient use, including, but not limited to,
                non-personalized advertising shown as part of a consumer's
                current interaction with the business, provided that the
                consumer's personal information is not disclosed to another
                third party and is not used to build a profile about the
                consumer or otherwise alter the consumer's experience outside
                the current interaction with the business.
                <br />
                <br />
                ☒ Performing services on behalf of the business, including
                maintaining or servicing accounts, providing customer service,
                processing or fulfilling orders and transactions, verifying
                customer information, processing payments, providing financing,
                providing analytic services, providing storage, or providing
                similar services on behalf of the business.
                <br />
                <br />
                ☐ Providing advertising and marketing services, except for
                cross-context behavioral advertising, to the consumer provided
                that, for the purpose of advertising and marketing, a service
                provider or contractor shall not combine the personal
                information of opted-out consumers that the service provider or
                contractor receives from, or on behalf of, the business with
                personal information that the service provider or contractor
                receives from, or on behalf of, another person or persons or
                collects from its own interaction with consumers.
                <br />
                <br />
                ☒ Undertaking internal research for technological development
                and demonstration.
                <br />
                <br />
                ☒ Undertaking activities to verify or maintain the quality or
                safety of a service or device that is owned, manufactured,
                manufactured for, or controlled by the business, and to improve,
                upgrade, or enhance the service or device that is owned,
                manufactured, manufactured for or controlled by the business.
                <br />
                <br />
                ☒ To retain and employ another service provider or contractor as
                a subcontractor where the subcontractor meets the requirements
                for a service provider or contractor under CCPA.
                <br />
                <br />
                ☒ To build or improve the quality of the services it is
                providing to the business even if this Business Purpose is not
                specified in the written contract required by CCPA provided that
                Service Provider does not use the Customer Personal Data to
                perform Services on behalf of another person.
                <br />
                <br />☒ To prevent, detect, or investigate data security
                incidents or protect against malicious, deceptive, fraudulent,
                or illegal activity, even if this Business Purpose is not
                specified in the written contract.
              </div>

              <div className="mt-5">
                The period for which the Customer Personal Data will be retained
                is more fully described in the Agreement, Addendum, and
                accompanying order forms.
              </div>

              <div className="mt-5">
                The subject matter, nature, and duration of the Processing more
                fully described in the Agreement, Addendum, and accompanying
                order forms.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
