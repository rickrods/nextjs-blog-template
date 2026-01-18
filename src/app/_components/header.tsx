import Link from "next/link";
import Container from "./container";

const Header = () => {
  return (
    <header className="bg-neutral-50 border-b border-neutral-200 dark:bg-slate-800 py-4 md:py-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight text-center md:text-left mb-4 md:mb-0">
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </h2>
          <nav>
            <ul className="flex items-center text-lg font-bold">
              <li>
                <Link href="/about" className="hover:underline mx-2">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline mx-2">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline mx-2">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
