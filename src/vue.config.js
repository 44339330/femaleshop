const path = require('path')//引入path模块
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  chainWebpack:(config)=>{
      config.resolve.alias
      .set('@',resolve('src'))
      .set('components',resolve('@/components'))
      .set('views',resolve('@/views'))
      .set('assets',resolve('@/assets'))
      //set第一个参数：设置的别名，第二个参数：设置的路径
  }
}
// module.exports = {
//   configureWebpack: {
//     resolve: {
//         // alias: {
//         //   '@':'src',
//         //   'assests' : '@/assests',    // 脚手架3默认@是src目录
//         //   'common' : '@/common',
//         //   'components' : '@/components',
//         //   'network' : '@/network',
//         //   'views' : '@/views'
//         // }
//     }
//   }
// }