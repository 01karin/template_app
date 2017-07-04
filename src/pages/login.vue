<template>
	<div class="login-wrapper">
		<form action="##">
			<div class="login-item">
				<span>用户名：</span><input type="text" v-model="username">
			</div>
			<div class="login-item">
				<span>密码：</span><input type="password" v-model="password">
			</div>
			<div>
				<button @click="loginIn">登录</button>
			</div>
		</form>
	</div>
</template>
<script>
	export default {
		name:'login',
		data (){
			return {
				username:"",
				password:""
			}
		},
		methods:{
			loginIn(){
				if(this.username==="admin" && this.password==="admin"){
					var userInfo ={
						type:1,
						isMember:"true"
					}
					this.$store.dispatch("confirmUserInfo",userInfo)
					this.$router.push('/mainWork')
				}
				if(this.username==="web" && this.password==="web"){
					var userInfo ={
						type:2,
						isMember:"true"
					}
					this.$store.dispatch("confirmUserInfo",userInfo)
					this.$router.push('/mainWork')
				}
			}
		}
	}
</script>
<style lang="less" scoped>
	.login-wrapper{
		form{
			margin-top:100px;
			padding:0 15px;
			.login-item{
				height:45px;
				line-height:45px;
				border:1px solid #dedede;
				padding-left:15px;
				margin:20px 0;
			}
			div{
				button{
					background:lightblue;
					color:#fff;
					display:block;
					height:40px;
					line-height:40px;
					width:90%;
					margin:0 auto;
					border-radius:5px;
				}
			}
		}
	}
</style>