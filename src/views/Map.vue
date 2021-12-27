<template>
  <div class="container-fluid overflow-hidden">
    <div class="station-info card" :class="{ 'is-Popup-hidden': isPopupHidden }">
      <div class="card-body rounded">
        <h5 class="card-title fs-4">成大醫院</h5>
        <h5 class="card-text fw-bolder">距離您目前位置約 500公尺</h5>
        <p class="card-text">目前可預約數量：5具</p>
        <p class="card-text">目前可還數量：5台</p>
        <div class="btn-group mx-auto" role="group" aria-label="Basic example">
          <button class="btn btn-secondary" @click="openPopup">返回地圖</button>
          <button class="btn btn-primary" @click="goToPage('Appointment')">確定預約</button>
        </div>
      </div>
    </div>
    <img
      class="current-location btn btn-primary border border-dark btn-lg rounded-pill"
      src="../assets/location.svg"
      alt=""
    />

    <button class="nearby-station btn btn-danger btn-lg rounded-circle" @click="openPopup">
      站點
    </button>
    <button class="coordin btn btn-secondary btn-lg rounded-circle">定位</button>
  </div>
</template>

<script>
export default {
  name: 'Map',
  data() {
    return {
      isPopupHidden: true,
    };
  },
  methods: {
    openPopup() {
      this.isPopupHidden = !this.isPopupHidden;
    },
    goToPage(toPage) {
      this.$router.push({ name: toPage });
    },
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  position: relative;
  width: 100%;
  height: 92%;
  background-image: url('../assets/nckuhp-map.png');
  background-position: center;
}
.current-location {
  position: absolute;
  width: 50px;
  height: 50px;
  top: 20%;
  left: 50%;
}
.nearby-station {
  position: absolute;
  bottom: 33%;
  left: 55%;
}
.coordin {
  width: 75px;
  height: 75px;
  position: absolute;
  bottom: 2%;
  right: 4%;
}
.is-Popup-hidden {
  display: none;
}
.station-info {
  width: 25%;
  z-index: 999;
  position: absolute;
  top: 30%;
  left: 50%;
}
</style>
