'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LayoutHead() {
  const pathname = usePathname();

  const menuHeader = [
    {
      name: 'Home',
      route: '/',
    },
    {
      name: 'Project',
      route: '/project',
    },
    {
      name: 'Experience',
      route: '/experience',
    },
    {
      name: 'Contact Us',
      route: '/contact-us',
    },
  ];

  return (
    <header>
      <div className="mx-auto flex h-[80px] flex-1 items-center justify-between px-4 lg:container lg:max-w-screen-lg">
        <div className="flex">
          {menuHeader.map((menu) => {
            return (
              <Link
                href={menu.route}
                className={`ml-7 text-2xl font-semibold first:ml-0 ${
                  pathname == menu.route ? 'text-black' : 'text-gray-600'
                } hover:text-black`}
                key={menu.route}>
                {menu.name}
              </Link>
            );
          })}
        </div>
        <div>
          <Link href="/contact-us">
            <button className="rounded-md border border-solid border-blue-600 bg-blue-600 px-4 py-1 font-medium text-white transition duration-200 ease-in-out hover:bg-white hover:text-blue-600">
              Contact Us!
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
