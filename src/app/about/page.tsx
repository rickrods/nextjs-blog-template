import type { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Site Title",
  description: "About the author",
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <div className="container mx-auto px-5">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8 mb-4">
        About the Author
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Image
            src="/assets/blog/authors/jj.jpeg"
            alt="Jason, the author"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <div className="md:col-span-2">
          <p className="text-lg leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.           </p>
          <p className="text-lg leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.           </p>
          <p className="text-lg leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.           </p>
          <div>
            <h2 className="text-2xl font-bold mb-2">Find me online:</h2>
            <ul className="list-disc list-inside">
              <li className="text-lg">
                GitHub:{" "}
                <a
                  href="https://github.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  username
                </a>
              </li>
              <li className="text-lg">
                X (Twitter):{" "}
                <a
                  href="https://twitter.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  @username
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}