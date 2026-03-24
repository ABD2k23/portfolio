import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-center justify-center h-dvh w-full gap-8 bg-green ">
      <Link
        className="hover:text-skin transition-colors duration-300 text-skin/75 "
        href={"/"}
      >
        Selected Work
      </Link>
      <Link
        className="hover:text-skin transition-colors duration-300 text-skin/75 "
        href={"/"}
      >
        About Me
      </Link>
      <Link
        className="hover:text-skin transition-colors duration-300 text-skin/75 "
        href={"/"}
      >
        Contact Now
      </Link>
      <Link
        className="hover:text-skin transition-colors duration-300 text-skin/75 "
        href={"/"}
      >
        Instagram
      </Link>
      <Link
        className="hover:text-skin transition-colors duration-300 text-skin/75 "
        href={"/"}
      >
        X
      </Link>
    </div>
  );
};

export default Footer;
