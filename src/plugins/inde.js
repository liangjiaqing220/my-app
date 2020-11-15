/*
 * @Author: your name
 * @Date: 2020-11-12 14:43:28
 * @LastEditTime: 2020-11-13 22:59:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \购物车\my-app\src\lib\inde.js
 */
  
    export default {install(Vue) {
        const components= require.context('@/components', true, /(.vue)$/);
          
    
        //  console.log(components.keys())
        components.keys().forEach(item=>{
            console.log(components(item))
              
            const component=components(item).default
        
            Vue.component(component.name,component)
        })
    }}
