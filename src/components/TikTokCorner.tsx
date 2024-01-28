import { FaTiktok } from "react-icons/fa";
import type { JSX } from 'preact';
import { IconContext } from "react-icons"
//import { useRef, useEffect } from "preact/hooks"
import React from "preact/compat";
import './TikTokCorner.module.css';

interface TikTokCornerProps {
  link?: string;
  size?: number;
}

export default function TikTokCorner({link = "https://www.tiktok.com/@radiojaune", size = 80}: TikTokCornerProps): JSX.Element {
  return (
    <>
    <a
      href={link}
      aria-label="Radio Jaune sur TikTok"
      class="absolute right-0 top-0 z-10 text-black hover:text-black focus:ring-0 focus:ring-offset-0"
      >
      
      <IconContext.Provider value={{ color: "currentColor", className: "", size: size }} >
        <FaTiktok />
      </IconContext.Provider>
    </a>

      
    </>
)
}