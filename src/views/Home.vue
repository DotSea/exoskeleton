<template>
  <div class="bg-light w-100">
    <div class="container justify-content-between">
      <div class="row py-5 justify-content-between align-item-center">
        <div class="col-12">
          <div class="item d-flex flex-column align-items-center">
            <img src="https://fakeimg.pl/350x200/7a7a7a/" class="img-fluid rounded" alt="..." />
          </div>
          <p class="text-black text-center my-3">外骨骼機器人</p>
        </div>
        <div class="home-btn-group col-12">
          <div class="item d-flex flex-column align-items-center">
            <button
              type="button"
              class="btn btn-lg btn-outline-primary my-3 w-50 rounded-pill"
              @click="goToPage('Login')"
            >
              會員登入
            </button>
            <button
              type="button"
              class="btn btn-lg btn-outline-primary my-3 w-50 rounded-pill"
              @click="goToPage('Location')"
            >
              查詢租借站
            </button>
            <button type="button" class="btn btn-lg btn-outline-primary my-3 w-50 rounded-pill">
              使用說明
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  methods: {
    goToPage(toPage) {
      this.$router.push({ name: `${toPage}` });
    },
  },
};
</script>

<style lang="scss" scoped>
.home-btn-group {
  margin-top: 20vh;
}
</style>
