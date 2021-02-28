<template>
    <div>
        <HelloWorld msg="Hello Vue 3 + Vite" @myclick="getChild" ref="hw"/>
    </div>
</template>

<script setup>
import HelloWorld from 'comps/HelloWorld.vue'
import {ref} from 'vue'
const hw = ref(null)
//接收子组件传递的数据
const getChild = (msg) => {
  console.log(msg)
  //调用子组件方法
  hw.value.someMethod()
}
</script>