var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"limyue",
    text : "这是内容",
    show : true,
    pass : null,
    id:4,
    show:"现在是显示",
    bool:false,
    arr:[
      {
        message:"你好朋友"
      },{
        message:"好久不见"
      },{
        message:"再见"
      }
    ],
    obj1:{
       a:"我是obj1中的a",
       b:"我是obj1中的b"
    }
     
    
  },
  Tap3:function(){
    console.log("出发了 里边 inner事件")
  },
  Tap2:function(){
    console.log("出发了 中间 middle事件")
  },
  Tap1:function(){
    console.log("出发了 外边 outter事件")
  },
  change:function(){
    // var bool = this.data.bool;
    this.setData({
      bool: !this.data.bool
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      pass : app.globalData.pass
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("first页面onshow方法")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  btnClick : function(){

    this.setData({text : "您已成功改变内容"})

  },

/*
设置wx.navigateTo页面跳转并传参数，点击始终没有效果
若是在全局app.json中配置了tabBar，引用的链接
与wx.navigateTo页面跳转url地址相同就无法实现跳转
http://www.cnblogs.com/wenzheshen/p/6912727.html

或者跳转到没有设置tabbar的页面
*/
  toIndex : function(){
    wx.navigateTo({
      url : "/pages/secondPage/second",
      success : "跳转成功",
      fail : "跳转失败",
      complete : "程序已跳转"
    })
  },
  toIndex2 : function(){
     wx.redirectTo({
      url : "/pages/secondPage/second",
      success : "跳转成功",
      fail : "跳转失败",
      complete : "程序已跳转"
    })
  }
})