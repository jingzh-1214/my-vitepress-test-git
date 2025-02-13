//import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
//export default defineConfig({})

// .vitepress/config.js
export default {
  lang: 'zh-CN' ,
  //'en-US',
  base: '/my-vitepress-test-git/',
  
// 站点级选项
  title: 'HUST-PSY',
  description: 'Enjoy',

// 主题级选项
  themeConfig:{
  
  // logo  
  logo: 'http://ygb.hust.edu.cn/images/yanjiushengxinlijiankang1.png',
  
  // nav
  nav: [
    { text: '首页', link:'/'},
    { text: '简介', link:'/intro'},
    { text: '历史', link:'/history'},
    { text: '部门', 
        items: [
          {text:'常务中心', link:'/item/item-1'},
          {text:'活动中心', link:'/item/item-2'},
          {text:'宣传中心', link:'/item/item-3'}
   	       ]
    },
    { text: '推文', link:'/post'}
    ]
  
  // sidebar
//   sidebar: [
//         { 
//	   text: 'Guide',
//	     items: [
//	       {text: 'Introduction', link: '/introduction'},
//	       {text: 'Getting Started', link: '/getting-started'} ]
//         }
//	 ]
  }
} 
