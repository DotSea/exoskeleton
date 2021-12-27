<template>
  <div class="container pb-4">
    <div class="bg-secondary rounded-3 p-2 w-75">
      <h5 class="w-100 fs-4 text-white">點擊站點，可顯示站點所在區域，也可以直接預約租借</h5>
    </div>
    <LocationCard class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" />
    <LocationCard class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" />
    <LocationCard class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" />

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              您選擇的是成大醫院，<br />請問要直接預約、或是查看地圖呢？
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p class="card-text">目前可預約數量：5具</p>
            <p class="card-text">目前可還數量：5台</p>
          </div>
          <div class="modal-footer justify-content-center">
            <button type="button" class="btn btn-secondary mx-3" data-bs-dismiss="modal">
              回主選單
            </button>
            <button
              type="button"
              class="btn btn-primary mx-3"
              data-bs-dismiss="modal"
              @click="goToPage('Appointment')"
            >
              直接預約
            </button>
            <button
              type="button"
              class="btn btn-primary mx-3"
              data-bs-dismiss="modal"
              @click="goToPage('Map')"
            >
              查看地圖
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LocationCard from '../components/LocationCard.vue';

export default {
  name: 'Location',
  data() {
    return { showModal: false };
  },
  methods: {
    goToPage(toPage) {
      this.$router.push({ name: toPage });
    },
  },
  components: { LocationCard },
};
</script>

<style lang="scss" scoped></style>
