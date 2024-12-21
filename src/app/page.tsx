import FilterVehicle from "@/components/filterVehicles";
import { IVehicle } from "@/types/IVehicle";
import { getVehicleMakes } from "@/utils/getVehicleMakes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Filters",
};

export default async function Home() {
  let vehicleNames: IVehicle[] | null = null;
  try {
    vehicleNames = await getVehicleMakes();

    return (
      <div className="mt-20 flex items-center justify-center">
        <FilterVehicle vehiclesData={vehicleNames} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching vehicle makes:", error);
    return <h1>Error fetching vehicle makes </h1>;
  }
}
