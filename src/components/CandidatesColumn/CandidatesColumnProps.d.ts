import { CandidateType } from "@/models/common";

export interface ICandidatesColumnProps {
  type: "rejected" | "shortlisted" | "applied";
  candidates: CandidateType[];
}
