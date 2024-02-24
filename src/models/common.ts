export type CandidateType = {
  id: string;
  avatar?: string;
  name: string;
  designation: string;
  status: "rejected" | "applied" | "shortlisted";
  applied_date: string;
  last_updated: Date;
  experience: string;
  holding_offer: boolean;
  notice_period: string;
  email?: string;
  phone?: string;
  resume?: string;
  isMatched?: boolean;
  verified: boolean;
  isExternal?: boolean;
  referrer?: string;
};
