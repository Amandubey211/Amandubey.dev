import React from "react";

export default function PlayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="bg-red-400">this is the Header for play pages</h1>
      <div className="bg-white text-black"> {children}</div>
      <h4 className="bg-green-800">this is footer for play pages</h4>
    </>
  );
}
