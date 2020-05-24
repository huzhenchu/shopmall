<template>
  <div id="home">
    <nav-bar>
      <div slot="center">振楚商城</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <feature></feature>
    <tab-contol :listInfo="listInfo" class="tabtoncol" @tabclickdata='homeclick'></tab-contol>
    <goods-list :goods="goods[currenttype].list"></goods-list>
    <div class="box"></div>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import { getHomeMultidata, getHomeGoods } from "../../network/home";
import HomeSwiper from "./home/HomeSwiper";
import HomeRecommendView from "./home/HomeRecommendView";
import Feature from "./home/Feature";
import TabContol from "../../components/content/tabContol/TabContol";
import GoodsList from "../../components/content/goods/GoodsList";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      listInfo: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currenttype: "pop"
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    Feature,
    TabContol,
    GoodsList
  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },

  methods: {
    /**
     * 事件监听的相关方法
     *
     * **/
    homeclick(index) {
      switch (index) {
        case 0:
          this.currenttype = 'pop'
          break;

        case 1:
          this.currenttype = 'new'
          break;

        case 2:
          this.currenttype = 'sell'
          break;
      }

    },


    /**
     * 网络请求相关
     * **/
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    }
  }
};
</script>

<style  scoped>
#home {
  padding-top: 44px;
}
.nav-bar {
  /* background-color: #ff5777; */
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 8;
}
.box {
  margin-bottom: 11150px;
}
</style>
