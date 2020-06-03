<template>
  <div id="app">
      首页
  </div>
</template>

<script>

export default {
  name: 'App',
  comments:{
 
  },
  data(){
    return {
      flag:'',
      num:1,
      isStoreSelect:true,
      isTakeSelect:false,
      
    }
  },
  created:function(){
      this.flag=2;
      this.$store.commit("constant",{flag:2,openid:'healthy',terminalid:'000000'});

      this.$router.push({path:'/store', query: { page: '1', code: '6666' }}); 
      this.isStoreSelect=true;
      this.isTakeSelect=false;

     



        //在页面加载时读取sessionStorage里的状态信息
      if (sessionStorage.getItem("store")) {
          this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
      }
        //在页面刷新时将vuex里的信息保存到sessionStorage里
      window.addEventListener("beforeunload",()=>{
          sessionStorage.setItem("store",JSON.stringify(this.$store.state))
      })
  },
  methods:{
    storeBtn(){
        this.$router.push({path:'/store', query: { page: '1', code: '6666' }}); 
        this.isStoreSelect=true;
        this.isTakeSelect=false;
        console.log(this.$store.state.flag,this.$store.state.openid,this.$store.state.terminalid);
    },
    takeBtn(){
        this.$router.push({path:'/take', query: { page: '2', code: '9999' }}); 
        this.isStoreSelect=false;
        this.isTakeSelect=true;
    },
    appointBtn(){
        this.$router.push({path:'/appointment', query: { page: '6', code: '8888' }}); 
        this.isStoreSelect=true;
        this.isTakeSelect=false;
    }

  }
}
</script>


<style>
body,html{
  margin:0;padding:0;
}
#app{
  width:100%;
}
*{
  box-sizing: border-box;
}

.el-message-box{
  width:80% !important;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
#footer{
  position: fixed;
  bottom: 0px;
  width:100%;
  height:56px;
  padding:0 10%;
  background: linear-gradient(#FFFFFF , #CCCCCC);
  border: solid 1px #CCCCCC;
}
#footer>div{
  width:50%;
  height:100%;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
  padding:2px 0;
  padding-top:8px;
}
#footer img{
  width:24px;
  height: 25px;
  /* float: left; */
  
}
#footer>div>div{
 
  font-size: 12px;

}

 .el-dialog__header{
  padding: 10px 20px 10px !important;
}
.el-dialog__body{
  padding:10px 20px !important;
}  



</style>
