# 组件通讯-ref&$parent

## ref
+ 获取真实的dom节点
+ 获取到子组件实例VC
+ 组件内部数据对外是关闭的，别人不能访问；如果想要让外部访问需要，通过defineExpose方法对外暴露。

## $parent
+ 可以在子组件内获取到父组件的实例

## demo
+ 父组件
	```vue
	<template>
		<div class="father">
			<div class="data">
				<p>我是父组件</p>
				<p>money:{{ money }}</p>
				<button @click="handler">操作子组件数据</button>
			</div>
			<div class="children">
				<Child1 ref="son">
				</Child1>
			</div>
		</div>
	</template>
	```
	```ts
	<script setup lang="ts">
	import Child1 from "./child1.vue";
	import { ref } from "vue";
	const money = ref(1000);
	//获取子组件 变量名 必须等于子组件ref的值
	let son = ref();
	const handler = () => {
		money.value += 10;
		son.value.money -= 10;
		son.value.fly()
	};
	//组件内部数据对外是关闭的，别人不能访问;如果想要让外部访问需要,通过defineExpose方法对外暴露
	defineExpose({
		money
	})
	</script>
	```
+ 子组件 
	```vue
	<template>
		<div class="child1">
			<p>我是子组件1</p>
			<p>money:{{ money }}</p>
			<button @click="handler($parent)">操作父组件数据</button>
		</div>
	</template>
	```
	```ts
	<script setup lang="ts">
	import { ref } from "vue";
	const money = ref(150);
	const fly = ()=>{
		console.log("fly起来");
	}
	const handler = ($parent)=>{
		money.value += 10;
		$parent.money -=10;
	}
	//组件内部数据对外是关闭的，别人不能访问;如果想要让外部访问需要,通过defineExpose方法对外暴露
	defineExpose({
		money,
		fly
	})
	</script>
	```