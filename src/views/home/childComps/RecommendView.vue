<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recommends: {
      type: Array,
      require: true
    }
  }
}
</script>
<style scoped>
.recommend {
  display: flex;
  width: 100%;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee ;
}
.recommend-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>