<!--
 * @Author: your name
 * @Date: 2020-11-12 14:24:02
 * @LastEditTime: 2020-11-13 20:03:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \购物车\my-app\src\views\Index\Home.vue
-->
<template>
  <div class="home">
    <header>校园超市</header>
    <main>

      <div class="address">
        <span> 送至到八维北京学院 </span>
        <span> </span>
        <span>
          <img src="../../assets/图片svg/图标.svg" alt="" />
        </span>
      </div>
      <div class="swiper">
        <img src="../../assets/images/首页1_02.jpg" alt="">
      </div>
      <div class="Nine">
          <div v-for="(item,index) in 10" :key="index">
                <dl>
                 <dt><img src="../../assets/images/首页1_05.jpg" alt=""></dt>
                 <dd>蔬菜每日新鲜</dd>
                </dl>
          </div>
      </div>
      <div class="everyday">
         <div class="mei"><h3>每日必购</h3><span>大家都在买</span></div>
         <div class="Three">
            <div v-for="(item,index) in 3" :key="index">
            
                <img src="../../assets/images/首页1_08.jpg" alt="">
            </div>
         </div>
      </div>
      <div class="tab">
         <div v-for="(item,index) in 6" :key="index">
          <div :class="index==inde?'hong':''">{{"每日必抢"}}</div>
         </div>
      </div>
      <div class="tabs">
        <div class="beautiful">
         <img src="../../assets/images/meijia_12.jpg" alt="">
        </div>
        <div v-for="(item,index) in 10" :key="index" class="lis">
            <dl>
             <dt><img src="../../assets/images/tao_14.jpg" alt=""></dt>
             <dd>
                <div>{{"金秋金秋红蜜桃约1kg*袋"}}</div>
                <div>{{"累计1.5万分/一品13份"}}</div>
             </dd>
            </dl>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
    data() {
       return {
         inde:0
       }
     },
};
</script>

<style>
.text {
  font-size: 1.625rem;
}
</style>