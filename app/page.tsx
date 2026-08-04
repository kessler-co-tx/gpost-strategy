"use client";

import { useState } from "react";
import { OperatingModelSection } from "./components/sections/OperatingModelSection";
import { PaymentsSection } from "./components/sections/PaymentsSection";
import { ProductSection } from "./components/sections/ProductSection";
import { RoadmapSection } from "./components/sections/RoadmapSection";
import { StrategyClosing } from "./components/sections/StrategyClosing";
import { StrategyHeader } from "./components/sections/StrategyHeader";
import { StrategyHero } from "./components/sections/StrategyHero";
import { TechnologySection } from "./components/sections/TechnologySection";

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const [active, setActive] = useState("strategy");
  const [open, setOpen] = useState<number | null>(0);

  const navigate = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleDecision = (index: number) => setOpen(open === index ? null : index);

  return (
    <main>
      <StrategyHeader active={active} basePath={basePath} navigate={navigate} />
      <StrategyHero basePath={basePath} navigate={navigate} />
      <ProductSection />
      <PaymentsSection />
      <OperatingModelSection />
      <TechnologySection />
      <RoadmapSection open={open} onToggle={toggleDecision} />
      <StrategyClosing navigate={navigate} />
    </main>
  );
}
