import { SidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const BottomNavbar = () => {
  return (
    <nav className="hidden mobile:block">
      <div className="w-full fixed bottom-0 z-50 bg-white">
        <ul className="grid grid-cols-6 w-full px-3 pt-2 pb-4 border-t border-[rgb(225_228_232)]">
          {SidebarLinks.map((link, index) => (
            <Link
              href="/"
              key={link.title}
              className="flex flex-col items-center"
            >
              <Image
                alt={`${link.title} link`}
                src={link.icon}
                width={24}
                height={24}
              />
              <p
                className={`line-clamp-1 mt-2 text-chip ${
                  index === 0 && "font-semibold"
                }`}
              >
                {link.title}
              </p>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default BottomNavbar;
