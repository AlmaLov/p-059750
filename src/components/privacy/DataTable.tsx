import { FC, ReactNode } from "react";

interface DataTableRowProps {
  label: string;
  content: ReactNode;
}

const DataTableRow: FC<DataTableRowProps> = ({ label, content }) => (
  <div className="flex items-stretch gap-5 text-sm text-[#3a3f42] font-normal leading-5">
    <div className="w-1/2">{label}</div>
    <div className="w-1/2">{content}</div>
  </div>
);

interface DataTableProps {
  title: string;
  rows: DataTableRowProps[];
}

export const DataTable: FC<DataTableProps> = ({ title, rows }) => {
  return (
    <section className="bg-white border border-[#b6b9bb] w-full mt-3">
      <h3 className="text-[#282a2c] text-base font-semibold leading-none p-4">
        {title}
      </h3>
      <div className="p-4 space-y-4">
        {rows.map((row, index) => (
          <DataTableRow key={index} {...row} />
        ))}
      </div>
      <div className="border-t border-[#b6b9bb]" />
    </section>
  );
};
