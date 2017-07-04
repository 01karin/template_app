<template>
  <div class="main">
  <p>主页</p>
  <button @click="loginOut">退出</button>
  <div class="compent"><component :is="currentView"></component></div> 
   <div class="footer">
     <div class="footerNav" v-for="(item,index) in nav_menu_data" :key="index" :class="{active:index===0}" @click="pageChange($event,item.path)">
       <p><i class="iconfont" :class="item.icon"></i></p>
           <p>{{item.name}}</p>
     </div>
   </div> 
   <!-- <main-content>
     <router-view></router-view>
   </main-content>
   <div class="footer" :default-active="$route.path">
     <router-link :to="item.path" class="footerNav" v-for="(item,index) in nav_menu_data" :key="index" :class="{active:index===0}">
         <p><i class="iconfont" :class="item.icon"></i></p>
         <p>{{item.name}}</p>
     </router-link>
   </div> -->
  </div>
</template>
<script>
  import router from '../../router'
  import mainWork from './work'
  import mainMsg from './msg'
  import mainContacts from './contacts'
  import mainMy from './my'
  import mainContent from '@/components/mainContent'
	export default{
		name: 'maindex',
    data:function(){
        return {
            currentView:mainMsg
        }
    },
    components:{
      mainWork,
      mainMsg,
      mainContacts,
      mainMy,
      mainContent
    },
    computed:{
      nav_menu_data(){
         let isMember = localStorage.getItem("isMember");
         let type = localStorage.getItem("type");
         if (isMember == "true" && type == 1) {
              let userInfo ={
                 type : 1,
                 isMember:"true"
              }
              this.$store.dispatch('confirmUserInfo',userInfo);
         }
         if (isMember == "true" && type == 2) {
              let userInfo ={
                 type : 2,
                 isMember:"true"
              }
              this.$store.dispatch('confirmUserInfo',userInfo);
         }
         return this.$store.getters.getNavMenuData
       }
     },
    methods:{
      loginOut(){
        this.$store.dispatch('deleteUserInfo');
        this.$router.push({path: '/login'});
      },
     /*pageChange:function(e){
        $(e.currentTarget).addClass("active").siblings("active").removeClass("active")
      }*/
      pageChange:function(e,url){
        this.currentView=url
        $(e.currentTarget).addClass("active").siblings(".active").removeClass("active")
      },
    }
	}
</script>
<style lang='less' scoped>
  @import  '../../public/comment.less';
  .active{
    color:#F3B700;
    text-decoration:none;
  }
  .main{
    width:100%;
    height:100%;
    button{
      width:100px;
      border-radius:5px;
      height:40px;
      line-height:40px;
      background:#333;
      color:#fff;
      text-align:center;
    }
    .footer-container{
      position:fixed;
      left:0;
      bottom:0;
      display:flex;
      width:100%;
      height:1rem;
      justify-content: center;
      align-items:center;
      align-content:center;
      border-top:1px solid #dedede;
      .footer-item{
        flex:1;
        text-align:center;
      }
    }
    .footer{
    position:fixed;
    height:50px;
    bottom:0;
    left:0;
    width:100%;
    z-index:333;
    border-top:1px solid @borderColor;
    display:flex;
    justify-content: center;
    align-items:center;
    align-content:center;
    background:@white;
    .footerNav{
      flex:1;
      text-align: center;
      padding-bottom:8px;
      color:@fontColor;
      p{
        margin-top:8px;
        >i{
          font-size: 18px;
        }
        &:nth-of-type(2){
          margin-top:2px;
          height: 14px;
        }
      }
    }
    .footerNav.active{
        color:@lightBlue;
        text-decoration:none;
      }

  }
  }

</style>
