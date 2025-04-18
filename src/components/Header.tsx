import Link from "next/link";

export default function Header() {
  return (
    <section>
      <article className="logo">fiona.</article>
      <article>
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
      </article>
    </section>
  );
}
