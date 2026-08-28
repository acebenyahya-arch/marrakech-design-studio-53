import { MessageCircle } from "lucide-react";

export function WhatsappButton({
  label = "Contact me on WhatsApp",
  variant = "solid",
}: {
  label?: string;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all hover:-translate-y-0.5";
  const styles =
    variant === "solid"
      ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-95"
      : "border border-current text-foreground hover:bg-accent";

  return (
    <a
      href="https://wa.me/212633540422"
      target="_blank"
      rel="noreferrer"
      className={`${base} ${styles}`}
    >
      <MessageCircle className="size-4" />
      {label}
    </a>
  );
}
