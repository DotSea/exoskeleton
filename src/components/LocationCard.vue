<template>
  <div class="card my-4">
    <div class="row g-0">
      <div class="col-4">
        <img src="../assets/nckuhp-logo.png" class="location-img w-100 rounded-start" />
      </div>
      <div class="col-8">
        <div class="card-body h-100 d-flex flex-column justify-content-between">
          <h3 class="card-title">成大醫院</h3>
          <div>
            <p class="card-text">目前可預約數量：5具</p>
            <p class="card-text">目前可還數量：5台</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocationCard',
};
</script>

<style lang="scss" scoped>
.location-img {
  object-fit: cover;
}
</style>
