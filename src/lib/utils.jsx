import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(
    clsx(
      inputs.filter(
        (input) =>
          typeof input === "string" ||
          typeof input === "number" ||
          Array.isArray(input) ||
          (input && typeof input === "object")
      )
    )
  );
}
