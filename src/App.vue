<template>
  <div class="app">
    <div class="app__container">
      <UserInfo :user="userStore.userWhite" />
      <CheckersTable />
      <UserInfo :user="userStore.userBlack" />
    </div>
  </div>
</template>

<script setup>
import CheckersTable from "@/components/CheckersTable.vue";
import UserInfo from "@/components/UserInfo.vue";

import { useUserStore } from "@/store/user";

const userStore = useUserStore();
</script>

<style lang="less">
.app {
  margin: 0 auto;
  width: 1400px;
  &__container {
    display: flex;
    justify-content: space-between; 
    align-items: flex-start;
  }
}
</style>
