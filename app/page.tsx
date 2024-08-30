import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <div className=" flex items-center gap-4 text-6xl font-extrabold">
          <Image
            src="/logo.jpeg"
            width={100}
            height={100}
            alt='PixelVault logo'
            className="rounded-lg"
          />
          PixelVault
        </div>
        <div className="text-[16px] font-semibold mt-4">A web app where you can upload images, like them, and save your favorites for easy access.</div>
        <div className="mt-4">
          <Button
            asChild
            className="w-full justify-start flex gap-2 p-4 h-16 text-2xl rounded-lg font-semibold hover:bg-gray-400"
          >
            <Link href="/gallery">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-8 font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              Explore Gallery
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
