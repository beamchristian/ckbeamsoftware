import Link from 'next/link';

export default async function Footer() {
  return (
    <footer className="p-8 text-center bottom-0 border-t-2">
      <p>&copy; 2023 CkBeam Software</p>
      <p>
        <Link href="/about">About</Link> | {''}
        <Link href="/contact">Contact Us</Link>
      </p>
    </footer>
  );
}
