import React from "react";
import "../Hero Page/hero.css";
import Accordion from "./accordion";
function Service() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <p class="p-8 font-bold text-[175%] text-black" id="whatwedo">
          {/* Designs that are effective <span class="line-through">or</span> and
        affordable. */}
          We create world-class digital products, web design, and branding.
        </p>
      </div>
      <div class="px-8">
        <Accordion />
      </div>
    </div>
  );
}
export default Service;
