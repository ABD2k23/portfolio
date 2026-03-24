import Link from "next/link";
import React from "react";

const Click = ({
  path,
  content,
  target,
}: {
  path: string;
  content: React.ReactNode;
  target: string;
}) => {
  return (
    <div>
      <Link className="cursor-pointer w-fit" href={path} target={target}>
        <div className="bg-green w-fit rounded-[16px] squircle px-4 py-2 btn text-skin  transition-all duration-200 hover:scale-105">
          {content}
        </div>
      </Link>
    </div>
  );
};

export default Click;
