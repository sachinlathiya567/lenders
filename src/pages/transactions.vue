<script setup>
import data from "../data.json";
const user = localStorage.getItem("authUser");
let authUser;
if (user) {
  authUser = JSON.parse(user);
}

const transactions = data.transactions;
const myTransactions = transactions.filter((t) =>
  t?.lender?.id == authUser?.id || t?.borrower?.id == authUser?.id
    ? true
    : false
);
</script>

<template>
  <div class="container my-5">
    <h1 class="display-4">
      Transactions
      <a href="" class="btn btn-primary pull-right my-3">New Transaction</a>
    </h1>
    <div class="card">
      <div class="card-body p-0">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Reason</th>
              <th scope="col">Type</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(t, index) in myTransactions" :key="index">
              <th scope="row">{{ t.id }}</th>
              <td>{{ t.date }}</td>
              <td>{{ t.reason }}</td>
              <td>
                {{ t.type }}
                {{ t.type == "Lends" ? `to ${t?.borrower?.name}` : "" }}
                {{ t.type == "Borrows" ? `from ${t?.borrower?.name}` : "" }}
              </td>
              <td>{{ t.amount }}</td>
              <td>{{ t.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>