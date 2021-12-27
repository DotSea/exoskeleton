<template>
  <div class="bg-light vh-100">
    <Header>
      <template v-slot:default>{{ this.CurrentPage }}</template></Header
    >
    <router-view />
  </div>
</template>
<script>
import 'bootstrap';

import Header from './components/Header.vue';

export default {
  components: { Header },
  computed: {
    CurrentPage() {
      let pathName = '';
      if (this.$route.fullPath === '/') {
        pathName = '首頁';
      } else if (this.$route.fullPath === '/login') {
        pathName = '登入';
      } else if (this.$route.fullPath === '/location') {
        pathName = '目前站點';
      } else if (this.$route.fullPath === '/map') {
        pathName = '站點地圖';
      } else if (this.$route.fullPath === '/appointment') {
        pathName = '預約站點';
      } else if (this.$route.fullPath === '/qrcode') {
        pathName = '預約資訊';
      }
      return pathName;
    },
  },
};
</script>
<style lang="scss">
@import 'bootstrap';
</style>
