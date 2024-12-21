interface IVehicleModelsResponse {
  Count: number;
  Message: string;
  SearchedCriteria: string;
  Results: IVehicleModel[];
}

export interface IVehicleModel {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export const getVehicleModels = async (
  makeId: number,
  year: number
): Promise<IVehicleModel[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MODEL_URL}${makeId}/modelyear/${year}?format=json`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch models');
    }

    const data: IVehicleModelsResponse = await response.json();

    return data.Results;
  } catch (error) {
    console.error('Error fetching vehicle models:', error);
    return [];
  }
};
