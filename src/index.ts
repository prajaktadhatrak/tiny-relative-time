export type Mode = "natural" | "minuteRounded" | "compact" | "compactMinute";

interface TimeUnit {
  label: string;
  short: string;
  seconds: number;
}

const UNITS: TimeUnit[] = [
  { label: "year", short: "yr", seconds: 31536000 },
  { label: "month", short: "mo", seconds: 2592000 },
  { label: "day", short: "d", seconds: 86400 },
  { label: "hour", short: "h", seconds: 3600 },
  { label: "minute", short: "m", seconds: 60 },
  { label: "second", short: "s", seconds: 1 },
];

export function relTime(input: Date | number | string, mode: Mode = "natural"): string {
  const now = Date.now();
  const date = new Date(input).getTime();
  if (isNaN(date)) throw new Error("Invalid Date");

  let diffSec = Math.floor((now - date) / 1000);

  const isFuture = diffSec < 0;
  diffSec = Math.abs(diffSec);

  switch (mode) {
    case "minuteRounded":
      if (diffSec < 30) return "just now";
      diffSec = Math.round(diffSec / 60) * 60;
      break;
    case "compactMinute":
      if (diffSec < 60) return "0m";
      break;
  }

  for (let unit of UNITS) {
    const value = Math.floor(diffSec / unit.seconds);
    if (value >= 1) {
      switch (mode) {
        case "natural":
        case "minuteRounded":
          return `${value} ${unit.label}${value > 1 ? "s" : ""} ago`;
        case "compact":
          return `${value}${unit.short}`;
        case "compactMinute":
          if (unit.label === "minute") return `${value}m`;
          return `${value}${unit.short}`;
      }
    }
  }

  switch (mode) {
    case "natural":
    case "minuteRounded":
      return "just now";
    case "compact":
      return "0s";
    case "compactMinute":
      return "0m";
    default:
      return "just now";
  }
}