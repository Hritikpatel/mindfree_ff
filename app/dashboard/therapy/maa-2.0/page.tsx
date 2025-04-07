"use client"

import { useState, useEffect, useRef } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { SmilePlus, Send, LogOut, Menu, Flame, User, Check, X, ImagePlus } from "lucide-react"
import Link from "next/link"

type Message = {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Sample user data
  const user = {
    name: "Kuldeep Yadav",
    avatar: "/man.avif",
    streak: 21
  }

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    // Add user message
    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, newUserMessage])
    setInputMessage("")
    setIsLoading(true)

    try {
      const response = await fetch('http://127.0.0.1:8000/api/maa-2.0/chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCookie('csrftoken') || '' // Add CSRF token if needed
        },
        body: JSON.stringify({ message: inputMessage }),
        credentials: 'include'
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      
      const newBotMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.message,
        sender: 'bot',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, newBotMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble connecting. Please try again later.",
        sender: 'bot',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  // Helper function to get CSRF token
  function getCookie(name: string) {
    if (typeof document === 'undefined') return ''
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop()?.split(';').shift()
    return ''
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="flex h-screen bg-[#f1fff1] text-black overflow-hidden">
      {/* Sidebar */}
      <aside className={`w-64 bg-[#f1fff1] flex flex-col h-full border-r border-[#e4f7ff] fixed md:relative z-50 transform transition-transform duration-300 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
        
        <div className="md:hidden flex justify-end p-4">
          <button onClick={() => setIsSidebarOpen(false)} className="p-1 rounded-full hover:bg-gray-200">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 flex items-center gap-3">
          <Image
            src="/images/logo.svg"
            alt="MindCare Logo"
            width={150}
            height={40}
            priority
          />
        </div>

        <nav className="flex-1 flex flex-col justify-between px-4 py-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium px-2 mb-2 text-[#343c6a]">Main</h2>
              <div className="space-y-2">
                <Link href="/dashboard/mood-tracker/ai-journal" className="flex items-center gap-3 px-4 py-3 hover:bg-[#008080]/10 rounded-md transition-colors">
                  <SmilePlus className="h-5 w-5" />
                  <span>Mood Tracker</span>
                </Link>
                <Link href="/dashboard/therapy/maa-2.0" className="flex items-center gap-3 px-4 py-3 bg-[#008080] text-white rounded-md">
                  <User className="h-5 w-5" />
                  <span>Therapy</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-[#008080]/10 rounded-md transition-colors">
                  <Check className="h-5 w-5" />
                  <span>Self Care Exercise</span>
                </Link>
              </div>
            </div>

            {/* <div>
              <h2 className="text-lg font-medium px-2 mb-2 text-[#343c6a]">Others</h2>
              <div className="space-y-2">
                <Link href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-[#008080]/10 rounded-md transition-colors">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </Link>
              </div>
            </div> */}
          </div>

          <div className="p-4">
            <button className="flex items-center gap-2 w-full bg-[#87ceeb] hover:bg-[#76bdd8] text-[#343c6a] px-6 py-3 rounded-full transition-colors">
              <LogOut className="h-5 w-5" />
              <span>Log Out</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="bg-[#f1fff1] border-b border-[#e4f7ff] h-20 flex-shrink-0">
          <div className="flex justify-between items-center h-full px-6">
            <button 
              onClick={() => setIsSidebarOpen(true)} 
              className="md:hidden p-2 rounded-full hover:bg-gray-200"
            >
              <Menu className="h-6 w-6" />
            </button>

            <div className="hidden md:flex items-center gap-2 bg-[#e4f7ff] rounded-full px-4 py-2">
              <Flame className="h-5 w-5 text-[#fe5c73]" />
              <span className="text-sm text-[#718ebf]">{user.streak} Day Streak</span>
            </div>

            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold text-[#343c6a]">{user.name}</h3>
            </div>
          </div>
        </header>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${
                    message.sender === 'user' 
                      ? 'bg-[#21978b] text-white' 
                      : 'bg-white text-[#141414]'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] bg-white rounded-2xl p-4 shadow-sm">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-[#e8e8e8] bg-[#f5f5f5] p-4">
            <div className="flex items-center rounded-full bg-white p-1 px-3 shadow-sm">
              <Button variant="ghost" size="icon" className="rounded-full text-[#c4c4c4] hover:text-[#21978b]">
                <ImagePlus className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-[#c4c4c4] hover:text-[#21978b]">
                <div className="flex items-center justify-center h-5 w-5 border border-[#c4c4c4] rounded text-xs font-bold">
                  GIF
                </div>
              </Button>
              
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                disabled={isLoading}
              />
              
              <Button variant="ghost" size="icon" className="rounded-full text-[#c4c4c4] hover:text-[#21978b]">
                <SmilePlus className="h-5 w-5" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-[#21978b] hover:bg-[#21978b]/10"
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}