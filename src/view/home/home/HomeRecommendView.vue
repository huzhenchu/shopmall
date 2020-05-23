<template>
  <div class="homeRecommendView">
    <div v-for="(item,index) in recommends" :key="index" class="recommend">
     <a :href="item.link">
       <img :src="item.image" alt="图片挂掉了...">
       <div>{{ item.title }}</div>
     </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.homeRecommendView {
  margin-top: 5px;
  display: flex;
  justify-content:space-between;
  text-align: center;
  border-bottom: 8px solid #eee;
}
.recommend {
  flex: 1;
  padding: 0 4px 15px;
}
.recommend a img {
  width: 70px;
  height: 70px;
}
.recommend a div {
  margin-top: 5px;
  font-size: 12px;
}


</style>
