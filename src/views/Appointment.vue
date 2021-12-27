<template>
  <div class="container">
    <div class="row gy-3">
      <div class="appointment-info col-12">
        <div class="card">
          <div class="row">
            <div class="col-8">
              <div class="card-body">
                <h5 class="card-title fs-4">預約資訊</h5>
                <h5 class="card-text fw-bolder">地點：成大醫院站</h5>
                <p class="card-text">地址：台南市北區勝利路138號OO大樓前</p>
                <h5 class="card-text fs-4 fw-bolder">預約時間</h5>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    :disabled="hasSelectTime"
                    @click="selectNowTime"
                  />
                  <label class="form-check-label" for="flexRadioDefault1"> 現在 </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    :disabled="hasSelectTime"
                    @click="chooseOtherTime"
                  />
                  <label class="form-check-label" for="flexRadioDefault2"> 選擇其他時間 </label>
                </div>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  @change="selectFutureTime($event)"
                  :disabled="!isChooseOtherTime || hasSelectTime"
                >
                  <option value="0" selected>選擇時間</option>
                  <option value="1">時段1</option>
                  <option value="2">時段2</option>
                  <option value="3">時段3</option>
                  <option value="4">時段4</option>
                  <option value="5">時段5</option>
                  <option value="6">時段6</option>
                </select>
              </div>
            </div>
            <div class="col-4">
              <img src="../assets/nckuhp-logo.png" class="location-img w-100 rounded-start" />
            </div>
          </div>
        </div>
      </div>
      <div class="available-time col-12">
        <div v-if="hasSelectTime" class="card">
          <div v-if="canBeReserved" class="card-body">
            <h5 class="card-title">目前該時間仍可預約！請問是否預約？</h5>
            <h6 class="card-subtitle my-2 text-muted">預約後需30分鐘內抵達站點</h6>
            <button @click="this.hasSelectTime = false" class="btn btn-secondary me-2">
              重新選擇時間
            </button>
            <button @click="goToPage('Qrcode')" class="btn btn-primary mx-2">我要預約</button>
          </div>
          <div v-else class="card-body">
            <h5 class="card-title">該時間已無空位！</h5>
            <h6 class="card-subtitle my-2 text-muted">請重新選擇時間</h6>
            <button @click="this.hasSelectTime = false" class="btn btn-secondary me-2">
              重新選擇時間
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Appointment',
  data() {
    return { hasSelectTime: false, isChooseOtherTime: false, canBeReserved: true };
  },
  methods: {
    goToPage(toPage) {
      this.$router.push({ name: toPage });
    },
    chooseOtherTime() {
      this.isChooseOtherTime = true;
    },
    selectNowTime() {
      this.isChooseOtherTime = false;
      this.hasSelectTime = true;
      this.canBeReserved = true;
    },
    selectFutureTime(event) {
      if (event.target.value !== 0) {
        this.hasSelectTime = true;
        this.canBeReserved = false;
      }
    },
  },
};
</script>

<style></style>
