<template>
  <div class="login-container">
    <div class="login-side">
      <div class="login-side--component">
        <div class="login-form"></div>
        <div class="login-info">
          <div class="login-info--part-1"></div>
          <div class="login-info--part-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HomeView from "./HomeView.vue";
export default {
  name: "LoginView",
  components: {
    HomeView,
  },
};
</script>
<style lang="scss">
@mixin center-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
$text-color: rgb(144, 143, 143);
$content-color: #e8554e;
$content-color2: #004b80;
body {
  padding: 0;
  margin: 0;
  font-family: "Bricolage Grotesque", sans-serif;
  font-family: "Cabin", sans-serif;
  font-family: "Montserrat", sans-serif;
  font-family: "Odibee Sans", cursive;
}
.login-container {
  width: 100%;
  height: 708px;

  background-position: center 100%;
  background-size: cover;
  margin: 0 auto;
  @include center-item();
  .login-side {
    width: 80%;
    height: 90%;
    background-color: aliceblue;
    border-radius: 20px;
    @include center-item();
    box-shadow: 0px 1px 5px 1px rgb(118, 117, 117);
  }
  .login-side--component {
    width: 97%;
    height: 95%;

    border-radius: 20px;
    position: relative;
    .login-form {
      width: 100%;
      height: 85%;
      background-color: $content-color2;
      border-radius: 20px 20px 0px 20px;
      position: relative;
      margin-bottom: -20px;
      z-index: 1;
    }
    .login-info {
      width: 100%;
      height: 15%;
      background-color: aliceblue;
      position: relative;
      z-index: 0;
      padding-bottom: 20px;
      border-radius: 0px 20px 0 20px;
      @include center-item();
      .login-info--part-1 {
        width: 40%;
        height: 90%;
        background-color: aliceblue;
        border-radius: 0px 20px 0px 0px;
        clip-path: polygon(0 0, 95% 0%, 100% 100%, 0% 100%);
        margin-right: -30px;
      }
      .login-info--part-2 {
        width: 60%;
        height: 90%;
        background-color: $content-color2;
        border-radius: 0px 20px 20px 0px;
        padding-right: 30px;
      }
    }
  }
}
</style>
