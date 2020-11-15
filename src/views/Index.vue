<!--
 * @Author: your name
 * @Date: 2020-11-12 14:36:23
 * @LastEditTime: 2020-11-13 14:59:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \购物车\my-app\src\views\Index.vue
-->
<template>
  <div class="App">
      <main>
      <router-view/>
     </main>
   <footer>
      <router-link to="/home" tag="div">
       <img src="../assets/图片svg/home-select(1).svg" class="t1" alt="">
      首页</router-link>
   <router-link to="/about" tag="div">
    <img src="" class="t1" alt="">
   分类</router-link>
   </footer>
 

   
  </div>
</template>

<script>
export default {
   
created() {
  
},
}
</script>

<style lang="scss">
.t1{

  display: block;
  width: 60px;
  height: 60px;
}
   .box{
     width: 750px;
     height: 100px;
     background: #f00;
   }
   .router-link-active{
     color: #f00;
   }
</style>