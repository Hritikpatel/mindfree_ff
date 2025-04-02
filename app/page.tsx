"use client"
import { Button } from "@/components/ui/button";
import { MoveRight, Menu } from "lucide-react";
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="h-full w-screen text-black bg-[#F1FFF1] overflow-hidden">
            {/* Top Banner */}
            <div id="topBanner" className="hidden sm:flex w-full h-10 align-middle p-2 gap-3 justify-center bg-[#87CEEB] fixed top-0 left-0 z-50">
                <p className="truncate">
                    Appointments in as little as 24 hours
                </p>
                <Link href={"#"} className="underline">Start your free assessment</Link>
            </div>

            {/* Navigation */}
            <nav className="w-screen bg-white px-4 sm:px-6 py-3 flex flex-row justify-between items-center gap-3.5 fixed mt-0 sm:mt-10 top-0 left-0 z-50">
                <Image
                    src="/images/logo.svg"
                    alt="Logo"
                    width={140}
                    height={40}
                    className="z-10"
                    priority
                />

                {/* Mobile Menu Button */}
                <button 
                    className="sm:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Menu className="h-6 w-6" />
                </button>

                {/* Desktop Navigation */}
                <ul className="hidden sm:flex gap-4 lg:gap-7 items-center">
                    {['Home', 'About Us', 'Services', 'Pricing', 'Contact'].map((item) => (
                        <li key={item}>
                            <Link href={"#"} className="text-sm lg:text-md font-medium transition-colors hover:text-[#004D4D]">
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Buttons */}
                <div className="hidden sm:flex items-center gap-2">
                    <div className="w-full flex flex-col sm:flex-row gap-2 text-black">
                        <Button className="w-full sm:w-1/2 px-6 py-5 rounded-4xl border border-transparent text-15 font-medium text-black bg-[#87CEEB] hover:bg-[#82c6e1]">
                            Sign Up
                            <MoveRight className="h-4 w-4 font-bold transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button variant="outline" className="w-full sm:w-1/2 px-6 py-5 rounded-4xl border-[#87CEEB] text-[#87CEEB] hover:border-[#82c6e1] hover:text-[#82c6e1]">Log In</Button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="sm:hidden fixed top-16 left-0 w-full bg-white z-40 shadow-lg">
                    <ul className="flex flex-col items-center py-4">
                        {['Home', 'About Us', 'Services', 'Pricing', 'Contact'].map((item) => (
                            <li key={item} className="w-full text-center py-2">
                                <Link href={"#"} className="block w-full py-2 hover:bg-gray-100">
                                    {item}
                                </Link>
                            </li>
                        ))}
                        <div className="w-full flex flex-col sm:flex-row gap-2 text-black p-10">
                            <Button className="w-full sm:w-1/2 px-6 py-5 rounded-4xl border border-transparent text-15 font-medium text-black bg-[#87CEEB] hover:bg-[#82c6e1]">
                                Sign Up
                                <MoveRight className="h-4 w-4 font-bold transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button variant="outline" className="w-full sm:w-1/2 px-6 py-5 rounded-4xl border-[#87CEEB] text-[#87CEEB] hover:border-[#82c6e1] hover:text-[#82c6e1]">Log In</Button>
                        </div>
                    </ul>
                </div>
            )}

            {/* Main Content */}
            <main className="flex mb-7 mt-16 sm:mt-20">
                <section className="grid grid-cols-1 md:grid-cols-12 gap-5 flex-1 h-full w-full p-4 sm:p-10">
                    {/* Left Column */}
                    <div className="col-span-1 md:col-span-3 order-1">
                        <div className="relative flex flex-col gap-3 lg:gap-5">
                            <div className="absolute top-1/5 right-4">
                                <Image
                                    src="/images/flower.svg"
                                    alt="Meditation"
                                    width={25}
                                    height={15}
                                    className="object-cover mt-0.5"
                                    priority
                                />
                            </div>
                            <p className="italic font-mono text-sm text-gray-600">Enhancement and Support for Mental Health</p>
                            <h1 className="text-2xl md:text-4xl font-semibold text-[#004D4D]">YOUR MIND MATTERS: PRIORITIZING MENTAL HEALTH</h1>
                            <div className="border border-black"></div>
                            <p className="font-extralight text-sm md:text-base">MindFree leverages cutting-edge AI to offer personalized insights into mental health. Our goal is to help individuals identify signs of depression and take proactive steps toward better well-being.</p>
                            <div className="w-full flex flex-col sm:flex-row gap-2 text-black">
                                <Button className="w-full sm:w-1/2 border border-transparent rounded-4xl text-15 font-medium text-black bg-[#87CEEB] hover:bg-[#82c6e1]">
                                    Start Test
                                    <MoveRight className="h-4 w-4 font-bold transition-transform group-hover:translate-x-1" />
                                </Button>
                                <Button variant="outline" className="w-full sm:w-1/2 px-6 py-5 rounded-4xl">Explore</Button>
                            </div>
                        </div>
                    </div>

                    {/* Center Column */}
                    <div className="col-span-6 relative hidden md:block p-5 order-3" style={{
                        backgroundImage: "url('/images/hero_mediation.png')",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }}>
                        <div className="flex gap-4 text-white font-mono text-sm md:flex-col lg:flex-row">
                            <div className="flex gap-1 items-center bg-black/5 p-2 backdrop-blur-md">
                                <Image
                                    src="/images/flower.svg"
                                    alt="Meditation"
                                    width={20}
                                    height={15}
                                    className="object-cover mt-0.5"
                                    priority
                                />
                                <p className="">Rediscover Your Inner Peace</p>
                            </div>
                            <div className="flex gap-1 items-center bg-black/5 p-2 backdrop-blur-md">
                                <Image
                                    src="/images/pattern-architecture_svgrepo.com.svg"
                                    alt="Meditation"
                                    width={20}
                                    height={15}
                                    className="object-cover mt-0.5"
                                    priority
                                />
                                <p className="">Holistic Well-being</p>
                            </div>
                        </div>
                        <div className="absolute z-30 top-5 right-5 md:hidden lg:block">
                            <Image
                                src="/images/ellipse.svg"
                                alt="ellipse"
                                width={45}
                                height={45}
                                className="object-cover mt-0.5"
                                priority
                            />
                        </div>
                        <div className="absolute z-30 bottom-5 left-5 rotate-180 md:hidden lg:block">
                            <Image
                                src="/images/ellipse.svg"
                                alt="ellipse"
                                width={45}
                                height={45}
                                className="object-cover mt-0.5"
                                priority
                            />
                        </div>
                        <div className="absolute bg-black/5 z-30 backdrop-blur-lg text-accent font-normal text-sm/5 w-3xs bottom-5 right-5">
                            <div className="relative px-4 py-5.5">
                                <p className="align-middle">Understanding your<br/>mind is the first step to<br/>healing.</p>
                                <Image
                                    src="/images/up.svg"
                                    alt="ellipse"
                                    width={64}
                                    height={64}
                                    className="object-cover absolute top-5 right-5"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-span-1 md:col-span-3 grid grid-rows-4 gap-5 order-2 md:order-3">
                        <div className="row-span-1 flex flex-row gap-2.5">
                            <h2 className="w-1/2 text-sm md:text-md font-light text-[#004D4D]">Empowering individuals with AI to understand their mental health better.</h2>
                            <Link href={"/"} className="w-1/2 cursor-pointer" style={{
                                backgroundImage: "url('/images/hero_get_help.svg')",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "contain"
                            }}>
                                <p className="opacity-0">get help</p>
                            </Link>
                        </div>
                        <div className="relative row-span-3" style={{
                            backgroundImage: "url('/images/hero_sound.png')",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover"
                        }}>
                            <div className="absolute bg-black/5 backdrop-blur-lg text-accent font-normal text-lg/5 pt-5 top-5 left-5 right-5">
                                <div className="flex flex-row px-4 py-5.5">
                                    <p className="align-middle">Your Companion for<br/>Mental Well-being</p>
                                    <Image
                                        src="/images/up.svg"
                                        alt="ellipse"
                                        width={64}
                                        height={64}
                                        className="object-cover absolute top-0 right-0"
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="absolute z-30 bottom-5 left-5 rotate-180">
                                <Image
                                    src="/images/ellipse.svg"
                                    alt="ellipse"
                                    width={45}
                                    height={45}
                                    className="object-cover mt-0.5"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            
            {/*  */}
            <div className="relative flex flex-col gap-12 md:gap-24 mb-7">
                <div className="z-10 absolute -left-10 top-1/12">
                    <Image
                        src="/images/bg-flower.svg"
                        alt="Logo"
                        width={150}
                        height={350}
                        priority
                    />
                </div>
                <div className="z-10 absolute left-3/12 top-1/12">
                    <Image
                        src="/images/bg-flower.svg"
                        alt="Logo"
                        width={64}
                        height={64}
                        priority
                    />
                </div>
                <div className="z-10 absolute -right-30 -top-2/12">
                    <Image
                        src="/images/bg-flower.svg"
                        alt="Logo"
                        width={250}
                        height={350}
                        priority
                    />
                </div>
                {/* Heading Section */}
                <div className="flex flex-col mb-7 gap-5 px-4 sm:px-8 lg:px-16 xl:px-32 text-center">
                    <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#004D4D]">
                        GET BETTER, FASTER WITH QUALITY MENTAL HEALTH CARE
                    </h1>
                    <span className="text-[#020202] text-sm sm:text-base md:text-lg">
                        Our providers take a hands-on approach to help you see improvement at every step, 
                        no matter how severe your symptoms. Just come as you are and let us take it from there.
                    </span>
                </div>

                {/* Cards Section */}
                <div className="flex flex-col md:flex-row gap-7 px-4 sm:px-8 lg:px-16 xl:px-32 mb-7">
                    {/* Card 1 */}
                    <div className="flex-1 relative bg-[#87CEEB]/20 flex flex-col items-center p-5 pt-16 pb-8 gap-2.5 rounded-lg border-2">
                        <Image
                            src={"/images/appointment.svg"}
                            alt="appointment"
                            width={64}
                            height={64}
                            className="absolute -top-8"
                        />
                        <h4 className="text-[#2E4985] font-semibold text-xl sm:text-2xl text-center">
                            Appointments in as little as 2 days
                        </h4>
                        <p className="text-[#5E6883] text-center text-sm sm:text-base">
                            Receive quick guidance and support by speaking with a 
                            licensed professional in a matter of hours.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="flex-1 relative bg-[#87CEEB]/20 flex flex-col items-center p-5 pt-16 pb-8 gap-2.5 rounded-lg border-2">
                        <Image
                            src={"/images/severe_cases.svg"}
                            alt="severe cases"
                            width={64}
                            height={64}
                            className="absolute -top-8"
                        />
                        <h4 className="text-[#2E4985] font-semibold text-xl sm:text-2xl text-center">
                            Care for even the most severe cases
                        </h4>
                        <p className="text-[#5E6883] text-center text-sm sm:text-base">
                            Our specialists are trained to handle complex cases with 
                            personalized treatment plans.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="flex-1 relative bg-[#87CEEB]/20 flex flex-col items-center p-5 pt-16 pb-8 gap-2.5 rounded-lg border-2">
                        <Image
                            src={"/images/support.svg"}
                            alt="support"
                            width={64}
                            height={64}
                            className="absolute -top-8"
                        />
                        <h4 className="text-[#2E4985] font-semibold text-xl sm:text-2xl text-center">
                            1:1 support from start to finish
                        </h4>
                        <p className="text-[#5E6883] text-center text-sm sm:text-base">
                            Dedicated professional support throughout your entire 
                            mental health journey.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="bg-[#87CEEB]/23">
                <div className="grid grid-cols-6 mb-7 px-32 py-16 gap-5" style={{
                    backgroundImage: "url('/images/bg_long.png')",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}>

                    <div className="col-span-2 border-2 border-[#020202]/50 rounded-2xl p-5">
                        <h1>WE OFFER</h1>
                        <ul>
                            <li><b>Psychiatry</b>:- helping minds heal through expert care and support.</li><br/>
                            <li><b>Therapy</b>:- a safe and supportive space to heal, grow, and gain clarity.</li><br/>
                            <li><b>Teen Care</b>:- Give your teen a safe space to connect, grow, and get expert support.</li>
                        </ul>
                    </div>
                    <div className="col-span-4">asdad</div>
                        

                </div>
            </div>

        </div>
    );
}