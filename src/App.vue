<template>
  <div id="app">
    <router-view></router-view>

    <keep-alive>
      <main-tab-bar></main-tab-bar>
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar from "./components/content/mainTabbar/MainTabBar";
export default {
  components: {
    MainTabBar
  }
};
</script>

<style >
@import "assets/css/base.css";
</style>
