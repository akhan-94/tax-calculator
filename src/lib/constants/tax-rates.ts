import { PROVINCES } from "@/app/(home)/_constants/provinces";
import type { TaxBracket } from "@/lib/types/tax-rates";

export const TAX_BRACKETS: Record<
  number,
  {
    federal: TaxBracket[];
    provincial: Record<string, TaxBracket[]>;
  }
> = {
  2025: {
    federal: [
      { start: 0, end: 57375, rate: 0.15 },
      { start: 57375, end: 114750, rate: 0.205 },
      { start: 114750, end: 177882, rate: 0.26 },
      { start: 177882, end: 253414, rate: 0.29 },
      { start: 253414, end: Number.MAX_SAFE_INTEGER, rate: 0.33 },
    ],
    provincial: {
      BC: [
        { start: 0, end: 49279, rate: 0.0506 },
        { start: 49279, end: 98560, rate: 0.077 },
        { start: 98560, end: 113158, rate: 0.105 },
        { start: 113158, end: 137407, rate: 0.1229 },
        { start: 137407, end: 186306, rate: 0.147 },
        { start: 186306, end: 259829, rate: 0.168 },
        { start: 259829, end: Number.MAX_SAFE_INTEGER, rate: 0.205 },
      ],
    },
  },
  2024: {
    federal: [
      { start: 0, end: 55867, rate: 0.15 },
      { start: 55867, end: 111733, rate: 0.205 },
      { start: 111733, end: 173205, rate: 0.26 },
      { start: 173205, end: 246752, rate: 0.29 },
      { start: 246752, end: Number.MAX_SAFE_INTEGER, rate: 0.33 },
    ],
    provincial: {
      BC: [
        { start: 0, end: 49279, rate: 0.0506 },
        { start: 49279, end: 98560, rate: 0.077 },
        { start: 98560, end: 113158, rate: 0.105 },
      ],
    },
  },
  2023: {
    federal: [
      { start: 0, end: 49279, rate: 0.15 },
      { start: 57375, end: 114750, rate: 0.205 },
      { start: 114750, end: 177882, rate: 0.26 },
      { start: 177882, end: 253414, rate: 0.29 },
      { start: 253414, end: Number.MAX_SAFE_INTEGER, rate: 0.33 },
    ],
    provincial: {
      BC: [
        { start: 0, end: 49279, rate: 0.0506 },
        { start: 49279, end: 98560, rate: 0.077 },
        { start: 98560, end: 113158, rate: 0.105 },
      ],
    },
  },
} as const;

export const PROVINCIAL_TAX_RATES: Record<
  (typeof PROVINCES)[number]["value"],
  Record<number, TaxBracket[]>
> = {
  AB: {
    2025: [
      { start: 0, end: 57375, rate: 0.15 },
      { start: 57375, end: 114750, rate: 0.205 },
      { start: 114750, end: 177882, rate: 0.26 },
      { start: 177882, end: 253414, rate: 0.29 },
      { start: 253414, end: Number.MAX_SAFE_INTEGER, rate: 0.33 },
    ],
  },
  BC: {
    2025: [
      { start: 0, end: 49279, rate: 0.0506 },
      { start: 49279, end: 98560, rate: 0.077 },
      { start: 98560, end: 113158, rate: 0.105 },
      { start: 113158, end: 137407, rate: 0.1229 },
      { start: 137407, end: 186306, rate: 0.147 },
      { start: 186306, end: 259829, rate: 0.168 },
      { start: 259829, end: Number.MAX_SAFE_INTEGER, rate: 0.205 },
    ],
  },
  MB: {
    2025: [
      { start: 0, end: 57375, rate: 0.15 },
      { start: 57375, end: 114750, rate: 0.205 },
      { start: 114750, end: 177882, rate: 0.26 },
      { start: 177882, end: 253414, rate: 0.29 },
      { start: 253414, end: Number.MAX_SAFE_INTEGER, rate: 0.33 },
    ],
  },
  NB: {
    2025: [
      { start: 0, end: 57375, rate: 0.15 },
      { start: 57375, end: 114750, rate: 0.205 },
      { start: 114750, end: 177882, rate: 0.26 },
      { start: 177882, end: 253414, rate: 0.29 },
      { start: 253414, end: Number.MAX_SAFE_INTEGER, rate: 0.33 },
    ],
  },
  NL: {
    2025: [
      { start: 0, end: 57375, rate: 0.15 },
      { start: 57375, end: 114750, rate: 0.205 },
      { start: 114750, end: 177882, rate: 0.26 },
      { start: 177882, end: 253414, rate: 0.29 },
      { start: 253414, end: Number.MAX_SAFE_INTEGER, rate: 0.33 },
    ],
  },
  NS: {
    2025: [
      { start: 0, end: 57375, rate: 0.15 },
      { start: 57375, end: 114750, rate: 0.205 },
      { start: 114750, end: 177882, rate: 0.26 },
      { start: 177882, end: 253414, rate: 0.29 },
      { start: 253414, end: Number.MAX_SAFE_INTEGER, rate: 0.33 },
    ],
  },
  NT: {
    2025: [
      { start: 0, end: 57375, rate: 0.15 },
      { start: 57375, end: 114750, rate: 0.205 },
      { start: 114750, end: 177882, rate: 0.26 },
      { start: 177882, end: 253414, rate: 0.29 },
      { start: 253414, end: Number.MAX_SAFE_INTEGER, rate: 0.33 },
    ],
  },
  NU: {
    2025: [
      { start: 0, end: 57375, rate: 0.15 },
      { start: 57375, end: 114750, rate: 0.205 },
      { start: 114750, end: 177882, rate: 0.26 },
      { start: 177882, end: 253414, rate: 0.29 },
      { start: 253414, end: Number.MAX_SAFE_INTEGER, rate: 0.33 },
    ],
  },
  ON: {
    2025: [
      { start: 0, end: 57375, rate: 0.15 },
      { start: 57375, end: 114750, rate: 0.205 },
      { start: 114750, end: 177882, rate: 0.26 },
      { start: 177882, end: 253414, rate: 0.29 },
      { start: 253414, end: Number.MAX_SAFE_INTEGER, rate: 0.33 },
    ],
  },
  PE: {
    2025: [
      { start: 0, end: 57375, rate: 0.15 },
      { start: 57375, end: 114750, rate: 0.205 },
      { start: 114750, end: 177882, rate: 0.26 },
      { start: 177882, end: 253414, rate: 0.29 },
      { start: 253414, end: Number.MAX_SAFE_INTEGER, rate: 0.33 },
    ],
  },
  QC: {
    2025: [
      { start: 0, end: 57375, rate: 0.15 },
      { start: 57375, end: 114750, rate: 0.205 },
      { start: 114750, end: 177882, rate: 0.26 },
      { start: 177882, end: 253414, rate: 0.29 },
      { start: 253414, end: Number.MAX_SAFE_INTEGER, rate: 0.33 },
    ],
  },
  SK: {
    2025: [
      { start: 0, end: 57375, rate: 0.15 },
      { start: 57375, end: 114750, rate: 0.205 },
      { start: 114750, end: 177882, rate: 0.26 },
      { start: 177882, end: 253414, rate: 0.29 },
      { start: 253414, end: Number.MAX_SAFE_INTEGER, rate: 0.33 },
    ],
  },
  YT: {
    2025: [
      { start: 0, end: 57375, rate: 0.15 },
      { start: 57375, end: 114750, rate: 0.205 },
      { start: 114750, end: 177882, rate: 0.26 },
      { start: 177882, end: 253414, rate: 0.29 },
      { start: 253414, end: Number.MAX_SAFE_INTEGER, rate: 0.33 },
    ],
  },
} as const;
