//Page Object
import {request} from "../../request/index.js"
Page({
  data: {
    swiperList:[],
    // 导航数组
    cateList:[]

  },
  getSwiperList(){
    request({url:"https://api.zbztb.cn/api/public/v1/home/swiperdata"})
    .then(result =>{
      this.setData({
        swiperList:result.data.message
      })
    })
    .catch(error=>{
      console.log(error)
    })
  },
  getCateList(){
    request({url:"https://api.zbztb.cn/api/public/v1/home/catitems"})
    .then(result =>{
      this.setData({
        cateList:result.data.message
      })
    })
    .catch(error=>{
      console.log(error)
    })
  },
  //options(Object)
  onLoad: function(options){
    this.getSwiperList()
    this.getCateList()
  },
  onReady: function(){
    
  },
  onShow: function(){
    
  },
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(){

  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  }
});