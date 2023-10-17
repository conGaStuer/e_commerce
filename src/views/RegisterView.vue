<template>
  <div class="login-container">
    <div class="login-side">
      <div class="login-side--component">
        <div class="login-section login-image"></div>
        <div class="login-section login-form">
          <form @submit.prevent="Register" class="forms">
            <div class="hello">
              <p class="text-1">Hello !</p>
              <p class="text-2">Good <span>morning</span></p>
            </div>
            <div class="form">
              <p class="text">Register</p>

              <div class="input">
                <input
                  type="text"
                  name=""
                  placeholder="Email address"
                  v-model="email"
                />
                <input
                  type="password"
                  name=""
                  placeholder="Password"
                  v-model="password"
                />
              </div>
              <div class="change">
                <div class="remember">
                  <button class="stick">x</button>
                  <p>Remember</p>
                </div>
                <p class="forgot">Forgot Password ?</p>
              </div>
              <input type="submit" class="submit" value="Register" />
              <router-link class="create" to="/login"
                >Have an Account ?</router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
export default {
  name: "RegisterView",
  setup() {
    const email = ref("");
    const password = ref("");
    const Register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((user) => {
          alert(user);
        })
        .catch((err) => alert(err.message));
    };
    return {
      email,
      password,
      Register,
    };
  },
};
</script>
<style lang="scss" scoped>
@mixin center-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
$text-color: rgb(144, 143, 143);
$content-color: #e8554e;
$content-color2: #004b80;
$font: "Lato";

body {
  font-family: $font;
}
.login-container {
  width: 100%;
  height: 708px;
  background-image: url(../assets/back.png);
  background-position: center 100%;
  background-size: cover;
  background-blend-mode: overlay;
  margin: 0 auto;
  @include center-item();
  .login-side {
    width: 80%;
    height: 90%;
    background-color: transparent;
    border-radius: 20px;
    @include center-item();
    box-shadow: 0px 2.5px 5px 2px rgb(39, 39, 39);
  }
  .login-side--component {
    width: 100%;
    height: 100%;

    border-radius: 20px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .login-section {
      width: 50%;
      height: 100%;
      background-color: #004b80;
    }
    .login-image {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      background-image: url(../assets/b3.jpg);
      background-size: cover;
      background-position: right 20%;
    }
    .login-form {
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      background-color: white;
      @include center-item();
      flex-direction: column;
      .forms {
        width: 80%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .hello {
          width: 80%;
          height: 10%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .text-1 {
            font-size: 20px;
            color: $text-color;
            margin: 0;
            padding: 0;
          }
          .text-2 {
            font-size: 25px;
            color: #d8b687;
            margin: 0;
            padding: 0;
            font-weight: bold;
            span {
              color: #7c351b;
            }
          }
        }
        .form {
          width: 80%;
          height: 85%;

          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          .text {
            width: 100%;
            height: 5%;
            padding: 0;
            margin: 0;
            font-size: 30px;
            color: #964522;
            text-align: center;
            font-weight: bold;
            position: relative;
            top: 5px;
          }
          .input {
            width: 100%;
            height: 30%;

            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            input {
              width: 98.89%;
              height: 40%;
              border: none;
              border-bottom: 5px solid #964522;
              outline: none;
              font-size: 18px;
              background-color: white;
              font-family: $font;
              &::placeholder {
                font-weight: bold;

                font-size: 18px;
                font-family: $font;
                letter-spacing: 1.5px;
                color: $text-color;
                background-color: white;
              }
            }
          }
          .change {
            position: relative;
            top: -30px;
            width: 100%;
            height: 10%;

            display: flex;
            justify-content: space-between;
            align-items: center;
            .remember {
              width: 28%;
              height: 80%;

              display: flex;
              justify-content: space-between;
              align-items: center;
              font-size: 15px;
              color: $text-color;
              button {
                border: 1px solid $text-color;
                cursor: pointer;
                color: white;
                background: #964522;
              }
            }
            .forgot {
              font-size: 15px;
              color: $text-color;
              cursor: pointer;
            }
          }

          .submit {
            width: 80%;
            height: 10%;
            background-color: #964522;
            position: relative;
            top: -40px;
            border-radius: 10px;
            border: none;
            cursor: pointer;
            color: white;
            font-family: $font;
            font-size: 18px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .create {
            width: 100%;
            height: 10%;

            padding: 0;
            margin: 0;
            position: relative;
            top: -60px;
            font-size: 15px;
            color: $text-color;
            text-align: center;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
