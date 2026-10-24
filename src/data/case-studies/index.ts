import type { CaseStudyData } from "@/components/case-study/types";
import { drcPayments } from "./drcPayments";
import { globalExpansion } from "./globalExpansion";
import { globalTransfers } from "./globalTransfers";
import { multiCurrencyWallet } from "./multiCurrencyWallet";
import { gamification } from "./gamification";

/** Display order for the work lists. Add new case studies here. */
export const caseStudies: CaseStudyData[] = [
  drcPayments,
  globalExpansion,
  globalTransfers,
  multiCurrencyWallet,
  gamification,
];
