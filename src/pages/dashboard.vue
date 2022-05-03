

<script setup>
</script>

<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-12">
          <h5>Dashboard</h5>
          <h2 class="display-4">Welcome</h2>
        </div>
        <div class="col-md-3">
          <div class="card-counter primary">
            <i class="fa fa-code-fork"></i>
            <span class="count-numbers">1200</span>
            <span class="count-name">Balance</span>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card-counter danger">
            <i class="fa fa-ticket"></i>
            <span class="count-numbers">-200</span>
            <span class="count-name">Borrowed</span>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card-counter success">
            <i class="fa fa-database"></i>
            <span class="count-numbers">0</span>
            <span class="count-name">Lend</span>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card-counter info">
            <i class="fa fa-users"></i>
            <span class="count-numbers">35</span>
            <span class="count-name">Transactions</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-counter {
  box-shadow: 2px 2px 10px #dadada;
  margin: 5px;
  padding: 20px 10px;
  background-color: #fff;
  height: 100px;
  border-radius: 5px;
  transition: 0.3s linear all;
}

.card-counter:hover {
  box-shadow: 4px 4px 20px #dadada;
  transition: 0.3s linear all;
}

.card-counter.primary {
  background-color: #007bff;
  color: #fff;
}

.card-counter.danger {
  background-color: #ef5350;
  color: #fff;
}

.card-counter.success {
  background-color: #66bb6a;
  color: #fff;
}

.card-counter.info {
  background-color: #26c6da;
  color: #fff;
}

.card-counter i {
  font-size: 5em;
  opacity: 0.2;
}

.card-counter .count-numbers {
  position: absolute;
  right: 35px;
  top: 20px;
  font-size: 32px;
  display: block;
}

.card-counter .count-name {
  position: absolute;
  right: 35px;
  top: 65px;
  font-style: italic;
  text-transform: capitalize;
  opacity: 0.5;
  display: block;
  font-size: 18px;
}
</style>