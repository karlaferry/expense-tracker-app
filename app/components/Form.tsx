"use client";
import React, { FormEvent, useState } from "react";
import { IoAddOutline } from "react-icons/io5";

interface Expense {
  id: number;
  date: number;
  description: string;
  amount: number;
  category: string;
}
interface Props {
  addExpense: (expense: Expense) => void;
}
export default function Form({ addExpense }: Props) {
  const categories: string[] = [
    "Essential",
    "Entertainment",
    "Culture",
    "Debts",
    "Unexpected",
  ];
  const [expense, setExpense] = useState<Expense>({
    id: 0,
    date: 0,
    description: "",
    amount: 0,
    category: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!expense.amount || !expense.description || !expense.category) {
      setErrorMsg("Please fill out required fields.");
    } else {
      setErrorMsg("");
      addExpense({ ...expense, date: Date.now() });
    }
  };

  return (
    <>
      <div className="flex items-center gap-2 mt-14">
        <IoAddOutline size={30} />
        <h1 className="text-2xl font-black">Add Expense</h1>
      </div>
      <form className="my-4">
        <label className="input input-primary flex items-center gap-2 my-4">
          <input
            type="text"
            className="grow"
            placeholder="Description"
            value={expense.description}
            required
            onChange={(e) =>
              setExpense({ ...expense, description: e.target.value })
            }
          />
        </label>
        <label className="input input-primary flex items-center gap-2">
          £
          <input
            type="number"
            className="grow"
            required
            value={expense.amount}
            onChange={(e) =>
              setExpense({ ...expense, amount: parseInt(e.target.value) })
            }
          />
        </label>
        <select
          className="select select-primary w-full max-w-xs my-4"
          required
          defaultValue={"DEFAULT"}
          onChange={(e) => setExpense({ ...expense, category: e.target.value })}
        >
          <option disabled value="DEFAULT">
            Category
          </option>
          {categories.map((category, index) => (
            <option key={index}>{category}</option>
          ))}
        </select>
        {errorMsg && <p className="text-error mb-2">{errorMsg}</p>}
        <button className="btn btn-primary block" onClick={handleSubmit}>
          Add Expense
        </button>
      </form>
    </>
  );
}
