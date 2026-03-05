import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  children: React.ReactNode;
  color?: "cyan" | "violet" | "emerald" | "amber" | "rose" | "indigo";
}

const colorMap = {
  cyan: "border-nf-cyan/40 text-nf-cyan",
  violet: "border-nf-violet/40 text-nf-violet",
  emerald: "border-nf-emerald/40 text-nf-emerald",
  amber: "border-nf-amber/40 text-nf-amber",
  rose: "border-nf-rose/40 text-nf-rose",
  indigo: "border-nf-indigo/40 text-nf-indigo",
};

const SectionBadge = ({ children, color = "cyan" }: SectionBadgeProps) => (
  <span
    className={cn(
      "inline-flex items-center gap-2 font-mono text-xs tracking-wider border rounded px-3 py-1 mb-4",
      colorMap[color]
    )}
  >
    <span className="opacity-50">//</span> {children}
  </span>
);

export default SectionBadge;
