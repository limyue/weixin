Page({
	data:{
		 markers: [{
	      latitude: 38.042307,
	      longitude: 114.51486,
	      name:"新乐市",
	      desc:"我现在的位置"
	    }],
	    callout:[{
	    	bgColor:"red",
	      	text:"1"
	    }],

	    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
	    name: '此时此刻',
	    author: '许巍',
	    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
 
	    
	}, 
	//如果画布错误报错
	canvasIdErrorCallback: function (e) {
	    console.error(e.detail.errMsg)
	  },
	  onReady: function (e) {
	    // 使用 wx.createContext 获取绘图上下文 context
	    var context = wx.createContext('firstCanvas');

	    context.setStrokeStyle("#00ff00");
	    context.setLineWidth(5);
	    context.rect(0, 0, 200, 200);
	    context.stroke();
	    context.setStrokeStyle("#ff0000");
	    context.setLineWidth(2);
	    context.moveTo(160, 100);
	    context.arc(100, 100, 60, 0, 2 * Math.PI, true);
	    context.moveTo(140, 100);
	    context.arc(100, 100, 40, 0, Math.PI, false);
	    context.moveTo(85, 80);
	    context.arc(80, 80, 5, 0, 2 * Math.PI, true);
	    context.moveTo(125, 80);
	    context.arc(120, 80, 5, 0, 2 * Math.PI, true);
	    context.stroke();
	    context.draw();
	    wx.drawCanvas({
	    	canvasId:"firstCanvas",
	    	actions:context.getActions()
	    })
	  },
	  onReady: function (res) {
    	this.videoContext = wx.createVideoContext('myVideo')
 	 },
 	  inputValue: '',
	    data: {
	        src: '',
	    danmuList: [
	      {
	        text: '第 3s 出现的弹幕',
	        color: '#ff0000',
	        time: 3
	      },
	      {
	        text: '第 6s 出现的弹幕',
	        color: '#ff00ff',
	        time: 6
	    }]
	    },
	 onReady: function (e) {
	    // 使用 wx.createAudioContext 获取 audio 上下文 context
	    this.audioCtx = wx.createAudioContext('myAudio')
	  },
	audioPlay: function () {
	    this.audioCtx.play()
	  },
	  audioPause: function () {
	    this.audioCtx.pause()
	  },
	  audio14: function () {
	    this.audioCtx.seek(14)
	  },
	 audioStart: function () {
	    this.audioCtx.seek(0)
	  },
	openLocation:function(){
		wx.getLocation({
		  type: 'gcj02', //返回可以用于wx.openLocation的经纬度
		  success: function(res) {
		    var latitude = res.latitude
		    var longitude = res.longitude
		    wx.openLocation({
		      latitude: latitude,
		      longitude: longitude,
		      scale: 28
		    })
		  }
		})
	},
	
	getLocation:function(){
		wx.getLocation({
		  type: 'wgs84',
		  success: function(res) {
		  	console.log(res);
		    var latitude = res.latitude
		    var longitude = res.longitude
		    var speed = res.speed
		    var accuracy = res.accuracy
		  }
	})
	},
	showAction:function(){
		wx.showActionSheet({
			  itemList: ['A', 'B', 'C'],
			  success: function(res) {
			    console.log(res.tapIndex)
			  },
			  fail: function(res) {
			    console.log(res.errMsg)
			  }
		})
	},
	showmodel:function(){
		wx.showModal({
		  title: '提示',
		  content: '这是一个模态弹窗',
		  cancelText:"不喜欢",
		  cancelColor:"red",
		  confirmText:"喜欢",
		  success: function(res) {
		    if (res.confirm) {
		      console.log('用户点击确定')
		    } else if (res.cancel) {
		      console.log('用户点击取消')
		    }
		  }
		})
	},
	showToast:function(){
		wx.showToast({
		  title: '成功',
		  icon: 'success',
		  duration: 10000,
		  success:function(){
		  	console.log("显示消息框成功")
		  }
		});
		setTimeout(function(){
		  wx.hideLoading()
		},2000)
	},
	onLoad:function(arg){
		console.log(arg)
	},
	switchTab:function(){
		wx.navigateTo({
		  url: '../logs/logs?id=123'
		})
	}
	
	
})