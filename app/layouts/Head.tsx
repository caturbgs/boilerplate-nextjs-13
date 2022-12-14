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
  ];

  return (
    <header>
      <div className="flex flex-1 items-center justify-between lg:container lg:max-w-screen-lg h-[80px] px-4 mx-auto">
        <div className="flex">
          {menuHeader.map((menu) => {
            return (
              <Link
                href={menu.route}
                className={`first:ml-0 ml-7 text-2xl font-semibold ${
                  pathname == menu.route "text-black"k' "text-gray-600"0'
                } hover:text-black`}
                key={menu.route}>
                {menu.name}
              </Link>
            );
          })}
        </div>
        <div>
          <Link href="/contact-us">
            <button className="bg-blue-600 hover:bg-white font-medium text-white hover:text-blue-600 border border-solid border-blue-600 transition ease-in-out duration-200 rounded-md px-4 py-1">
              Contact Us!
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
