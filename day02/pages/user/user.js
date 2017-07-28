var num = 0;
Page({
	data:{
		items: [
	      {name: 'USA', value: '美国'},
	      {name: 'CHN', value: '中国', checked: 'true'},
	      {name: 'BRA', value: '巴西'},
	      {name: 'JPN', value: '日本'}
	    ],
	    item2:[
	    	{name:'xs',value:'学生',checked: 'true'},
	    	{name:'ls',value:'老师'},
	    	{name:'qt',value:'其他'}
	    ],
		number:0,
		iconType:['success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'],
		imgUrl:[
			'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      		'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      		'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
		],
		country:['中国','马来西亚','新加坡'],
		index:0,
		time:"09:01"

	},
	bpC2:function(e){
		//console.log(e.detail.value)
		this.setData({
			time:e.detail.value
		})
	},
	bpC:function(e){
		//console.log(e.detail.value)
		this.setData({
			index:e.detail.value
		})
	},
	radioChange:function(e){
		console.log("radio:",e.detail.value)
	},
	changePage:function(){
		console.log("页面转换了")
	},
	sub:function(e){
		console.log("提交表单:",e.detail.value)
	},
	res:function(e){
		console.log("表单重置了")
	},
	//页面加载完毕后执行
	onLoad:function(){
		
		var timer = setInterval(()=>{
			num++;
			if(num>=100){
				clearInterval(timer);
			}
			this.setData({
				number:num
			})
		},30)
	}
})