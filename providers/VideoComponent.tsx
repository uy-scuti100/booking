"use client";
import React, { useState, useRef } from "react";
import "./video.css";

export default function VideoComponent() {
   const videoRef = useRef<HTMLVideoElement>(null);
   const [isPlaying, setIsPlaying] = useState(false);
   const [isHovered, setIsHovered] = useState(false);

   const handlePlayPause = () => {
      const video = videoRef.current;
      if (video) {
         video.paused ? video.play() : video.pause();
         setIsPlaying(!isPlaying);
      }
   };
   const handleMouseEnter = () => {
      if (isPlaying) {
         setIsPlaying(true); // Show overlay on hover while playing
      }
   };

   const handleMouseLeave = () => {
      if (isPlaying) {
         setIsPlaying(false); // Hide overlay when not hovered while playing
      }
   };

   return (
      <div className="video-container">
         <video
            ref={videoRef}
            src="/pnc.mp4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
         />

         <div
            className={`overlay ${isPlaying && isHovered ? "hovered" : ""}`}
            onClick={handlePlayPause}></div>
      </div>
   );
}
