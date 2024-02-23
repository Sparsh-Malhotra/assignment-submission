import { CandidatesColumnStyleConfig } from "@/constants";
import { ICandidatesColumnProps } from "./CandidatesColumnProps";
import Image from "next/image";

const CandidatesColumn = (props: ICandidatesColumnProps) => {
  const { type } = props;

  return (
    <div
      className="rounded-lg border min-h-screen w-full overflow-hidden bg-[#FAFBFC]"
      style={{
        borderColor: CandidatesColumnStyleConfig[type].parentBorderColor,
      }}
    >
      <div
        className="p-2 flex items-center gap-2"
        style={{
          backgroundColor: CandidatesColumnStyleConfig[type].bgColor,
        }}
      >
        {CandidatesColumnStyleConfig[type].icon ? (
          <Image
            alt="icon"
            src={CandidatesColumnStyleConfig[type].icon}
            width={16}
            height={16}
          />
        ) : (
          <div className="w-[14px] h-[14px] border-[1.5px] border-[#0D0D0D] rounded-full" />
        )}
        <p
          className="uppercase text-xs font-semibold"
          style={{ color: CandidatesColumnStyleConfig[type].color }}
        >
          {type} • {CandidatesColumnStyleConfig[type].count}
        </p>
      </div>
    </div>
  );
};

export default CandidatesColumn;
