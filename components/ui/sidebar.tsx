"use client"
import {
  Check,
  LogOut,
  Settings,
  SmilePlus,
  User,
} from "lucide-react"

export default function Sidebar() {
  return (
    <div className="w-60 bg-[#f1fff1] flex flex-col h-full border-r border-[#e4f7ff] fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path
              d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z"
              fill="#008080"
            />
            <path
              d="M12 3C9.5 3 7.5 4.5 6.5 6.5C5.5 8.5 5.5 11 6.5 13C7.5 15 9.5 16.5 12 16.5C14.5 16.5 16.5 15 17.5 13C18.5 11 18.5 8.5 17.5 6.5C16.5 4.5 14.5 3 12 3Z"
              fill="#008080"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-[#343c6a]">MindFree</h1>
      </div>

      {/* Navigation */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="px-4 py-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium px-2 mb-2 text-[#343c6a]">Main</h2>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-[#008080] text-white rounded-md isActive">
                <SmilePlus className="h-5 w-5" />
                <span>Mood Tracker</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-[#008080] text-white rounded-md">
                <User className="h-5 w-5" />
                <span>Therapy</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-[#008080] text-white rounded-md">
                <Check className="h-5 w-5" />
                <span>Self Care Exercise</span>
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium px-2 mb-2 text-[#343c6a]">Others</h2>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-[#008080] text-white rounded-md">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-[#008080] text-white rounded-md">
                <User className="h-5 w-5" />
                <span>Support</span>
              </button>
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
  )
}