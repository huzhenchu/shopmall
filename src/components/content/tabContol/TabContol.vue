<template>
  <div class="tabcontol">
    <div v-for="(item,index) in listInfo"
         :key="index"
         class="tabcontol_box"
         :class="{ active:index === currentIndex }" @click="currentBtn(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      listInfo: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data () {
      return {
        currentIndex: 0
      }
    },

    methods: {
      currentBtn(index) {
        this.currentIndex = index;
        this.$emit('tabclickdata',index)
      }
    }

  }
</script>

<style scoped>
.tabcontol {
  display: flex;
  margin-bottom: 10px;
}
.tabcontol .tabcontol_box {
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 15px;
  flex: 1;
}
.active span {
  padding: 8px;
  border-bottom: 3px solid #ff5577;
}
.active {
  color: var(--color-tint);
}
</style>
