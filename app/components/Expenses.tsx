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
  isLoading: boolean;
}
export default function Expenses({ expenseData, onDelete, isLoading }: Props) {
  return (
    <div>
      <div className="flex items-center gap-2 mt-14">
        <RiAlignItemBottomFill size={30} />
        <h1 className="text-2xl font-black">Record</h1>
      </div>
      {!isLoading ? (
        <ExpensesList expenseData={expenseData} onDelete={onDelete} />
      ) : (
        <span className="loading loading-dots loading-lg my-4"></span>
      )}
    </div>
  );
}
