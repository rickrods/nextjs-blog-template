import type { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
  title: "Donate | Site Title",
  description: "Donate to the author",
  alternates: {
    canonical: "/about",
  },
};

export default function Donate() {
  return (
    <div className="container mx-auto px-5">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8 mb-4 text-center">
        Donate
      </h1>
        <div className="md:col-span-2">
            <p className="text-lg leading-relaxed mb-4 text-center">
            Donations help support the ongoing development and maintenance of this blog and other projects. 
            <br />
            Your contributions are greatly appreciated!

            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            <div className="md:col-span-1 flex flex-col items-center">
            <Image
                src="/assets/blog/example1/btc-donate-address.jpg"
                alt="BTC Donation Adddres"
                width={300}
                height={300}
                className="square-full"
            />
            <p className="text-lg leading-relaxed mb-4 text-center break-all">
                Donate BTC: <br />
                bc1q0wn7qf5m6u7sy7gkp6nl30l8f2kel3ucn5fkzq
            </p>
            </div>
            <div className="md:col-span-1 flex flex-col items-center">
            <Image
                src="/assets/blog/example2/ethereum-donate-address.jpg"
                alt="ETH Donation Adddres"
                width={300}
                height={300}
                className="square-full"
            />
            <p className="text-lg leading-relaxed mb-4 text-center break-all">
                Donate ETH: <br />
                0x16bf976cA6EAb9e9Cb01EBD14977cBc10E371831
            </p>
            </div>

        </div>
      </div>
  );
}