import Link from "next/link";
import React from "react";

const Click = ({
  path,
  content,
}: {
  path: string;
  content: React.ReactNode;
}) => {
  return (
    <div>
      <Link className="cursor-pointer" href={path}>
        <div className="bg-green rounded-[16px] squircle px-4 py-2 btn text-skin  transition-all duration-200 hover:scale-105 hover:rounded-[8px]">
          {content}
        </div>
      </Link>
    </div>
  );
};

export default Click;
