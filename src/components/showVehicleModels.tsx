import { IVehicleModel } from '@/utils/getVehicleModels';

interface ShowVehicleModelsProps {
  vehicleModels: IVehicleModel[];
}

export default function ShowVehicleModels({
  vehicleModels,
}: ShowVehicleModelsProps) {
  const isCentered = vehicleModels.length < 4;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        {vehicleModels[0].Make_Name} Models
      </h1>

      <div
        className={`${
          isCentered
            ? 'flex justify-center items-center flex-wrap gap-6'
            : 'grid'
        } grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6`}
      >
        {vehicleModels.map((model) => (
          <div
            key={model.Model_ID}
            className="bg-white border rounded-lg shadow-lg p-4 flex flex-col items-center justify-between hover:shadow-xl transition-shadow duration-300 w-full sm:w-72"
          >
            <h3 className="font-semibold text-lg mb-2">
              Model Name: {model.Model_Name}
            </h3>
            <p className="text-gray-500 mb-4">Make Name: {model.Make_Name}</p>
            <p className="text-gray-500 mb-4">Model ID: {model.Model_ID}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
