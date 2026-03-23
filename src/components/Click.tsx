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
        <div className="bg-green rounded-[16px] squircle px-4 py-2 text-skin font-sans font-bold">
          {content}
        </div>
      </Link>
    </div>
  );
};

export default Click;
