// 入口文件
import Vue from 'vue'
// 引入 ul 组件
import app from './app.vue'
import '../lib/dist/css/mui.min.css'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(Mint);

var vm = new Vue({
    el: "#app",
    render: c => c(app)
})