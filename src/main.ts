import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// element-plus配置国际化（中文）
//@ts-ignore 
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// app.use(ElementPlus,{
//   locale:zhCn
// });
import App from './App.vue'
import { initRouter } from './router'
//svg插件配置代码
import 'virtual:svg-icons-register';
//配置axios
import axios from 'axios';

const app = createApp(App);
import '@/styles/index.scss'
app.use(ElementPlus);
initRouter(app);
app.mount('#app');
