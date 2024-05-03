import React from "react";
interface Props {
  totalExpenses: number;
}
export default function Stats({ totalExpenses }: Props) {
  const availableBalance = 2000 - totalExpenses;
  return (
    <div className="flex gap-4 flex-col justify-center md:flex-row">
      <div className="stats bg-error text-primary-content grow">
        <div className="stat">
          <div className="stat-title text-white">Total Expenses</div>
          <div className="stat-value">£{totalExpenses}</div>
        </div>
      </div>
      <div className="stats bg-accent text-primary-content grow">
        <div className="stat">
          <div className="stat-title text-white">Account Balance</div>
          <div className="stat-value">£{availableBalance}</div>
        </div>
      </div>
    </div>
  );
}
