import React from "react";
import { RiAlignItemBottomFill } from "react-icons/ri";
import ExpensesList from "./ExpensesList";
interface ExpenseData {
  id: number;
  date: number;
  description: string;
  amount: number;
  category: string;
}
interface Props {
  expenseData: ExpenseData[];
  onDelete: (id: number) => void;
}
export default function Expenses({ expenseData, onDelete }: Props) {
  return (
    <div>
      <div className="flex items-center gap-2 mt-14">
        <RiAlignItemBottomFill size={30} />
        <h1 className="text-2xl font-black">Record</h1>
      </div>
      <ExpensesList expenseData={expenseData} onDelete={onDelete} />
    </div>
  );
}
