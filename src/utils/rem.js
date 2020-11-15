/*
 * @Author: your name
 * @Date: 2020-11-13 22:07:53
 * @LastEditTime: 2020-11-13 22:12:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \购物车\my-app\src\utils\rem.js
 */
const remUnit=100
function rem(){
   const windowWidth=window.innerWidth
   const propostion=windowWidth / 375
   document.querySelector("html").style.fontSize=remUnit * propostion +'px'
}
rem()
window.addEventListener("resize",()=>{
    rem()
})