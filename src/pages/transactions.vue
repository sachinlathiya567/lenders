<script setup>
import { ref } from "@vue/reactivity";
import data from "../data.json";
const user = localStorage.getItem("authUser");
let authUser;
if (user) {
  authUser = JSON.parse(user);
}

const myTransactions = data.transactions.filter((t) =>
  t?.lender?.id == authUser?.id || t?.borrower?.id == authUser?.id
    ? true
    : false
);

let allTransactions = ref(myTransactions);

const search = ref("");
const type = ref("");
const date = ref("");




function handleSearch() {
  if (!!search?.value) {
    
    let data = myTransactions.filter(t => {
        let tString = JSON.stringify(t).toLowerCase()

        let searchString = JSON.stringify(search.value).toLowerCase()

        return tString.includes(searchString)

    })

    allTransactions.value = data

    console.log("allTransactions", allTransactions.value);
  } else {
    allTransactions.value = myTransactions;
  }
}

function handleFilterbyType() {

    let data = myTransactions.filter(t => {
        return t.type === type.value
    })

    allTransactions.value = data
}


function handleFilterbyDate() {
    let data = myTransactions.filter(t => {
        let fulldate = new Date(t.date).getTime()

        let newfulldate = new Date(date.value).getTime()

        console.log("sd", fulldate === newfulldate);

        return fulldate === newfulldate
    })

    allTransactions.value = data

}
</script>

<template>
  <div class="container my-5">
    <h1 class="display-4">
      Transactions
      <router-link
        to="/home/new-transaction"
        class="btn btn-primary pull-right my-3"
        >New Transaction</router-link
      >
    </h1>

    <div class="card">
      <div class="card-body p-0">
        <div class="p-2">
          <div class="row">
            <div class="col-12">
              <h4>Search & Filter</h4>
            </div>
            <div class="col-12 col-sm-6">
              <label for="Search">Search</label>
              <input
                type="search"
                class="form-control"
                v-model="search"
                placeholder="search"
                @input="handleSearch"
              />
            </div>
            <div class="col-12 col-sm-3">
              <label for="Type">Type</label>
              <select
                type="Type"
                class="form-control"
                v-model="type"
                placeholder="Type"
                @change="handleFilterbyType"
              >
                <option value="Borrows">Borrows</option>
                <option value="Lends">Lends</option>
              </select>
            </div>
            <div class="col-12 col-sm-3">
              <label for="Date">Date</label>
              <input
                type="date"
                class="form-control"
                v-model="date"
                placeholder="Date"
                @input="handleFilterbyDate"
              />
            </div>
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Reason</th>
              <th scope="col">Type</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(t, index) in allTransactions" :key="index">
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
              <td>
                <button class="btn btn-outline-link btn-sm">
                  <span class="fa fa-edit text-primary"></span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>