"use client";
import Image from "next/image";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Flame,
  LogOut,
  Plus,
  Settings,
  SmilePlus,
  User,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [newEntry, setNewEntry] = useState({
    date: "",
    title: "",
    description: "",
    sentiment: "Neutral",
  });
  const entriesPerPage = 10;

  // Sample journal entries with realistic mental health-related content
  const initialJournalEntries = [
    // { date: "2023-03-15", title: "Morning Reflection", description: "Felt anxious about work presentation. Practiced deep breathing exercises.", sentiment: "Anxious" },
    // { date: "2023-03-14", title: "Therapy Session", description: "Discussed coping mechanisms for stress management with therapist.", sentiment: "Hopeful" },
    // { date: "2023-03-13", title: "Mindful Walk", description: "Took a 30-minute walk in nature, focused on being present.", sentiment: "Calm" },
    // { date: "2023-03-12", title: "Sleep Struggle", description: "Had trouble falling asleep due to racing thoughts.", sentiment: "Tired" },
    // { date: "2023-03-11", title: "Social Connection", description: "Had lunch with friends, felt supported and understood.", sentiment: "Happy" },
    // { date: "2023-03-10", title: "Meditation Practice", description: "Completed 10-minute guided meditation before bed.", sentiment: "Relaxed" },
    // { date: "2023-03-09", title: "Work Stress", description: "Overwhelmed with deadlines. Need to prioritize tasks.", sentiment: "Stressed" },
    // { date: "2023-03-08", title: "Positive Affirmations", description: "Practiced positive self-talk in the mirror this morning.", sentiment: "Confident" },
    // { date: "2023-03-07", title: "Nutrition Focus", description: "Prepared healthy meals to support mental well-being.", sentiment: "Proud" },
    // { date: "2023-03-06", title: "Creative Outlet", description: "Spent an hour painting, felt therapeutic.", sentiment: "Creative" },
    // { date: "2023-03-05", title: "Unexpected Setback", description: "Laptop crashed while working, lost an hour of progress. Frustrating but reminded myself to save work frequently.", sentiment: "Frustrated" },
    // { date: "2023-03-04", title: "Productivity Win", description: "Finished a long-overdue task at work. Felt accomplished and relieved.", sentiment: "Accomplished" },
    // { date: "2023-03-03", title: "Rainy Day Blues", description: "Stayed indoors all day due to rain. Felt a bit sluggish but enjoyed reading a book.", sentiment: "Melancholy" },
    // { date: "2023-03-02", title: "Gratitude Practice", description: "Wrote down three things I’m grateful for. Helped shift my mindset.", sentiment: "Grateful" },
    // { date: "2023-03-01", title: "Workout Success", description: "Finally got back to the gym after a week off. Felt energized.", sentiment: "Motivated" },
    // { date: "2023-02-28", title: "Overwhelmed", description: "Too many things on my plate today. Need to delegate and take breaks.", sentiment: "Overwhelmed" },
    // { date: "2023-02-27", title: "Family Time", description: "Had a great conversation with my sibling. Felt connected.", sentiment: "Loved" },
    // { date: "2023-02-26", title: "Self-Doubt", description: "Kept questioning my abilities today. Need to remind myself of past successes.", sentiment: "Insecure" },
    // { date: "2023-02-25", title: "Music Therapy", description: "Listened to my favorite playlist and felt instantly uplifted.", sentiment: "Uplifted" },
    // { date: "2023-02-24", title: "Busy Day", description: "Meetings back to back. Felt drained but managed to stay productive.", sentiment: "Exhausted" },
    // { date: "2023-02-23", title: "New Hobby", description: "Started learning to play the guitar. Excited for the journey!", sentiment: "Excited" },
    // { date: "2023-02-22", title: "Technology Break", description: "Avoided social media for a full day. Felt peaceful.", sentiment: "Refreshed" },
    // { date: "2023-02-21", title: "Random Act of Kindness", description: "Helped a stranger carry groceries. Brightened my day.", sentiment: "Compassionate" },
    // { date: "2023-02-20", title: "Challenging Conversation", description: "Had a difficult but necessary talk with a friend. Hopeful for resolution.", sentiment: "Hopeful" }
  ];

  const [journalEntries, setJournalEntries] = useState(initialJournalEntries);

  // Pagination logic
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = journalEntries.slice(indexOfFirstEntry, indexOfLastEntry);
  const totalPages = Math.ceil(journalEntries.length / entriesPerPage);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newJournalEntry = { 
      ...newEntry, 
      date: new Date().toISOString().split("T")[0] 
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/create/journal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description: newJournalEntry.description }),
      });

      if (!response.ok) {
        throw new Error("Failed to create journal entry");
      }

      const data = await response.json();
      const formattedDate = new Date(data.date).toISOString().split("T")[0];
      setJournalEntries([...journalEntries, { ...data, date: formattedDate }]);
    } catch (error) {
      console.error("Error creating journal entry:", error);
    } finally {
      setIsModalOpen(false);
      setNewEntry({ date: "", title: "", description: "", sentiment: "Neutral" });
    }
  };

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
                <Link href={"/dashboard/mood-tracker/ai-journal"} className="w-full flex items-center gap-3 px-4 py-3 bg-[#008080] text-white rounded-md">
                  <SmilePlus className="h-5 w-5" />
                  <span>Mood Tracker</span>
                </Link>
                <Link href={"/dashboard/therapy/maa-2.0"} className="w-full flex items-center gap-3 px-4 py-3 bg-[#008080]/10 text-black rounded-md">
                  <User className="h-5 w-5" />
                  <span>Therapy</span>
                </Link>
                <Link href={"#"} className="w-full flex items-center gap-3 px-4 py-3 bg-[#008080]/10 text-black rounded-md">
                  <Check className="h-5 w-5" />
                  <span>Self Care Exercise</span>
                </Link>
              </div>
            </div>
{/* 
            <div>
              <h2 className="text-lg font-medium px-2 mb-2 text-[#343c6a]">Others</h2>
              <div className="space-y-2">
                <Link href={"#"} className="w-full flex items-center gap-3 px-4 py-3 bg-[#008080]/10 text-black rounded-md">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </Link>
              </div>
            </div> */}
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

        {/* Journal Content */}
        <div className="p-6 mt-20 overflow-scroll">
          <h2 className="text-2xl font-bold text-[#343c6a] mb-6">AI JOURNAL</h2>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search entries..."
                className="w-full px-4 py-2 rounded-md bg-[#87ceeb] text-[#343c6a] placeholder-[#718ebf]"
              />
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#87ceeb] text-[#343c6a] hover:bg-[#76b9d6] transition-colors"
            >
              <span>New Entry</span>
              <Plus className="h-5 w-5" />
            </button>
          </div>

          {/* Journal Table */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#ffdedb]/60">
                  <tr>
                    <th className="p-4 text-left">Date</th>
                    <th className="p-4 text-left">Title</th>
                    <th className="p-4 text-left">Description</th>
                    <th className="p-4 text-left">Sentiment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e4f7ff]">
                  {currentEntries.map((entry, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-[#e4f7ff]/40" : "bg-[#ffdedb]/40"}
                    >
                      <td className="p-4">{entry.date}</td>
                      <td className="p-4 font-medium">{entry.title}</td>
                      <td className="p-4 max-w-xs">{entry.description}</td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 rounded-full text-sm ${
                            entry.sentiment === "Happy"
                              ? "bg-green-100 text-green-800"
                              : entry.sentiment === "Anxious"
                              ? "bg-yellow-100 text-yellow-800"
                              : entry.sentiment === "Stressed"
                              ? "bg-red-100 text-red-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {entry.sentiment}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-end mt-6 gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              className="w-10 h-10 flex items-center justify-center rounded-md bg-[#87ceeb] text-[#343c6a] hover:bg-[#76b9d6]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 flex items-center justify-center rounded-md ${
                  currentPage === page
                    ? "bg-[#008080] text-white"
                    : "bg-[#87ceeb] text-[#343c6a]"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              className="w-10 h-10 flex items-center justify-center rounded-md bg-[#87ceeb] text-[#343c6a] hover:bg-[#76b9d6]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Create Journal Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg w-full max-w-md">
                <h3 className="text-xl font-bold mb-4">New Journal Entry</h3>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        How was your day
                      </label>
                      <textarea
                        required
                        className="w-full px-3 py-2 border rounded-md h-32"
                        id="description"
                        name="description"
                        value={newEntry.description}
                        onChange={(e) =>
                          setNewEntry({
                            ...newEntry,
                            description: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="flex justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="px-4 py-2 text-gray-500 hover:text-gray-700"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-[#008080] text-white rounded-md hover:bg-[#006666]"
                      >
                        Create Entry
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
