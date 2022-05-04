
<script setup>
import { ref } from "@vue/reactivity";
import data from "../data.json";
const user = localStorage.getItem("authUser");
let authUser;
if (user) {
  authUser = JSON.parse(user);
}

const users = data.users;

const date = ref("");
const amount = ref("");
const type = ref("");
const reason = ref("");
const tuser = ref("");

function handleSubmit() {
  let transaction = {
    id: 1235 + Math.floor(Math.random() * 100),
    type: type.value,
    amount: amount.value,
    date: date.value,
    reason: reason.value,
    status: "unpaid",
  };

  if (type.value == "Lends") {
      transaction.lender = authUser
      transaction.borrower = tuser.value
  } else {
      transaction.borrower = authUser
      transaction.lender = tuser.value
  }

  console.log("transaction", transaction);
  alert("Success")
}
</script>

<template>
  <div class="container my-5">
    <router-link to="/home/transactions" class="btn btn-primary my-3">
      <i class="fa fa-chevron-left mr-2"></i> Transactions</router-link
    >
    <h1 class="display-4">New Transaction</h1>

    <div class="row">
      <div class="col-12 col-sm-8 col-md-6">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="exampleFormControlInput1">Date</label>
            <input
              v-model="date"
              type="date"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Amount</label>
            <input
              v-model="amount"
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Type</label>
            <select
              v-model="type"
              class="form-control"
              id="exampleFormControlSelect1"
            >
              <option value="Borrows">Borrows</option>
              <option value="Lends">Lends</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect2">
              {{ type == "Lends" ? `to` : "" }}
              {{ type == "Borrows" ? `from` : "" }}</label
            >
            <select
              v-model="tuser"
              class="form-control"
              id="exampleFormControlSelect2"
            >
              <option v-for="(user, index) in users" :key="index" :value="user">
                {{ user?.name }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1"
              >Reason for transaction</label
            >
            <textarea
              v-model="reason"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <button class="btn btn-primary btn-lg" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>