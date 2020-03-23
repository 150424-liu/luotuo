<template>
	<div class="indexs">
		<!-- 头部 -->
		<div class="indexs_head">
			<p class="logo" style="font-size: 16px;">骆驼官方商城</p>
			<!-- 搜索框 -->
			<van-search
			  background="red"
			  v-model="value"
			  placeholder="请输入搜索关键词"
			  show-action
			  shape="round"
			  @search="onSearch"
			>
			  <div slot="action" @click="onSearch" style="color: white;">搜索</div>
			</van-search>
		</div>
		<!-- 内容 -->
		<div class="content">
			<!-- 头部目录 -->
			<van-tabs v-model="active" 
			title-inactive-color='white'
			title-active-color='yellow'
			color="yellow"
			background="red">
			<!-- 首页内容 -->
			  <van-tab title="首页">  
				<!-- 首页轮播 -->
				<van-swipe  :autoplay="3000" >
				  <van-swipe-item v-for="(image, index) in focus" :key="index">
				    <img style="width: 100%;height: 150px;" :src="image.photo">
				  </van-swipe-item>
				</van-swipe>
				<!-- 轮播说明 -->
				<div class="exq">
					<van-row type="flex" style="text-align: center;">
					  <van-col span="8" v-for="exq in exqs" >
						  <img :src="exq.img" />
						  <span>{{exq.name}}</span> 
					  </van-col>
					</van-row>
				</div>
				<!-- 骆驼甄选 -->
				<div class="select">
					<img class="select_imge" src="../../static/砖石.png" />
					<span class="select_hed">骆驼甄选</span> 
					<div class="select_flex">
						<van-grid :border="false" :column-num="3">
						  <van-grid-item v-for="select in selects">
						    <van-image :src="select.img" />
						  </van-grid-item>
						</van-grid>
						  <!-- <img src="../../static/select03.png" /> -->
						
					</div>
					<img id="footer_img" src="../../static/select10.png" />
				</div>
				<!-- 底部图片 -->  
			  </van-tab>
			  <!-- 首页内容-E -->
			  <van-tab title="户外馆">
					
			  </van-tab>
			  <van-tab title="男装馆">内容 3</van-tab>
			  <van-tab title="男鞋馆">内容 4</van-tab>
			  <van-tab title="运动馆">内容 1</van-tab>
			  <van-tab title="女鞋馆">内容 2</van-tab>
			  <van-tab title="内衣馆">内容 3</van-tab>
			  <van-tab title="标签 4">内容 4</van-tab>
			  <van-tab title="标签 1">内容 1</van-tab>
			  <van-tab title="标签 2">内容 2</van-tab>
			  <van-tab title="标签 3">内容 3</van-tab>
			  <van-tab title="标签 4">内容 4</van-tab>
			</van-tabs>
		</div>
			
		
		
	
		<footers></footers>		<!-- 底部导航 -->
	</div>
</template>

<script>
	// 底部导航注册
	import footers from './footers.vue'
export default{
	components:{footers},
	data(){
		return{
			focus:[],
		// 轮播说明
		exqs:[
			{
				img:'../../static/正.png',
				name:'官方正品'
			},
			{
				img:'../../static/七.png',
				name:'七天无理由退货'
			},
			{
				img:'../../static/皇冠.png',
				name:'骆驼卡特权'
			}
		],
		// 骆驼甄选图片
		selects:[
			{
				img:'../../static/select01.png'
			},
			{
				img:'../../static/select03.png'
			},
			{
				img:'../../static/select02.png'
			},
			{
				img:'../../static/select04.png'
			},
			{
				img:'../../static/select05.png'
			},
			{
				img:'../../static/select06.png'
			},
			{
				img:'../../static/select07.png'
			},
			{
				img:'../../static/select08.png'
			},
			{
				img:'../../static/select09.png'
			},
			
		]
			
		}
	},
	methods:{
		// 搜索框传参接口
		onSearch:function(){
			this.$router.push({
				path:"indexs_seek",			//要跳转的页面
				query:{
					k:this.value	//传递的搜索框输入的参数
				}
			})
		}
	},
	// 接口
	created(){
		// 轮播接口请求
			var _this=this;								//指定this
			this.$axios({								//创建接口
				methods:'get',							//类型为get请求
				url:'https://dawn.changxvan.top/api/',	//请求的接口地址
			})
			.then(function(response){					//请求成功返回
				_this.focus=response.data.focus;		//数据打包，打包在data中创建的数组 我这里是focus数组
				// console.log(response.data)				//打印请求的数据
			})
		
			
	}
	
}
	
</script>

<style scoped>
.indexs{
	background-color: #DCDDE0;
}
/* 头部 */
.indexs_head{
	background-color: red;
}
.logo{
	font-size: 16px;
	color: white;
	margin: 0;
	padding-top: 2%;
	padding-left: 5%;
	padding-bottom:2% ;
}
/* 轮播说明 */
.exq{
	background-color: white;
	margin-top: -1%;
}
.exq span{
	font-size: 12px;
}
.exq img{
	width: 12%;
	padding-top: 1%;
}
/* 骆驼甄选 */
.select{
	margin-top: 3%;
	padding-top: 2%;
	text-align: center;
	background-color: white;
	padding-bottom: 50px;
}
.select_imge{
	width: 5%;
}
.select_hed{
	font-size: 18px;
	color: #000000;
}
.select_flex{
	width: 90%;
	margin-left: 5%;
}
/* 底部图片 */
#footer_img{
	width: 90%;
	/* margin-left: 5%; */
	border-radius: 5px;
}
</style>
