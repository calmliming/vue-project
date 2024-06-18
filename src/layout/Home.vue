<template>
  <div>Home</div>
  <div>点击登录按钮获取的数据：{{ text }}</div>
  <button @click="pcLogin">登录</button>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { login } from "../api/lmApi";
const formData = reactive({
  // userName: "admin",
  // password: "123456",
  // loginType: "bmyypt",
});
const text = ref("111");
const pcLogin = () => {
  login()
    .then((res: any) => {
      text.value = res.data;
      console.log(res.data, "res");
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
