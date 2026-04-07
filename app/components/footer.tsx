import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <Link href="/">merch</Link>
      |
      <Link href="/contact">contact</Link>
      |
      <Link href="/about">about</Link>
    </div>
  );
}
