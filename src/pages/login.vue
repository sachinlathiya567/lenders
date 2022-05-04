
<script setup>
import { ref } from "@vue/reactivity";
import data from "../data.json";

const email = ref("");
const password = ref("");
const message = ref("");
let loading = ref(false);

function lowecaseString(data) {
  return JSON.stringify(data).toLowerCase();
}

async function login() {
  loading.value = true;
  console.log("email", email.value);
  console.log("password", password.value);

  // find user and log in user
  let user = await data.users.find(
    (user) =>
      lowecaseString(user).includes(email.value) &&
      lowecaseString(user).includes(password.value)
  );

  //  user is not undefined or empty object
  if (!!user) {
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
    localStorage.setItem("authUser", JSON.stringify(user));
    message.value = "";
    document.location.href = "/home/";
  } else {
    message.value = "The credentials provided do not match our records";
  }
  loading.value = false;
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center text-dark mt-5">Login</h2>
        <div class="text-center mb-5 text-dark">Lender</div>
        <div class="card my-5">
          <form class="card-body cardbody-color p-lg-5" @submit.prevent="login">
            <div class="text-center">
              <div
                class="
                  profile-image-pic
                  img-thumbnail
                  rounded-circle
                  my-3
                  mx-auto
                "
                alt="profile"
              >
                <i class="fa fa-lock fa-4x"></i>
              </div>
            </div>

            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="Username"
                aria-describedby="emailHelp"
                placeholder="Email address"
                v-model="email"
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="password"
                v-model="password"
              />
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary px-5 mb-5 w-100">
                {{ loading ? "Loading.." : "Login" }}
              </button>
            </div>
            <div id="emailHelp" class="form-text text-center mb-5 text-dark">
              Not Registered?
              <router-link to="/login" class="text-dark fw-bold">
                Create an Account</router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.profile-image-pic {
  height: 80px;
  width: 80px;
}

.cardbody-color {
  background-color: #ebf2fa;
}

a {
  text-decoration: none;
}
</style>