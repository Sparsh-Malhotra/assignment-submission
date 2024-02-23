"use client";

import Image from "next/image";
import CandidatesColumn from "../CandidatesColumn";
import { useMemo, useState } from "react";
import { Candidates } from "@/constants";

const CandidatesManagement = () => {
  const [candidates, setCandidates] = useState(Candidates);

  const rejectedCandidates = useMemo(() => {
    return candidates.filter((candidate) => candidate.status === "rejected");
  }, [candidates]);

  const appliedCandidates = useMemo(() => {
    return candidates.filter((candidate) => candidate.status === "applied");
  }, [candidates]);

  const shortlistedCandidates = useMemo(() => {
    return candidates.filter((candidate) => candidate.status === "shortlisted");
  }, [candidates]);

  return (
    <section className="p-6">
      <div className="flex items-center gap-2 border hover:border-[rgb(149_157_165)] rounded py-1 px-2 w-[240px]">
        <Image alt="search" src="/assets/Search.svg" width={16} height={16} />
        <input
          placeholder="Search candidates"
          className="placeholder:text-sm outline-none w-full"
        />
      </div>
      <div className="mt-6 flex items-start gap-2">
        <CandidatesColumn type="rejected" candidates={rejectedCandidates} />
        <CandidatesColumn type="applied" candidates={appliedCandidates} />
        <CandidatesColumn
          type="shortlisted"
          candidates={shortlistedCandidates}
        />
      </div>
    </section>
  );
};

export default CandidatesManagement;
