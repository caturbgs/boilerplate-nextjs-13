'use client';

export default function ProjectPage() {
  return (
    <div>
      {/* Error if imported async/await in client component */}
      {/* Workaround to this issue */}
      {/* @ts-expect-error Server Component */}
      {/* <ContactUsPage /> */}
    </div>
  );
}
