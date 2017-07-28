//app.js
App({
  //当程序初始化时候执行里面的内容
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  //小程序显示时候触发
  onShow : function(){
    console.log("程序启动了")
  },
  //小程序隐藏时触发
  onHide : function(){
    console.log("程序隐藏了")
  },
  //小程序出错时触发
  onError : function(){
    console.log("程序出错了")
  },
  //全局的方法
  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },
  //全局的属性
  globalData: {
    userInfo: null,
    pass:"123456"
  },
})
