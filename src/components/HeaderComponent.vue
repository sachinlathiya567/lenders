

<script setup>
const user = localStorage.getItem("authUser");
let authUser;
if (user) {
  authUser = JSON.parse(user);
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("authUser");
  document.location.href = "/#/login/";
}
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <router-link class="navbar-brand" to="/home/">Home</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/home/"
                >Dashboard<span class="sr-only"></span
              ></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/home/transactions/"
                >Transactions</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/home/new-transaction/"
                >New Transaction</router-link
              >
            </li>
            <!-- <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> -->
          </ul>
          <div class="form-inline my-2 my-lg-0">
            <router-link class="btn btn-primary mr-2 my-2 my-sm-0" to="/home">
              {{ authUser?.name || "" }}
            </router-link>

            <button class="btn btn-outline-light my-2 my-sm-0" @click="logout">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>