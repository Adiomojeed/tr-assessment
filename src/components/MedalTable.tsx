"use client";

import React, { useEffect, useState } from "react";
import { MedalData, SortType } from "@/utils/types";
import { sortMedals } from "@/utils/calculations";
import TableRow from "./TableRow";

interface MedalTableProps {
  data: MedalData[];
}

const MedalTable: React.FC<MedalTableProps> = ({ data }) => {
  const [sortBy, setSortBy] = useState<SortType>("gold");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const sortParam = params.get("sort");
      if (sortParam) {
        setSortBy(sortParam as SortType);
      }
    }
  }, []);

  const handleHeaderClick = (sort: SortType) => {
    setSortBy(sort);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `?sort=${sort}`);
    }
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center my-6 md:my-10">
        Medal Count App
      </h1>
      <table className="w-full text-left text-gray-500">
        <thead className="border-b-2 border-gray-900">
          <tr>
            <th>COUNTRY</th>
            <th
              onClick={() => handleHeaderClick("gold")}
              className={`${sortBy === "gold" ? "active" : ""}`}
            >
              <span></span>
            </th>
            <th
              onClick={() => handleHeaderClick("silver")}
              className={`${sortBy === "silver" ? "active" : ""}`}
            >
              <span></span>
            </th>
            <th
              onClick={() => handleHeaderClick("bronze")}
              className={`${sortBy === "bronze" ? "active" : ""}`}
            >
              <span></span>
            </th>
            <th
              onClick={() => handleHeaderClick("total")}
              className={`${sortBy === "total" ? "active" : ""}`}
            >
              <span>TOTAL</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortMedals(data, sortBy)
            .slice(0, 10)
            .map((country, index) => (
              <TableRow
                key={country.code}
                country={country}
                index={index + 1}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedalTable;
