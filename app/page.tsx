"use client"
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Image from "next/image"
import Link from "next/link";
export default function Home() {

    return (
        <div className="h-screen w-screen text-black bg-[#F1FFF1]">
            <div id="topBanner" className="w-full h-fit align-middle p-2 flex gap-3 justify-center bg-[#87CEEB]">
                <p>
                    Appointments in as little as 24 hours
                </p>
                <Link href={"#"} className="underline">Start your free assessment</Link>
            </div>
            <nav className="bg-white px-6 py-3 flex flex-row justify-between gap-3.5">
                <Image
                    src="/images/logo.svg"
                    alt="Logo"
                    width={140}
                    height={40}
                    className="z-10"
                    priority
                />
                <ul className="flex gap-7 items-center">
                    <li>
                        <Link href={"#"} className="text-md font-medium transition-colors hover:text-[#004D4D]">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"} className="text-md font-medium transition-colors hover:text-[#004D4D]">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"} className="text-md font-medium transition-colors hover:text-[#004D4D]">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"} className="text-md font-medium transition-colors hover:text-[#004D4D]">
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"} className="text-md font-medium transition-colors hover:text-[#004D4D]">
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="flex items-center gap-2">
                    <Button variant="outline" className="group">
                        <Link href={"#"}>
                            Log In
                            <LogIn className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                    <Button variant="default" className="group">
                        Log In
                        <LogIn className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>
            </nav>
            <main className="flex">
                <section className="grid grid-cols-7 gap-5 flex-1 h-full w-full p-10">
                    <div className="col-span-2">
                        <div className="flex flex-col gap-7">
                            <p className="italic font-mono text-sm text-gray-600">Enhancement and Support for Mental Health</p>
                            <h1 className="text-4xl font-semibold text-[#004D4D]">YOUR MIND MATTERS: PRIORITIZING MENTAL HEALTH</h1>
                            <div className="border border-black"></div>
                            <p className="font-extralight">MindFree leverages cutting-edge Al to offer personalized insights into mental health. Our goal is to help individuals identify signs of depression and take proactive steps toward better well-being.</p>
                        </div>
                    </div>
                    <div className="col-span-4">World</div>
                    <div className="col-span-1">Help</div>

                    
                </section>
            </main>
        </div>
    );
}