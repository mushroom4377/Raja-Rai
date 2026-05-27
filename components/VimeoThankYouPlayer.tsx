"use client";

import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";

export default function VimeoThankYouPlayer() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<Player | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTouchPause, setShowTouchPause] = useState(false);

  useEffect(() => {
    if (!iframeRef.current) {
      return;
    }

    const player = new Player(iframeRef.current);
    playerRef.current = player;

    const handlePlay = () => {
      setIsPlaying(true);
      setShowTouchPause(false);
    };

    const handlePause = () => {
      setIsPlaying(false);
      setShowTouchPause(false);
    };

    player.on("play", handlePlay);
    player.on("pause", handlePause);
    player.on("ended", handlePause);

    return () => {
      player.off("play", handlePlay);
      player.off("pause", handlePause);
      player.off("ended", handlePause);
      player.destroy().catch(() => undefined);
      playerRef.current = null;
    };
  }, []);

  async function togglePlayback() {
    const player = playerRef.current;

    if (!player) {
      return;
    }

    try {
      if (isPlaying) {
        await player.pause();
      } else {
        await player.play();
      }
    } catch {
      // Ignore blocked autoplay/privacy errors and keep the UI stable.
    }
  }

  function handleSurfacePress() {
    if (isPlaying) {
      setShowTouchPause(true);
      window.setTimeout(() => {
        setShowTouchPause(false);
      }, 1800);
    }
  }

  const overlayClassName = isPlaying
    ? `pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 ${
        showTouchPause ? "opacity-100" : "opacity-0"
      }`
    : "absolute inset-0 flex items-center justify-center transition-opacity duration-200 opacity-100";

  return (
    <div
      className="group mt-8"
      onPointerDown={handleSurfacePress}
      onTouchStart={handleSurfacePress}
    >
      <div className="relative overflow-hidden rounded-[8px] bg-[#111111] shadow-[0_22px_60px_rgba(18,18,18,0.16)]">
        <div className="aspect-video">
          <iframe
            ref={iframeRef}
            src="https://player.vimeo.com/video/1195485455?app_id=122963&controls=0&title=0&byline=0&portrait=0&badge=0&vimeo_logo=0&dnt=1&autopause=1"
            className="h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            title="Marketing Raja thank you video"
          />
        </div>

        <div className={overlayClassName}>
          <button
            type="button"
            onClick={togglePlayback}
            className={`flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-black/72 text-white shadow-[0_16px_40px_rgba(0,0,0,0.28)] backdrop-blur-sm transition hover:bg-black/80 focus:outline-none focus:ring-4 focus:ring-white/20 ${
              isPlaying ? "pointer-events-auto" : ""
            }`}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="block h-5 w-1.5 rounded-full bg-white" />
                <span className="block h-5 w-1.5 rounded-full bg-white" />
              </span>
            ) : (
              <span
                aria-hidden="true"
                className="ml-1 block h-0 w-0 border-b-[11px] border-l-[18px] border-t-[11px] border-b-transparent border-l-white border-t-transparent"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
