"use client";
import Image from "next/image";
import {
  Check,
  Flame,
  LogOut,
  Settings,
  SmilePlus,
  User,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const router = useRouter();
	// const [user, setUser] = useState(null);
	// const [data, setData] = useState(null);

	// useEffect(() => {
	// 	// Retrieve user info from sessionStorage
	// 	const storedUser = sessionStorage.getItem("user");
	// 	if (!storedUser) {
	// 		router.push("/auth/login"); // Redirect if not logged in
	// 		return;
	// 	}

	// 	setUser(JSON.parse(storedUser));

	// 	// Fetch protected data
	// 	fetch("http://127.0.0.1:8000/api/protected-endpoint/", {
	// 		method: "GET",
	// 		credentials: "include", // Ensures cookies are sent
	// 	})
	// 		.then((res) => {
	// 			if (res.status === 401) {
	// 				sessionStorage.clear();
	// 				router.push("/auth/login"); // Redirect on unauthorized
	// 			}
	// 			return res.json();
	// 		})
	// 		.then((data) => setData(data))
	// 		.catch((err) => console.error(err));
	// }, []);

  return (
    <div className="flex h-screen bg-[#f1fff1] text-black">
      {/* Sidebar */}
      <div
        className={`w-60 bg-[#f1fff1] flex flex-col h-full border-r border-[#e4f7ff] fixed top-0 left-0 z-60 transform transition-transform duration-300 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Mobile Close Button */}
        <div className="md:hidden flex justify-end p-4">
          <button onClick={() => setIsSidebarOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>
        {/* Logo */}
        <div className="p-6 flex items-center gap-3">
          <Image
                src="/images/logo.svg"
                alt="Logo"
                width={150}
                height={150}
                className="object-cover z-10"
                priority
            />
        </div>

        {/* Navigation */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="px-4 py-6">
            <div className="mb-6">
              <h2 className="text-lg font-medium px-2 mb-2 text-[#343c6a]">Main</h2>
              <div className="space-y-2">
                <Link href={"#"} className="w-full flex items-center gap-3 px-4 py-3 bg-[#008080] text-white rounded-md">
                  <SmilePlus className="h-5 w-5" />
                  <span>Mood Tracker</span>
                </Link>
                <Link href={"#"} className="w-full flex items-center gap-3 px-4 py-3 bg-[#008080]/10 text-black rounded-md">
                  <User className="h-5 w-5" />
                  <span>Therapy</span>
                </Link>
                <Link href={"#"} className="w-full flex items-center gap-3 px-4 py-3 bg-[#008080]/10 text-black rounded-md">
                  <Check className="h-5 w-5" />
                  <span>Self Care Exercise</span>
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium px-2 mb-2 text-[#343c6a]">Others</h2>
              <div className="space-y-2">
                <Link href={"#"} className="w-full flex items-center gap-3 px-4 py-3 bg-[#008080]/10 text-black rounded-md">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </Link>
                
              </div>
            </div>
          </div>

          <div className="p-4 mb-6">
            <button className="flex items-center gap-2 bg-[#87ceeb] text-[#343c6a] px-6 py-3 rounded-full">
              <LogOut className="h-5 w-5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-0 md:ml-60 h-screen overflow-hidden">
        {/* Fixed Header */}
        <div className="fixed top-0 right-0 w-full bg-[#f1fff1] ml-0 md:ml-60 h-20 z-40">
          <div className="flex justify-between items-center p-4 ml-0 md:ml-60">
            {/* Conditionally show hamburger on mobile or streak on desktop */}
            <div>
              <div className="block md:hidden">
                <button onClick={() => setIsSidebarOpen(true)}>
                  <Menu className="h-6 w-6" />
                </button>
              </div>
              <div className="hidden md:flex bg-[#e4f7ff] rounded-full px-6 py-2 items-center gap-3">
                <Flame className="h-6 w-6 text-[#fe5c73]" />
                <p className="text-sm text-[#718ebf]">21 Days..</p>
              </div>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/man.avif"
                  alt="User Avatar"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#343c6a]">Kuldeep Yadav</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 mt-20 overflow-scroll">
          {/* Insert section */}
          <div className="flex flex-col md:flex-row gap-6 py-10 h-full">
  {/* AI Journal Card */}
  <div className="flex-1 bg-[#008080] rounded-lg overflow-hidden relative group">
    <img 
      src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
      alt="Journal" 
      className="w-full h-[300px] object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#008080] to-transparent">
      <button className="w-full bg-[#e4f7ff] text-[#008080] py-3 rounded-md flex items-center justify-center gap-2 transform transition-transform group-hover:translate-y-0 translate-y-1">
        <span>AI Journal</span>
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  </div>

  {/* Mood Graph Card */}
  <div className="flex-1 bg-[#008080] rounded-lg overflow-hidden relative group">
    <img 
      src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
      alt="Meditation" 
      className="w-full h-[300px] object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#008080] to-transparent">
      <button className="w-full bg-[#e4f7ff] text-[#008080] py-3 rounded-md flex items-center justify-center gap-2 transform transition-transform group-hover:translate-y-0 translate-y-1">
        <span>Mood Graph</span>
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  </div>
</div>

        </div>
        </div>
      </div>
  );
}
