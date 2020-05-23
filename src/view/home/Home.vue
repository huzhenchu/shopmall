<template>
  <div id="home">
    <nav-bar>
      <div slot="center">振楚商城</div>
    </nav-bar>

    <home-swiper :banners='banners'></home-swiper>

    <home-recommend-view :recommends='recommends'></home-recommend-view>

  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import { getHomeMultidata } from "../../network/home";
import HomeSwiper from './home/HomeSwiper';
import HomeRecommendView from './home/HomeRecommendView';

export default {
  name: "Home",
  data() {
    return {
      banners:[],
      recommends:[]
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView

  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      // console.log(this.banners);
    });
  }
};
</script>

<style  scoped>
.nav-bar {
  /* background-color: #ff5777; */
  background-color: var(--color-tint);
  color: #fff;
}
</style>
