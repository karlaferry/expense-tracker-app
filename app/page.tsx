"use client";
import { useState } from "react";
import Expenses from "./components/Expenses";
import Form from "./components/Form";
import Header from "./components/Header";
import Stats from "./components/Stats";
interface Expense {
  id: number;
  date: number;
  description: string;
  amount: number;
  category: string;
}

export default function Home() {
  const [expenseData, setExpenseData] = useState<Expense[]>([
    {
      id: 1,
      date: 1714768376781,
      description: "Kobo Libra Colour",
      amount: 200,
      category: "Culture",
    },
    {
      id: 2,
      date: 1714768376799,
      description: "Kobo Stylus 2",
      amount: 70,
      category: "Culture",
    },
  ]);

  const totalExpenses = expenseData.reduce(
    (acc, currentItem) => acc + currentItem.amount,
    0
  );

  const onDelete = (id: number) => {
    const newExpenseData = expenseData.filter((expense) => expense.id !== id);
    setExpenseData(newExpenseData);
  };

  return (
    <div className="my-10 max-w-screen-sm flex flex-col mx-auto px-10">
      <div>
        <Header />
        <Stats totalExpenses={totalExpenses} />
        <Form
          addExpense={(expense: Expense) =>
            setExpenseData([
              { ...expense, id: expenseData.length + 1 },
              ...expenseData,
            ])
          }
        />
      </div>
      <div>
        <Expenses expenseData={expenseData} onDelete={onDelete} />
      </div>
    </div>
  );
}
