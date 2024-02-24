import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-white hidden mobile:flex justify-between items-center w-full px-4 py-3 border-b border-b-[rgb(225_228_232)]">
      <Image
        width={32}
        height={32}
        src="/assets/Profile Avatar.svg"
        alt="User Avatar"
      />
      <Image
        src="https://dqy38fnwh4fqs.cloudfront.net/website/peerlist-favicon.png"
        width={32}
        height={32}
        alt="Peerlist logo"
      />
      <button className="rounded-full bg-white w-8 h-8 border border-[#D1D5DA] grid place-items-center hover:bg-[rgb(246_248_250)]">
        <Image
          src="/assets/Notification.svg"
          alt="edit"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};

export default Navbar;
