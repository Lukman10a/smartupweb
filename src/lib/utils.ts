import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { DM_Sans } from "next/font/google";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const DmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm_sans",
});