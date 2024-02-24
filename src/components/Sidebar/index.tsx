import { SidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

const Sidebar = () => {
  return (
    <aside className="fixed h-screen pb-2 lg:flex justify-between hidden border-r border-primary flex-col flex-shrink-0 w-[212px]">
      <Link href="/" className="my-3">
        <Image
          alt="logo"
          src="/assets/Peerlist logo.svg"
          width={124}
          height={32}
          loading="lazy"
        />
      </Link>
      <div className="pr-6 flex flex-col h-full">
        <div className="my-6">
          {SidebarLinks.map((link, index) => (
            <Link
              key={link.title}
              href="/"
              className="flex lg:flex-row flex-col items-center group lg:py-2.5"
            >
              <Image
                alt={`${link.title} link`}
                src={link.icon}
                width={24}
                height={24}
              />
              <p
                className={`lg:ml-2 mt-2 lg:mt-0 transition-all lg:group-hover:translate-x-1 text-sm ${
                  index === 0 && "font-semibold"
                }`}
              >
                {link.title}
              </p>
            </Link>
          ))}
        </div>
        <Link href="/" className="flex items-center gap-2 mb-1 py-2">
          <Image
            width={24}
            height={24}
            src="/assets/Profile Avatar.svg"
            alt="User Avatar"
          />
          <p className="text-sm">Yogini</p>
        </Link>
        <Link href="/" className="flex items-center gap-2 py-2">
          <Image
            width={24}
            height={24}
            src="/assets/Company Logo.svg"
            alt="Company Logo"
          />
          <div>
            <p className="text-sm">Loom</p>
            <div className="flex items-center gap-[2px]">
              <p className="text-chip">Manage jobs, teams, & more</p>
              <MdArrowForward fontSize="12px" />
            </div>
          </div>
        </Link>
      </div>
      <div>
        <div className="text-[rgb(106_115_125)] text-chip lg:mb-1 mb-6 leading-145 font-semibold text-left mr-4">
          <Link href="/" className="hover:underline">
            Blog
          </Link>
          <span>&nbsp;•&nbsp;</span>
          <Link href="/" className="hover:underline">
            Help Center
          </Link>
          <span>&nbsp;•&nbsp;</span>
          <Link href="/" className="hover:underline">
            Feedback
          </Link>
          <span>&nbsp;•&nbsp;</span>
          <Link href="/" className="hover:underline">
            Code of Conduct
          </Link>
          <span>&nbsp;•&nbsp;</span>
          <Link href="/" className="hover:underline">
            Privacy
          </Link>
          <span>&nbsp;•&nbsp;</span>
          <Link href="/" className="hover:underline">
            T&C
          </Link>
        </div>
        <p className="text-[rgb(106_115_125)] text-chip text-left">
          © 2023 Peerlist Inc.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
