import React, { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import * as Slider from '@radix-ui/react-slider';

export const Box = (): JSX.Element => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(75);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <main className="w-full min-h-screen bg-[#4AACB5] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
        {/* Album Art */}
        <div className="w-48 h-48 mx-auto bg-[#4AACB5] rounded-full mb-6 flex items-center justify-center overflow-hidden">
          <span className="text-white text-lg">Album Art</span>
        </div>

        {/* Song Info */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Song Title</h2>
          <p className="text-gray-600">Artist Name</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="h-1 bg-gray-200 rounded-full">
            <div 
              className="h-full bg-[#4AACB5] rounded-full" 
              style={{ width: `${(currentTime / 180) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>0:00</span>
            <span>3:00</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <button 
            className="p-2 text-[#4AACB5] hover:text-[#3A8A91] transition-colors"
            aria-label="Previous track"
          >
            <SkipBack size={24} />
          </button>
          
          <button 
            className="p-4 bg-[#4AACB5] hover:bg-[#3A8A91] text-white rounded-full transition-colors"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          
          <button 
            className="p-2 text-[#4AACB5] hover:text-[#3A8A91] transition-colors"
            aria-label="Next track"
          >
            <SkipForward size={24} />
          </button>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-2">
          <Volume2 size={20} className="text-gray-600" />
          <div className="flex-1">
            <Slider.Root
              className="relative flex items-center select-none touch-none h-5"
              defaultValue={[75]}
              max={100}
              step={1}
              onValueChange={(value) => setVolume(value[0])}
              aria-label="Volume"
            >
              <Slider.Track className="bg-gray-200 relative grow rounded-full h-1">
                <Slider.Range className="absolute bg-[#4AACB5] rounded-full h-full" />
              </Slider.Track>
              <Slider.Thumb
                className="block w-4 h-4 bg-[#4AACB5] rounded-full hover:bg-[#3A8A91] focus:outline-none focus:ring-2 focus:ring-[#4AACB5] focus:ring-offset-2"
              />
            </Slider.Root>
          </div>
        </div>
      </div>
    </main>
  );
};
