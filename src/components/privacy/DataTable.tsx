
import { FC, ReactNode } from "react";

interface DataTableRowProps {
  label: string;
  content: ReactNode;
}

const DataTableRow: FC<DataTableRowProps> = ({ label, content }) => (
  <tr className="border-b border-[#b6b9bb] last:border-b-0">
    <td className="text-sm text-[#3a3f42] font-normal leading-5 p-4 w-1/2 align-top border-r border-[#b6b9bb]">{label}</td>
    <td className="text-sm text-[#3a3f42] font-normal leading-5 p-4 w-1/2 align-top">{content}</td>
  </tr>
);

interface DataTableProps {
  title: string;
  rows: DataTableRowProps[];
}

export const DataTable: FC<DataTableProps> = ({ title, rows }) => {
  return (
    <section className="bg-white border border-[#b6b9bb] w-full mt-3">
      <h3 className="text-[#282a2c] text-base font-semibold leading-none p-4 border-b border-[#b6b9bb]">
        {title}
      </h3>
      <table className="w-full border-collapse">
        <tbody>
          {rows.map((row, index) => (
            <DataTableRow key={index} {...row} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

