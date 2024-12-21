interface IVehicleResponse {
  Count: number;
  Message: string;
  SearchedCriteria: string;
  Results: IVehicle[];
}

interface IVehicle {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

export const getVehicleMakes = async (): Promise<IVehicle[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_MAKE_URL}`);
    if (!response.ok) {
      throw new Error('Failed to fetch makes');
    }

    const data: IVehicleResponse = await response.json();

    const sortedVehicles = data.Results.sort((a, b) =>
      a.MakeName.localeCompare(b.MakeName)
    );

    return sortedVehicles;
  } catch (error) {
    console.error('Error fetching vehicle makes:', error);
    return [];
  }
};
