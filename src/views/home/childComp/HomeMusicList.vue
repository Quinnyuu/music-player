<template>
  <div class="home-list clear-fix">
    <div class="list-title">A list of top 10</div>
    <music-list class="list">
      <music-list-item v-for="(item, index) in songList" 
                       :key="index" 
                       class="list-item"
                       :musicItem="item"
                       :currentIndex="index">
        <div slot="list-img" class="list-img">
          <img :src="item.pic_small" />
        </div>
        <div slot="list-desc" class="list-desc">
          <h3 class="list-name">{{item.title}}</h3>
          <p class="list-author">{{item.author}}</p>
        </div>
        <div slot="list-icon" class="list-icon">
          <span class="list-play iconfont">&#xe6a9;</span>
        </div>
      </music-list-item>
    </music-list>
  </div>
</template>

<script>
import { musicList, musicListItem } from "components/musicList";
export default {
  components: {
    musicList,
    musicListItem,
  },
  props: {
    songList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.iconfont {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.home-list {
  position: relative;
  top: 0;
}
.list-title {
  position: absolute;
  top: 10%;
  left: -10%;
  transform: rotate(-90deg);
  font-size: 14px;
  font-weight: 600;
  color: rgb(43, 146, 146);
}
.list-title::before {
  content: "\e6b0";
  margin-right: 10px;
  font-family: "iconfont";
  color: #333;
}

.list-item {
  display: flex;
  height: 70px;
  line-height: 70px;
  padding: 10px 0;
  margin-left: 50px;
  overflow: hidden;
}

.list-img {
  float: left;
  height: 60px;
  width: 60px;
  border-radius: 20%;
  overflow: hidden;
  vertical-align: middle;
}
.list-img img {
  height: 100%;
}
.list-desc {
  float: left;
  padding-left: 20px;
  line-height: 20px;
}
.list-desc .list-name {
  overflow: hidden;
  width: 160px;
  margin: 10px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  letter-spacing: 2px;
  font-size: 16px;
  color: rgb(43, 146, 146);
}
.list-desc .list-author {
  margin: 0;
  font-size: 15px;
  color: #a3a3a3;
}
.list-icon {
  float: right;
}
.list-icon span {
  font-size: 25px;
  margin: 5px;
}
</style>