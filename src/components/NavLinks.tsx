import Link from "next/link";

export default function NavLinks() {
  return (
    <nav>
      <ul>
        <Link href="/">
          <li>projects</li>
        </Link>
        <Link href="/about">
          <li>about</li>
        </Link>
      </ul>
    </nav>
  );
}
