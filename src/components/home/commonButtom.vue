<template>
  <div>
    <nav class="common-buttom">
      <router-link class="mui-tab-item " :to="{name:'el-home'}" @click.native="changepic">
        <img v-bind:src=' src1 '>
        <span :style="{ color: activeColor1 }">首页</span>
      </router-link>
      <router-link class="mui-tab-item " :to="{name:'el-shoppingcart'}" @click.native="changepic">
        <img v-bind:src=' src4 '>
        <span :style="{ color: activeColor4 }" class="specialspan">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'el-publish'}" @click.native="changepic">
        <img v-bind:src=' src2 '>
        <span :style="{ color: activeColor2 }">发布</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'el-my'}" @click.native="changepic">
        <img v-bind:src=' src3 '>
        <span :style="{ color: activeColor3 }">我的</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        src1: '',
        src2: '',
        src3: '',
        src4: '',
        activeColor1: '',
        activeColor2: '',
        activeColor3: '',
        activeColor4: '',
      }

    },
    mounted: function () {
      this.changepic();
    },
    methods: {
      changepic: function () {
        if (this.$route.path === "/") {
          this.src1 = '/static/img/shouye1.png';
          this.src2 = '/static/img/fabu.png';
          this.src3 = '/static/img/wode.png';
          this.src4 = '/static/img/gouwuche.png';
          this.activeColor1 = '#e35e4d';
          this.activeColor2 = '#bfbfbf';
          this.activeColor3 = '#bfbfbf';
          this.activeColor4 = '#bfbfbf';

        } else if (this.$route.path === '/publish') {
          this.src1 = '/static/img/shouye.png';
          this.src2 = '/static/img/fabu1.png';
          this.src3 = '/static/img/wode.png';
          this.src4 = '/static/img/gouwuche.png';
          this.activeColor1 = '#bfbfbf';
          this.activeColor2 = '#e35e4d';
          this.activeColor3 = '#bfbfbf';
          this.activeColor4 = '#bfbfbf';

        } else if (this.$route.path === '/shoppingcart') {
          this.src1 = '/static/img/shouye.png';
          this.src2 = '/static/img/fabu.png';
          this.src3 = '/static/img/wode.png';
          this.src4 = '/static/img/gouwuche1.png';
          this.activeColor1 = '#bfbfbf';
          this.activeColor2 = '#bfbfbf';
          this.activeColor3 = '#bfbfbf';
          this.activeColor4 = '#e35e4d';
        } else if (this.$route.path === '/my') {
          this.src1 = '/static/img/shouye.png';
          this.src2 = '/static/img/fabu.png';
          this.src3 = '/static/img/wode1.png';
          this.src4 = '/static/img/gouwuche.png';
          this.activeColor1 = '#bfbfbf';
          this.activeColor2 = '#bfbfbf';
          this.activeColor3 = '#e35e4d';
          this.activeColor4 = '#bfbfbf';
        }


      }
    }
  }
</script>
<style lang="scss" scoped>
  .common-buttom {
    background-color: #ffff;
    height: 1.2rem;
    position: fixed;
    bottom: 0px;
    display: flex;
    font-size: 0.24rem;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    z-index: 999;
    .mui-tab-item {
      display: block;
    }
    span {
      display: block;
      padding-top: 0.1rem;
      padding-left: 0.06rem;
    }
    img {
      display: block;
      width: 0.6rem;
      height: 0.6rem;
    }

  }

  .active {
    color: #bfbfbf;
  }

  .isactive {
    color: #e35e4d;
  }

  .specialspan {
    margin-left: -0.08rem ;
  }
</style>
