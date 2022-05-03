

<script setup>
</script>

<template>
  <div class="container my-5">
    <a href="" class="btn btn-primary my-3">
      <i class="fa fa-chevron-left mr-2"></i> Transactions</a
    >
    <h1 class="display-4">New Transaction</h1>

    <div class="row">
      <div class="col-12 col-sm-8 col-md-6">
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Example select</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect2"
              >Example multiple select</label
            >
            <select
              multiple
              class="form-control"
              id="exampleFormControlSelect2"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <div class="btn btn-primary btn-lg" type="submit">Submit</div>
        </form>
      </div>
    </div>
  </div>
</template>