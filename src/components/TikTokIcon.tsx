import { FaTiktok } from "react-icons/fa";
import { IconContext } from "react-icons"
import type { JSX } from 'preact';

//import { useRef, useEffect } from "preact/hooks"
// import React from "preact/compat"
// import { h } from 'preact'

interface TikTokIconProps {
  className?: string;
  size?: number;
  color?: string;
}

export function TikTokIcon({color = "currentColor", className = "from-indigo-500 via-fuchsia-500 to-pink-500", size = 6}: TikTokIconProps): JSX.Element {
  return (
    <>
      <IconContext.Provider value={{ color: {color}, className: `${className}`, size: size, stroke: {color} }} >
        <FaTiktok />
      </IconContext.Provider>   
    </>
  )
}