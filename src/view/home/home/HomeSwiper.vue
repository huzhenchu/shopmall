<template>
  <div>
    <sweiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </sweiper>
  </div>
</template>

<script>
import Sweiper from "../../../components/common/swiper/Swiper";
import SwiperItem from "../../../components/common/swiper/SwiperItem";
export default {
  name:'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Sweiper,
    SwiperItem
  }
};
</script>

<style  scoped>
</style>
