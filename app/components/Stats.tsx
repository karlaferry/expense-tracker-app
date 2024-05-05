"use client";
import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";

interface Props {
  totalExpenses: number;
  isLoading: boolean;
}
export default function Stats({ totalExpenses, isLoading }: Props) {
  const [addFunds, setAddFunds] = useState(0);
  const [actualFunds, setActualFunds] = useState(0);
  const availableBalance = actualFunds - totalExpenses;

  useEffect(() => {
    const localStorageFunds = localStorage.getItem("account_balance");
    if (localStorageFunds) {
      setActualFunds(JSON.parse(localStorageFunds));
    }
  }, []);
  const addFundsModal = (): void => {
    (
      document.getElementById("add_funds_modal") as HTMLDialogElement
    ).showModal();
  };

  const handleAddFunds = (): void => {
    const newBalance = actualFunds + addFunds;
    setActualFunds(newBalance);
    localStorage.setItem("account_balance", JSON.stringify(newBalance));
    setAddFunds(0);
  };

  const editFundsModal = (): void => {
    (
      document.getElementById("edit_funds_modal") as HTMLDialogElement
    ).showModal();
  };

  const handleEditFunds = (): void => {
    setActualFunds(addFunds);
    localStorage.setItem("account_balance", JSON.stringify(actualFunds));
    setAddFunds(0);
  };

  return (
    <div className="flex gap-4 flex-col justify-center md:flex-row">
      <div className="stats bg-error text-primary-content grow">
        <div className="stat">
          <div className="stat-title text-white">Total Expenses</div>
          <div className="stat-value">
            {!isLoading ? (
              `£${totalExpenses}`
            ) : (
              <span className="loading loading-dots loading-m"></span>
            )}
          </div>
        </div>
      </div>
      <div className="stats bg-accent text-primary-content grow">
        <div className="stat">
          <div className="stat-title text-white">Account Balance</div>
          <div className="stat-value">
            {!isLoading ? (
              `£${availableBalance}`
            ) : (
              <span className="loading loading-dots loading-m"></span>
            )}
          </div>
          <div className="stat-actions flex gap-1">
            <button className="btn btn-sm" onClick={addFundsModal}>
              Add Funds
            </button>
            <button className="btn btn-sm" onClick={editFundsModal}>
              <FaRegEdit />
            </button>
          </div>
        </div>
      </div>

      {/* ADD FUNDS MODAL */}
      <dialog id="add_funds_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Funds</h3>
          <div className="modal-action flex flex-col">
            <form method="dialog">
              <label className="input input-primary flex items-center gap-2 mb-4">
                £
                <input
                  type="number"
                  value={addFunds === 0 ? "" : addFunds}
                  onChange={(e) => setAddFunds(parseInt(e.target.value))}
                />
              </label>
              <button className="btn btn-primary" onClick={handleAddFunds}>
                Add
              </button>
            </form>
          </div>
        </div>
      </dialog>

      {/* EDIT FUNDS MODAL */}
      <dialog id="edit_funds_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Funds</h3>
          <div className="modal-action flex flex-col">
            <form method="dialog">
              <label className="input input-accent flex items-center gap-2 mb-4">
                £
                <input
                  type="number"
                  value={addFunds === 0 ? "" : addFunds}
                  onChange={(e) => setAddFunds(parseInt(e.target.value))}
                />
              </label>
              <button className="btn btn-accent" onClick={handleEditFunds}>
                Edit
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
