"use client";
import { useEffect, useState } from "react";
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
  const [expenseData, setExpenseData] = useState<Expense[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const localStorageData: any = localStorage.getItem("expenses_data");
    if (localStorageData) {
      setExpenseData(JSON.parse(localStorageData));
    }
    setIsLoading(false);
  }, []);

  const totalExpenses =
    expenseData && expenseData.length > 0
      ? expenseData.reduce((acc, currentItem) => acc + currentItem.amount, 0)
      : 0;
  const onDelete = (id: number) => {
    const newExpenseData = expenseData.filter((expense) => expense.id !== id);
    setExpenseData(newExpenseData);
    localStorage.setItem("expenses_data", JSON.stringify(newExpenseData));
  };

  return (
    <div className="my-10 max-w-screen-sm flex flex-col mx-auto px-10">
      <div>
        <Header />
        <Stats totalExpenses={totalExpenses} isLoading={isLoading} />
        <Form
          addExpense={(expense: Expense) =>
            setExpenseData(() => {
              const newExpenses = [
                { ...expense, id: expenseData.length + 1 },
                ...expenseData,
              ];
              localStorage.setItem(
                "expenses_data",
                JSON.stringify(newExpenses)
              );
              return newExpenses;
            })
          }
        />
      </div>
      <div>
        <Expenses
          expenseData={expenseData}
          onDelete={onDelete}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
