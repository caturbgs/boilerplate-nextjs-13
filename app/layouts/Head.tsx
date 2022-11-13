'use client';

import Link from 'next/link';

export default function LayoutHead() {
  const menuHeader = ['Home', 'Project', 'Experience', 'Contact Us'];

  return (
    <header>
      <div className="flex flex-1 items-center justify-between lg:container lg:max-w-screen-lg h-[80px] px-4 mx-auto">
        <div className="flex">
          {menuHeader.map((menu) => {
            return (
              <Link
                href={menu
                  .split(' ')
                  .map((r) => r.toLowerCase())
                  .join('_')}
                className="first:ml-0 ml-7 text-2xl font-semibold text-gray-600 hover:text-black"
                key={menu}>
                {menu}
              </Link>
            );
          })}
        </div>
        <div>
          <button className="bg-blue-600 text-white">Data</button>
        </div>
      </div>
    </header>
  );
}
