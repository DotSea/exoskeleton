<template>
  <div class="bg-light w-100 vh-100">
    <div class="container justify-content-between py-5">
      <div class="row justify-content-center align-item-center">
        <div class="col-12">
          <div class="item d-flex flex-column align-items-center">
            <img src="../assets/profile-icon.png" class="img-fluid rounded-circle" alt="..." />
          </div>
          <p class="text-black text-center my-3">請先登入</p>
        </div>
      </div>
      <div class="row w-50 mx-auto">
        <div class="col">
          <label for="inputAccount" class="col-form-label">帳號</label
          ><input
            type="text"
            id="inputAccount"
            value="testaccount123456"
            class="form-control"
            aria-describedby="AccountHelpInline"
          />
          <span id="AccountHelpInline" class="form-text"> 請輸入帳號 </span>
        </div>
      </div>
      <div class="row w-50 mx-auto">
        <div class="col">
          <label for="inputPassword6" class="col-form-label">密碼</label>
          <input
            type="password"
            id="inputPassword6"
            value="testpassword123456"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
          <span id="passwordHelpInline" class="form-text"> 請輸入6到16位密碼 </span>
        </div>
      </div>
      <div class="row mx-auto justify-content-center my-3">
        <button @click="goToPage('Home')" type="submit" class="btn btn-primary w-25">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    goToPage(toPage) {
      this.$router.push({ name: `${toPage}` });
    },
  },
};
</script>

<style></style>
