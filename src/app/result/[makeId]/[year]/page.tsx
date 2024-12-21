import { getVehicleModels, IVehicleModel } from '@/utils/getVehicleModels';
import { getVehicleMakes } from '@/utils/getVehicleMakes';
import Link from 'next/link';
import ShowVehicleModels from '@/components/showVehicleModels';

export async function generateStaticParams() {
  const makes = await getVehicleMakes();
  const years = Array.from(
    { length: new Date().getFullYear() - 2014 },
    (_, i) => 2015 + i
  );

  const params = makes.flatMap((make) =>
    years.map((year) => ({
      makeId: make.MakeId.toString(),
      year: year.toString(),
    }))
  );

  return params;
}

export default async function ResultPage({
  params,
}: {
  params: Promise<{ makeId: string; year: string }>;
}) {
  const { makeId, year } = await params;

  const vehicleModels: IVehicleModel[] | [] = await getVehicleModels(
    Number(makeId),
    Number(year)
  );

  if (vehicleModels.length === 0) {
    return (
      <div className="p-8 mt-28 flex flex-col items-center justify-center text-center w-full">
        <h1 className="text-2xl font-bold">No Vehicle Models Found</h1>
        <p>Try selecting a different make or year.</p>
        <div className="font-bold rounded-lg bg-black w-36 p-2 mt-2 text-white">
          <Link href="/">Return back</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <ShowVehicleModels vehicleModels={vehicleModels} />
      <div className="font-bold rounded-lg bg-black w-36 p-2 my-2 text-white text-center">
        <Link href="/">Return back</Link>
      </div>
    </div>
  );
}
