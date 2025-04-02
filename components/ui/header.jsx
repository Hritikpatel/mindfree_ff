"use client"
import Image from "next/image"
import { Flame } from "lucide-react"

export default function Header({ userName, userImage }) {
  return (
    <div className="fixed top-0 right-0 w-full bg-[#f1fff1] ml-60 h-20">
      <div className="flex justify-between items-center p-4 ml-60">
        {/* Streaks */}
        <div className="bg-[#e4f7ff] rounded-full px-6 py-2 flex items-center gap-3">
          <Flame className="h-6 w-6 text-[#fe5c73]" />
          <div>
            <p className="text-sm text-[#718ebf]">21 Days..</p>
          </div>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={userImage}
              alt="User Avatar"
              width={64}
              height={124}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#343c6a]">{userName}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}