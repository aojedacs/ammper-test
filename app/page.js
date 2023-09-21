"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import TransactionsTable from "./TransactionsTable";
import Accounts from "./Accounts";

export default function Home() {
 
  const baseUrl = process.env.BASE_URL;

  const [transactions, setTransactions] = useState();
  const [accountId, setAccountId] = useState();
  const [accounts, setAccounts] = useState();

  useEffect(() => {
    onTransactionData();
    onAccountsData();
  }, [accountId]);

  const onTransactionData = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Basic NzQ1NDI2ZmQtY2FkZi00OWUxLWIyODItNGI2MzlmMGFkM2E3OktESHVKI1FsR1FPdUpIeTExLVFHYnJZcDBwc0B5emkxbzVTbXRWcVRYV2l1SEdwbXJPI18tSzE3bUgycnZUTVc="
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://sandbox.belvo.com/api/transactions/?page=1&link=539b23a6-9cb9-4498-8f1d-2659ea5b469b&account=${accountId}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result).results);
        setTransactions(JSON.parse(result).results);
      })
      .catch((error) => console.log("error", error));
  };

  const onAccountsData = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Basic NzQ1NDI2ZmQtY2FkZi00OWUxLWIyODItNGI2MzlmMGFkM2E3OktESHVKI1FsR1FPdUpIeTExLVFHYnJZcDBwc0B5emkxbzVTbXRWcVRYV2l1SEdwbXJPI18tSzE3bUgycnZUTVc="
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://sandbox.belvo.com/api/accounts/?page=1&link=539b23a6-9cb9-4498-8f1d-2659ea5b469b",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result).results);
        setAccounts(JSON.parse(result).results);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        <div className="relative overflow-x-auto">
          <div class="flex items-center justify-center py-12 flex-wrap">
            <h2 class="text-4xl font-extrabold dark:text-white">Accounts</h2>
          </div>
          <div class="flex items-center justify-center py-12 flex-wrap">
            <Accounts accounts={accounts} accountId={setAccountId} />
          </div>
          <div class="flex items-center justify-center py-12 flex-wrap">
            <h2 class="text-4xl font-extrabold dark:text-white">
              Transactions
            </h2>
          </div>
          <div class="flex items-center justify-center py-12 flex-wrap">
            <TransactionsTable transactions={transactions} />
          </div>
        </div>
      </div>
    </>
  );
}
