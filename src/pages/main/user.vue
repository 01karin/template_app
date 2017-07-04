<template>
	<div class="wrapper">
		个人中心
		<button @click="back">返回上一页</button>
	</div>
</template>
<script>
	export default {
		name:'user',
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>