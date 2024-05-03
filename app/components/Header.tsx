import React from "react";
import { RiMoneyPoundBoxFill } from "react-icons/ri";

export default function Header() {
  return (
    <div className="flex items-center gap-2 my-8">
      <RiMoneyPoundBoxFill size={40} />
      <h1 className="text-3xl font-black">Expenses Tracker</h1>
    </div>
  );
}
