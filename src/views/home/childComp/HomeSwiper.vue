<template>
    <swiper v-if="songList.length !== 0">
      <swiper-item :musicItem="songList[0]" :currentIndex="0">
        <div slot="swiper-img" class="swiper-img">
          <img :src="songList[0].pic_big"/>
        </div>
        <h3 slot="swiper-name" class="swiper-name">{{songList[0].title}}</h3>
        <h4 slot="swiper-author" class="swiper-author">{{songList[0].author}}</h4>
      </swiper-item>
      <swiper-item :musicItem="songList[1]" :currentIndex="1">
        <div slot="swiper-img" class="swiper-img">
          <img :src="songList[1].pic_big"/>
        </div>
        <h3 slot="swiper-name" class="swiper-name">{{songList[1].title}}</h3>
        <h4 slot="swiper-author" class="swiper-author">{{songList[1].author}}</h4>
      </swiper-item>
      <swiper-item :musicItem="songList[2]" :currentIndex="2">
        <div slot="swiper-img" class="swiper-img">
          <img :src="songList[2].pic_big"/>
        </div>
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/swiper";
export default {
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    songList: {
      type: Array,
      default: () => []
    }
  },
  created() {
  }
};
</script>

<style scoped>
.swiper-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 130px;
  height: 130px;
  border-radius: 20%;
  box-shadow: 8px 8px 15px 5px rgba(147, 187, 207, .5);
}
.swiper-img img {
    width: 100%;
    height: 100%;
    border-radius: 20%;
}
.swiper-img::after {
  position: absolute;
  right: 0;
  bottom: 0;
  display: block;
  content: "\e6a9";
  height: 40px;
  width: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 10px;
  background: #fff;
  font-family: 'iconfont';
  font-size: 35px;
  color: rgb(43, 146, 146);
}
</style>