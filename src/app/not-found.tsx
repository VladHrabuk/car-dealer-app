import Link from "next/link";

interface ErrorProps {
  statusCode: number;
  message: string;
}

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh]">
      <h1 className="text-2xl font-bold mb-4">Error 404</h1>
      <p className="text-2xl">
        Our apologies! This page seems to have taken a wrong step.
      </p>
      <div className="font-bold rounded-lg bg-black w-36 p-2 mt-4 text-white text-center">
        <Link href="/">Return back</Link>
      </div>
    </div>
  );
}
