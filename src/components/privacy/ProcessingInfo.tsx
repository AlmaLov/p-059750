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

  const subProcessorRows = [
    {
      name: "Amazon Web Service",
      description: "Running the Production environment including the Application and Databases",
      location: "USA"
    },
    { name: "Google Workspace", description: "Email services", location: "USA" },
    { name: "Pivotal Tracker", description: "Work management", location: "USA" },
    { name: "Mixpanel", description: "Product analytics", location: "USA" },
    { name: "Google Analytics", description: "Product analytics", location: "USA" },
    { name: "Razorpay", description: "Payment Gateway", location: "India" },
    { name: "Easebuzz", description: "Payment Gateway", location: "India" },
    { name: "Slack", description: "Messaging", location: "USA" },
    { name: "Github", description: "Code version control", location: "USA" },
    {
      name: "Bugsnag",
      description: "Error monitoring and application stability management.",
      location: "USA"
    },
    { name: "LinkedIn", description: "Networking", location: "USA" },
    { name: "MongoDB", description: "Database management system", location: "USA" },
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
        <table className="w-full border-collapse">
          <tbody>
            <tr className="border-b border-[#b6b9bb]">
              <td className="text-sm text-[#3a3f42] font-normal leading-5 p-4 w-1/2 align-top border-r border-[#b6b9bb]">
                Categories of data subjects whose personal data is transferred
              </td>
              <td className="text-sm text-[#3a3f42] font-normal leading-5 p-4 w-1/2 align-top">
                Customer's authorized users of the Services
              </td>
            </tr>
            <tr className="border-b border-[#b6b9bb]">
              <td className="text-sm text-[#3a3f42] font-normal leading-5 p-4 w-1/2 align-top border-r border-[#b6b9bb]">
                Categories of personal data transferred
              </td>
              <td className="text-sm text-[#3a3f42] font-normal leading-5 p-4 w-1/2 align-top">
                <div>Processed automatically by the Services:</div>
                <div className="mt-2">
                  Name
                  <br />
                  Email
                </div>
                <div className="mt-4">
                  Processed where and to the extent provided by Customer or its
                  authorized users in connection with audit services provided by
                  Alma Labs:
                </div>
                <div className="mt-2">
                  address
                  <br />
                  date of birth
                  <br />
                  past employment details
                </div>
              </td>
            </tr>
            <tr className="border-b border-[#b6b9bb]">
              <td className="text-sm text-[#3a3f42] font-normal leading-5 p-4 w-1/2 align-top border-r border-[#b6b9bb]">
                Sensitive personal data transferred
              </td>
              <td className="text-sm text-[#3a3f42] font-normal leading-5 p-4 w-1/2 align-top">
                None
              </td>
            </tr>
            <tr className="border-b border-[#b6b9bb]">
              <td className="text-sm text-[#3a3f42] font-normal leading-5 p-4 w-1/2 align-top border-r border-[#b6b9bb]">
                Frequency of the transfer
              </td>
              <td className="text-sm text-[#3a3f42] font-normal leading-5 p-4 w-1/2 align-top">
                Continuous
              </td>
            </tr>
            <tr className="border-b border-[#b6b9bb]">
              <td className="text-sm text-[#3a3f42] font-normal leading-5 p-4 w-1/2 align-top border-r border-[#b6b9bb]">
                Nature of the processing
              </td>
              <td className="text-sm text-[#3a3f42] font-normal leading-5 p-4 w-1/2 align-top">
                The nature of the processing is more fully described in the
                Agreement and accompanying order forms but will include the
                following basic processing activities: The provision of Services
                to Customer. In order to provide people data, Alma Labs receives
                identifying Customer Personal Data to permit Alma Labs to query,
                cleanse, standardize, enrich, (when required) send to additional
                data to feed providers, and to store the query information.
              </td>
            </tr>
            <tr className="border-b border-[#b6b9bb]">
              <td className="text-sm text-[#3a3f42] font-normal leading-5 p-4 w-1/2 align-top border-r border-[#b6b9bb]">
                Purpose of the data transfer and further processing
              </td>
              <td className="text-sm text-[#3a3f42] font-normal leading-5 p-4 w-1/2 align-top">
                The purpose of the transfer is to facilitate the performance of
                the Services more fully described in the Agreement and
                accompanying order forms.
              </td>
            </tr>
            <tr className="border-b border-[#b6b9bb]">
              <td className="text-sm text-[#3a3f42] font-normal leading-5 p-4 w-1/2 align-top border-r border-[#b6b9bb]">
                For processing involving California consumers, please select the
                Business Purpose(s) for Processing Personal Data
              </td>
              <td className="text-sm text-[#3a3f42] font-normal leading-5 p-4 w-1/2 align-top space-y-4">
                <div>☐ N/A</div>
                <div>☐ Auditing related to counting ad impressions to unique
                visitors, verifying positioning and quality of ad impressions,
                and auditing compliance with this specification and other
                standards</div>
                <div>☒ Helping to ensure security and integrity to the extent the use
                of the consumer's personal information is reasonably necessary
                and proportionate for these purposes</div>
                <div>☒ Debugging to identify and repair errors that impair existing
                intended functionality.</div>
                <div>☐ Short-term, transient use, including, but not limited to,
                non-personalized advertising shown as part of a consumer's
                current interaction with the business, provided that the
                consumer's personal information is not disclosed to another
                third party and is not used to build a profile about the
                consumer or otherwise alter the consumer's experience outside
                the current interaction with the business.</div>
                <div>☒ Performing services on behalf of the business, including
                maintaining or servicing accounts, providing customer service,
                processing or fulfilling orders and transactions, verifying
                customer information, processing payments, providing financing,
                providing analytic services, providing storage, or providing
                similar services on behalf of the business.</div>
                <div>☒ Providing advertising and marketing services, except for
                cross-context behavioral advertising, to the consumer provided
                that, for the purpose of advertising and marketing, a service
                provider or contractor shall not combine the personal
                information of opted-out consumers that the service provider or
                contractor receives from, or on behalf of, the business with
                personal information that the service provider or contractor
                receives from, or on behalf of, another person or persons or
                collects from its own interaction with consumers.</div>
                <div>☒ Undertaking internal research for technological development
                and demonstration.</div>
                <div>☒ Undertaking activities to verify or maintain the quality or
                safety of a service or device that is owned, manufactured,
                manufactured for, or controlled by the business, and to improve,
                upgrade, or enhance the service or device that is owned,
                manufactured, manufactured for or controlled by the business.</div>
                <div>☒ To retain and employ another service provider or contractor as
                a subcontractor where the subcontractor meets the requirements
                for a service provider or contractor under CCPA.</div>
                <div>☒ To build or improve the quality of the services it is
                providing to the business even if this Business Purpose is not
                specified in the written contract required by CCPA provided that
                Service Provider does not use the Customer Personal Data to
                perform Services on behalf of another person.</div>
                <div>☒ To prevent, detect, or investigate data security
                incidents or protect against malicious, deceptive, fraudulent,
                or illegal activity, even if this Business Purpose is not
                specified in the written contract.</div>
              </td>
            </tr>
            <tr className="border-b border-[#b6b9bb]">
              <td className="text-sm text-[#3a3f42] font-normal leading-5 p-4 w-1/2 align-top border-r border-[#b6b9bb]">
                Period for which the personal data will be retained or criteria
                used to determine that period
              </td>
              <td className="text-sm text-[#3a3f42] font-normal leading-5 p-4 w-1/2 align-top">
                The period for which the Customer Personal Data will be retained
                is more fully described in the Agreement, Addendum, and
                accompanying order forms.
              </td>
            </tr>
            <tr className="border-b border-[#b6b9bb] last:border-b-0">
              <td className="text-sm text-[#3a3f42] font-normal leading-5 p-4 w-1/2 align-top border-r border-[#b6b9bb]">
                Subprocessor transfers – subject matter, nature, and duration of
                processing
              </td>
              <td className="text-sm text-[#3a3f42] font-normal leading-5 p-4 w-1/2 align-top">
                The subject matter, nature, and duration of the Processing more
                fully described in the Agreement, Addendum, and accompanying
                order forms.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-[#282a2c] text-lg font-bold leading-8 mt-8">
        Annex 2
      </h2>
      <h3 className="text-[#282a2c] text-lg font-bold leading-8 text-center">
        Alma Labs' Sub-processors
      </h3>
      <div className="bg-white border border-[#b6b9bb] mt-3">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[#b6b9bb] bg-[#f5f5f5]">
              <th className="text-sm text-[#3a3f42] font-semibold leading-5 p-4 text-left border-r border-[#b6b9bb]">
                Name of Sub-processor
              </th>
              <th className="text-sm text-[#3a3f42] font-semibold leading-5 p-4 text-left border-r border-[#b6b9bb]">
                Description of Processing
              </th>
              <th className="text-sm text-[#3a3f42] font-semibold leading-5 p-4 text-left">
                Location of Sub-processor
              </th>
            </tr>
          </thead>
          <tbody>
            {subProcessorRows.map((row, index) => (
              <tr key={index} className="border-b border-[#b6b9bb] last:border-b-0">
                <td className="text-sm text-[#3a3f42] font-normal leading-5 p-4 border-r border-[#b6b9bb]">
                  {row.name}
                </td>
                <td className="text-sm text-[#3a3f42] font-normal leading-5 p-4 border-r border-[#b6b9bb]">
                  {row.description}
                </td>
                <td className="text-sm text-[#3a3f42] font-normal leading-5 p-4">
                  {row.location}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
