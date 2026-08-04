import type { ReactNode } from "react";

export const Badge = ({ type }: { type: "Verified" | "Interpretation" | "Hypothesis" }) => (
  <span className={`badge ${type.toLowerCase()}`}><i />{type}</span>
);

export const Check = ({ children }: { children: ReactNode }) => <li><span>✓</span>{children}</li>;
