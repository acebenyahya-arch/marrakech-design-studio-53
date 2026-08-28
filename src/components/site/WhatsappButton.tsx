import { MessageCircle } from "lucide-react";

export function WhatsappButton({
  label = "Request a Design on WhatsApp",
  variant = "solid",
}: {
  label?: string;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all hover:-translate-y-0.5";
  const styles =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:glow-ring"
      : "border border-border bg-card/60 text-foreground hover:border-primary";

  return (
    <a
      href="https://wa.me/‪212784092681"
      target="_blank"
      rel="noreferrer"
      className={`${base} ${styles}`}
    >
      <MessageCircle className="size-4" />
      {label}
    </a>
  );
}
