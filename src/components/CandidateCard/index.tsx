import { CandidateType } from "@/models/common";
import Image from "next/image";
import { format } from "date-fns";
import { MdArrowOutward } from "react-icons/md";

const CandidateCard = ({ details }: { details: CandidateType }) => {
  return (
    <div className="rounded-lg p-4 border border-[#E1E4E8] flex justify-between items-start w-full h-full bg-white">
      <div className="w-full">
        <div className="flex items-start justify-between w-full">
          <div>
            {!details.isExternal && (
              <Image
                src="/assets/User Avatar.svg"
                alt="candidate avatar"
                width={32}
                height={32}
              />
            )}
            <div
              className="flex items-center gap-1"
              style={{
                marginTop: details.isExternal ? 0 : "0.5rem",
              }}
            >
              <p className="text-sm font-semibold">{details.name}</p>
              {details.verified && (
                <Image
                  src="/assets/Verified Icon.svg"
                  alt="verified"
                  width={16}
                  height={16}
                />
              )}
            </div>
          </div>
          {details.isMatched ? (
            <div className="rounded-3xl p-[2px] pr-2 flex items-center bg-[#E2F5EA] gap-1">
              <Image
                alt="peerlist logo"
                src="/assets/Peerlist Avatar.svg"
                width={16}
                height={16}
              />
              <p className="text-[#219653] font-semibold text-chip">Matched</p>
            </div>
          ) : (
            <p className="text-chip text-[#6A737D] h-fit">
              Applied {details.applied_date} ago
            </p>
          )}
        </div>
        <p className="text-xs">{details.designation}</p>
        <div className="flex items-center mt-2 gap-4">
          {!details.isExternal && (
            <>
              <div>
                <p className="text-[#6A737D] text-chip">Experience</p>
                <p className="text-xs font-semibold">{details.experience}</p>
              </div>
              <div>
                <p className="text-[#6A737D] text-chip">Holding Offer</p>
                <p className="text-xs font-semibold">
                  {details.holding_offer ? "Yes" : "No"}
                </p>
              </div>
            </>
          )}
          {details.isExternal && (
            <div>
              <p className="text-[#6A737D] text-chip">Resume</p>
              <div className="flex items-center gap-[2px]">
                <p className="text-xs font-semibold">{details.resume}</p>
                <MdArrowOutward fontSize="12px" cursor="pointer" />
              </div>
            </div>
          )}
          <div>
            <p className="text-[#6A737D] text-chip">Notice period</p>
            <p className="text-xs font-semibold">{details.notice_period}</p>
          </div>
        </div>
        {details.status === "applied" && !details.isExternal && (
          <div className="flex flex-col gap-[2px] mt-2">
            <p className="text-[#6A737D] text-chip leading-[14px]">Contact</p>
            <p className="text-xs font-semibold">{details.email}</p>
            <p className="text-xs font-semibold">{details.phone}</p>
          </div>
        )}
        {details.status !== "applied" && (
          <div className="mt-2 flex items-center gap-1">
            <Image
              src={
                details.status === "rejected"
                  ? "/assets/Blocked Icon.svg"
                  : "/assets/Green Tick Icon.svg"
              }
              alt="status"
              width={12}
              height={12}
            />
            <p className="text-[#6A737D] text-chip">
              <span className="capitalize">{details.status}</span> by Yogini
              Bende on {format(details.last_updated, "dd MMM, yyyy")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CandidateCard;
