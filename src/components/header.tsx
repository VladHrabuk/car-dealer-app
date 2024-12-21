'use client';

import Link from 'next/link';
import LogoSVG from '../../public/svg/logoSVG';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  let pageName = '';
  if (pathname === '/') {
    pageName = 'Filters Page';
  }

  if (pathname.startsWith('/result/')) {
    pageName = 'Car Models';
  }

  return (
    <div>
      <div className="mx-2 mt-2 flex items-center gap-5 sm:flex-col sm:items-center">
        <Link href="/">
          <LogoSVG />
        </Link>
        <h1 className="text-lg font-bold text-gray-600">{pageName}</h1>
      </div>

      <hr className="border-black-500 my-3"></hr>
    </div>
  );
}
