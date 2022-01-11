<template>
  <div class="container">
    <div class="row justify-content-center align-item-center">
      <div class="col-12 mb-3">
        <h3 class="bg-secondary text-white p-2">預約成功！</h3>
        <h4>
          請於<span class="text-danger">30分鐘內</span>內抵達站點，並至站點<span class="text-danger"
            >3號</span
          >租借機掃描下方QRcode
        </h4>
      </div>
      <div class="col-12 my-3">
        <div class="item d-flex flex-column align-items-center">
          <img class="w-50" src="../assets/qrcode-google.png" alt="qrcode" />
        </div>
      </div>
      <div class="col-12 my-3">
        <h3 class="bg-secondary text-white p-2">如何租借？</h3>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-start align-items-center">
            <span class="badge bg-primary rounded-pill me-2">1</span>
            <span>前往您所預約的租借站點</span>
          </li>
          <li class="list-group-item d-flex justify-content-start align-items-center">
            <span class="badge bg-primary rounded-pill me-2">2</span
            ><span
              >至您所預約的<span class="text-danger">3號</span
              >租借機，左側有一長方型觸控螢幕。</span
            >
          </li>
          <li class="list-group-item d-flex justify-content-start align-items-center">
            <span class="badge bg-primary rounded-pill me-2">3</span>
            點選螢幕上的「我要租借」，會出現一個QRcode掃瞄器，將手機的QRcode對準該掃瞄器。
          </li>
          <li class="list-group-item d-flex justify-content-start align-items-center">
            <span class="badge bg-primary rounded-pill me-2">4</span>
            掃描成功後，會顯示穿戴說明，請依據說明穿著外骨骼機器人。
          </li>
          <li class="list-group-item d-flex justify-content-start align-items-center">
            <span class="badge bg-primary rounded-pill me-2">4</span>
            穿戴完畢後，點選螢幕上的「確認」後，即完成租借。
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
