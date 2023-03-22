import React from "react";

export default function Sliders() {
  return (
    <div className="flex items-center gap-4 mt-4 h-6">
      <input
        type="range"
        min="0"
        max="360"
        step="1"
        onChange={(e) => {
          const hue = e.target.value;
          document.documentElement.style.setProperty(
            "--nextra-primary-hue",
            hue + "deg"
          );
          // document.getElementById("test-theme-hue").innerText = hue;
        }}
      />
      {/* <code id="test-theme-hue" className="text-sm text-transparent"></code> */}
    </div>
  );
}
