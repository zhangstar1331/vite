<template>
  <h1>{{ msg }}</h1>
  <p>{{$store.state.counter}}</p>
  <button @click="$store.commit('add')">add</button>
  <Comp/>
  <button @click="state.count++">count is: {{ state.count }}</button>
  <el-button @click="toParent">传递给父组件</el-button>
</template>

<script setup>
import { defineProps, reactive, defineEmit, useContext } from 'vue'
import service from 'utils/request.js'
//1、组件导入直接使用
import Comp from 'comps/Comp.vue'

//2、属性定义
const props = defineProps({
  msg: String
})
console.log(props)

//3、获取上下文对象
const ctx = useContext()
console.log(ctx)
//导出
ctx.expose({
  someMethod(){
    console.log("将方法导出外部，供外部使用")
  }
})

//4、事件定义导出
const emit = defineEmit(['myclick'])
const toParent = ()=> {
  emit('myclick','hello parent')
}
const state = reactive({ count: 0 })

// const testRequest = new Request('/api/createUser', {
//     method: 'post',
//     headers: {
//         'Content-Type': 'application/json;charset=utf-8;'
//     },
//     body: JSON.stringify({name:"star"})
// })
// fetch(testRequest).then(res=>res.json()).then(data=>{console.log(data)})
const res = await service.post('/createUser',JSON.stringify({name:"star"}))
console.log(res)
</script>