import * as types from '../mutation-types'

//state 状态
const state = {
	user_info:{
		nav_menu_data:[],
		isMember:null
	}
}

//getters 导出状态
const getters = {
	getNavMenuData:state =>state.user_info.nav_menu_data
}

//actions 将状态导出的行为
const actions = {
	confirmUserInfo({commit},userinfo){
		commit(types.SET_USER_INFO,userinfo)
	},
	deleteUserInfo({commit},userinfo) {
		commit(types.DEL_USER_INFO,userinfo)
	}
}
//mutations 具体的状态信息变化
const mutations = {
	[types.SET_USER_INFO](state,userinfo){
		state.user_info.isMember = userinfo.isMember || {};
		if(userinfo.type==1){
			state.user_info.nav_menu_data = [
				{
					name:'首页',
					icon:'icons-home',
					path:"mainMsg"
				},
				{
					name:'订单',
					icon:'icons-dingdan',
					path:"mainWork"
				},
				{
					name:'货单',
					icon:'icons-jilu',
					path:"mainContacts"
				},
				{
					name:'账户',
					icon:'icons-account',
					path:"mainMy"
				}
			]
		}
		if(userinfo.type==2){
			state.user_info.nav_menu_data = [
				{
					name:'首页',
					icon:'icons-home',
					path:"mainMsg"
				},
				{
					name:'货单',
					icon:'icons-jilu',
					path:"mainContacts"
				},
				{
					name:'账户',
					icon:'icons-account',
					path:"mainMy"
				}
			]
		}
		if(userinfo === null){
			localStorage.removeItem("isMember");
      		localStorage.removeItem("type");
		}else{
			localStorage.setItem("isMember",userinfo.isMember);
      		localStorage.setItem("type",userinfo.type);
		}
	},
	[types.DEL_USER_INFO](state,userinfo) {
		localStorage.removeItem("isMember");
      	localStorage.removeItem("type");
      	state.user_info.nav_menu_data=[];
      	state.user_info.isMember=null;
	}
}
export default {
	state,
	getters,
	actions,
	mutations
}
