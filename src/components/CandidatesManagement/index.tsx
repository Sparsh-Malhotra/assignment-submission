import Image from "next/image";
import CandidatesColumn from "../CandidatesColumn";

const CandidatesManagement = () => {
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
        <CandidatesColumn type="rejected" />
        <CandidatesColumn type="applied" />
        <CandidatesColumn type="shortlisted" />
      </div>
    </section>
  );
};

export default CandidatesManagement;
