<template>
  <div>Home</div>
  <button @click="pcLogin">登录</button>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { login } from "../api/lmApi";
const formData = reactive({
  userName: "admin",
  password: "123456",
  loginType: "bmyypt",
});
const pcLogin = () => {
  login(formData)
    .then((res: any) => {
      console.log(res);
    })
    .catch((err: any) => {
      console.log(err);
    });
};
function print() {
  console.log();
}
print();
</script>

<style></style>
