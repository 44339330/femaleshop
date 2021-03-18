<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import Pullup from '@better-scroll/pull-up'
import ObserveDOM from '@better-scroll/observe-dom'
BScroll.use(ObserveDOM)
BScroll.use(Pullup)
export default {
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad : {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDom: true,
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })

    // 2.监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll', (position) => {
      this.$emit('scroll',position)
      })
    }
    // 3.监听scroll滚动到底部
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullUpLoad')
      })
    }
  },
  methods: {
    scrollTo(x, y, time=300) {
      this.scroll.scrollTo(x, y, time)
    },
    // 刷新页面以刷新scrollHeight
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    // finishPullUp() {
    //   this.scroll && this.scroll.finishPullUp()
    // }
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>
<style scoped>
</style>