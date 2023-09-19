'use client';

import { Button } from '@components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LayoutHead() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `ml-7 text-2xl font-semibold hover:text-blackfirst:ml-0 ${pathname === path ? 'text-black' : 'text-gray-600'} `;

  return (
    <header>
      <div className="mx-auto flex h-[80px] flex-1 items-center justify-between px-4 lg:container lg:max-w-screen-lg">
        <div className="flex">
          <Link href="/" className={linkClass('/')}>
            Home
          </Link>
          <Link href="/project" className={linkClass('/project')}>
            Project
          </Link>
          <Link href="/experience" className={linkClass('/experience')}>
            Experience
          </Link>
          <Link href="/contact-us" className={linkClass('/contact-us')}>
            Contact Us
          </Link>
        </div>
        <div>
            <Button asChild className="rounded-md border border-solid border-blue-600 bg-blue-600 px-4 py-1 font-medium text-white transition duration-200 ease-in-out hover:bg-white hover:text-blue-600">
              <Link href="/contact-us">
                  Contact Us!
              </Link>
            </Button>
        </div>
      </div>
    </header>
  );
}
