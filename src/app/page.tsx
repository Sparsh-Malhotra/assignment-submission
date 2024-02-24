import { CandidatesManagement, Sidebar } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="lg:pl-6 xl:pl-0">
      <section className="flex lg:w-[1200px] min-h-screen w-full mx-auto">
        <Sidebar />
        <section className="w-full h-full border-r border-[#E1E4E8] overflow-y-auto lg:pl-[212px]">
          <div className="bg-[#FAFBFC] py-10 px-6 border-b border-[#E1E4E8] flex items-start justify-between w-full h-full">
            <div className="flex items-start gap-4 h-full">
              <div className="rounded-2xl w-14 h-14 p-2 border border-[#E1E4E8]">
                <Image
                  src="/assets/Peerlist Avatar.svg"
                  alt="job company logo"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-[600] text-lg">
                      Software Engineer, Front End
                    </p>
                    <Image
                      src="/assets/ArrowDown.svg"
                      alt="Down Arrow"
                      width={8}
                      height={4}
                      className="cursor-pointer"
                      role="button"
                    />
                  </div>
                  <p className="text-sm">
                    at Peerlist • Full time • Remote (United States, Canada)
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <p>
                    <span className="font-[600]">78</span> Candidates
                  </p>
                  <p>
                    <span className="font-[600]">68</span> Applied w/ Peerlist
                  </p>
                  <p>
                    <span className="font-[600]">2872</span> Views
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col justify-between gap-6 h-fit"
              id="container"
            >
              <div className="flex items-center justify-end gap-[10px]">
                <button className="rounded-full bg-white w-6 h-6 border border-[#D1D5DA] grid place-items-center hover:bg-[rgb(246_248_250)]">
                  <Image
                    src="/assets/Edit Icon.svg"
                    alt="edit"
                    width={15}
                    height={15}
                  />
                </button>
                <button className="rounded-full bg-white w-6 h-6 border border-[#D1D5DA] grid place-items-center hover:bg-[rgb(246_248_250)]">
                  <Image
                    src="/assets/Share Icon.svg"
                    alt="edit"
                    width={15}
                    height={15}
                  />
                </button>
                <button className="rounded-full bg-white w-6 h-6 border border-[#D1D5DA] grid place-items-center hover:bg-[rgb(246_248_250)]">
                  <Image
                    src="/assets/New Tab Icon.svg"
                    alt="edit"
                    width={15}
                    height={15}
                  />
                </button>
                <button className="rounded-full bg-white w-6 h-6 border border-[#D1D5DA] grid place-items-center hover:bg-[rgb(246_248_250)]">
                  <Image
                    src="/assets/Three Dots Icon.svg"
                    alt="edit"
                    width={15}
                    height={15}
                  />
                </button>
              </div>
              <div className="flex items-center text-chip mt-6">
                <p className="text-[#6A737D]">Posted</p>
                <p className="ml-[2px] font-[600]">1d ago</p>
                <p className="text-[#6A737D] ml-2">by</p>
                <Image
                  alt="poster photo"
                  src="/assets/RecruiterAvatar.svg"
                  width={16}
                  height={16}
                  className="mx-[1px]"
                />
                <p className="font-[600]">Akash Bhadange</p>
              </div>
            </div>
          </div>
          <CandidatesManagement />
        </section>
      </section>
    </main>
  );
}
