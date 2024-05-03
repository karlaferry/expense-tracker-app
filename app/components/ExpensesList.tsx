import React from "react";
import { FaTrash } from "react-icons/fa";

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
export default function ExpensesList({ expenseData, onDelete }: Props) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr className="text-primary">
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {expenseData.map((expense) => (
            <tr key={expense.date}>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>£ {expense.amount}</td>
              <td>
                <FaTrash color="8a3030" onClick={() => onDelete(expense.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
