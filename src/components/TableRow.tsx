import { getFlagPosition } from "@/utils/calculations";
import { MedalData } from "@/utils/types";
import React from "react";

const TableRow = ({
  country,
  index,
}: {
  country: MedalData;
  index: number;
}) => {
  return (
    <tr key={country.code}>
      <td className="">
        <span className="inline-flex items-center gap-3">
          <span className="w-4">{index}</span>
          <div
            className="flag"
            style={{
              backgroundImage: "url(/flags.png)",
              backgroundPosition: `0 -${getFlagPosition(country.code)}px`,
              width: "32px",
              height: "17px",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <span className="font-bold">{country.code}</span>
        </span>
      </td>
      <td className="">{country.gold}</td>
      <td className="">{country.silver}</td>
      <td className="">{country.bronze}</td>

      <td className="font-bold">{country.total}</td>
    </tr>
  );
};

export default TableRow;
