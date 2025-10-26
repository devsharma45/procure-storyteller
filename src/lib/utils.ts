import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert price in $/lb to $/MT
// 1 lb = 0.45359237 kg, 1 MT = 1000 kg => 1 MT = 2204.62262185 lb
export const lbToMt = (perLb: number) => perLb * 2204.62262185;
