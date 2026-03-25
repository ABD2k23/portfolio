import Link from "next/link";
import React from "react";

const Click = ({
  path,
  content,
  target,
  onClick,
}: {
  path: string;
  content: React.ReactNode;
  target: string;
  onClick?: (e: React.MouseEvent) => void;
}) => {
  const inner = (
    <div className="bg-green w-fit rounded-[16px] squircle px-4 py-2 btn text-skin transition-all duration-200 hover:scale-105">
      {content}
    </div>
  );

  if (onClick) {
    return (
      <div>
        <button className="cursor-pointer w-fit" onClick={onClick}>
          {inner}
        </button>
      </div>
    );
  }

  return (
    <div>
      <Link className="cursor-pointer w-fit" href={path} target={target}>
        {inner}
      </Link>
    </div>
  );
};

export default Click;
