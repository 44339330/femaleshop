<template>
  <div class="tab-control">
    <div :class="['tab-control-item', currentIndex === index ? 'active' : '']" 
          v-for="(item,index) in titles" 
          :key="item" 
          @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabClick',index)
    }
  }
}
</script>
<style scoped>
.tab-control {
  display: flex;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  z-index: 9;
}
.tab-control-item {
  flex: 1;
  text-align: center;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: #FFC0CB;
  
}
.active span {
  border-bottom: 3px solid #FFC0CB;
}
</style>