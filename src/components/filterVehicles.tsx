"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IVehicle } from "@/types/IVehicle";

interface FilterVehicleProps {
  vehiclesData: IVehicle[] | null;
}

const FilterVehicle = ({ vehiclesData }: FilterVehicleProps) => {
  const [makes, setMakes] = useState<IVehicle[] | null>(vehiclesData);
  const [years, setYears] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedMakeId, setSelectedMakeId] = useState<string>("");

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const modelYears = [];
    for (let year = 2015; year <= currentYear; year++) {
      modelYears.push(year.toString());
    }
    setYears(modelYears);
  }, []);

  const isLinkEnabled = selectedMakeId && selectedYear;

  return (
    <div className="mx-4 p-8 rounded-lg shadow-lg w-full max-w-lg border-2 border-black">
      <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
        Filter Vehicles
      </h1>
      <div className="mb-4">
        <label
          htmlFor="make"
          className="block text-sm font-medium text-gray-600 mb-2"
        >
          Select Vehicle Make
        </label>
        <select
          id="make"
          className="w-full p-3 border border-gray-300 rounded-lg max-h-40 overflow-y-auto"
          value={selectedMakeId}
          onChange={(e) => setSelectedMakeId(e.target.value)}
        >
          <option value="">Select a Make</option>
          {makes?.map((make) => (
            <option key={make.MakeId} value={make.MakeId.toString()}>
              {make.MakeName}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-6">
        <label
          htmlFor="year"
          className="block text-sm font-medium text-gray-600 mb-2"
        >
          Select Model Year
        </label>
        <select
          id="year"
          className="w-full p-3 border border-gray-300 rounded-lg"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">Select a Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <Link
        href={isLinkEnabled ? `/result/${selectedMakeId}/${selectedYear}` : "#"}
        className={`w-full p-3 font-bold text-center rounded-lg block ${
          isLinkEnabled
            ? "bg-black text-white hover:bg-gray-800"
            : "bg-gray-400 text-gray-300"
        }`}
      >
        Next
      </Link>
    </div>
  );
};

export default FilterVehicle;
