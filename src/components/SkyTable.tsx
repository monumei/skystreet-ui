import React from 'react';

interface Column {
  key: string;
  header: string;
  width?: string;
}

export interface SkyTableProps {
  columns: Column[];
  data: any[];
}

export const SkyTable: React.FC<SkyTableProps> = ({ columns, data }) => {
  return (
    <div className="w-full overflow-x-auto border-2 border-skystreet-ink shadow-manga bg-white">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-skystreet-ink text-white">
            {columns.map((col) => (
              <th key={col.key} className="p-4 font-black uppercase tracking-wider text-sm border-r-2 border-skystreet-cyan last:border-r-0 whitespace-nowrap">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b-2 border-skystreet-ink/10 hover:bg-skystreet-cyan/10 transition-colors font-bold text-skystreet-ink group">
              {columns.map((col) => (
                <td key={`${i}-${col.key}`} className="p-4 border-r-2 border-skystreet-ink/10 last:border-r-0 relative">
                  {row[col.key]}
                  {/* Row Hover Marker */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-skystreet-cyan opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
