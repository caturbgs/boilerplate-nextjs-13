import { usePathname } from 'next/navigation';

export default async function Head() {
  const pathname = usePathname();

  return (
    <>
      <title>{!pathname ? 'Home' : pathname}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  );
}
