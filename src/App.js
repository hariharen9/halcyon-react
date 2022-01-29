import React from "react";
import Hero from "./components/Hero Page/hero";
import Mobile from "./components/MobilePage/Mobile";
import Service from "./components/services/service_section";

function App() {
  return (
    <div>
      <Hero />
      <div class="flex h-screen justify-center items-center">
        <Service />
      </div>

      <Mobile />
    </div>
  );
}

export default App;
