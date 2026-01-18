import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-20 flex flex-col lg:flex-row items-center">
          <div className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
              <li className="text-4xl list-none">
                <a
                  href="/donate"
                  className="text-blue-600 hover:underline"
                >
                  Donate Here
                </a>
              </li>
          </div>
          <div className="flex flex-col lg:flex-row text-center justify-center items-center lg:pl-4 lg:w-1/2 mb-10 lg:mb-0 space-y-4 lg:space-y-0">
            <a
              href={`https://twitter.com/username`}
              className="mx-3 hover:text-blue-500 transition-colors duration-200 flex lg:flex-col items-center gap-2"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.814L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Twitter
            </a>
            <a
              href={`https://github.com/username`}
              className="mx-3 hover:text-gray-700 transition-colors duration-200 flex lg:flex-col items-center gap-2"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.47.087.677-.233.677-.522 0-.257-.009-1.04-.015-2.042-2.782.601-3.37-1.34-3.37-1.34-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.116-4.555-4.949 0-1.092.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.65 0 0 .84-.269 2.75 1.025.799-.223 1.64-.335 2.48-.339.84.004 1.682.116 2.48.339 1.908-1.294 2.748-1.025 2.748-1.025.546 1.38.202 2.398.099 2.65.64.698 1.028 1.59 1.028 2.682 0 3.841-2.339 4.691-4.566 4.94.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .289.208.61.684.522C21.137 20.195 24 16.44 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd"/>
              </svg>
              Github
            </a>
          </div>
          <div className="text-lg font-bold tracking-tighter leading-tight text-center lg:text-right mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
          <br className="hidden lg:block" />
            © Copyright 2025
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
