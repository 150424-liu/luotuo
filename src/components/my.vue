<template>
	<div class="my">
		<!-- 头部 -->
		
			<div class="head_head">
				<van-row>
				  <van-col span="16">
					<router-link to="/">
						<img src="../../static/my_index.png"  />
					</router-link>
					<span>我的</span>  
				  </van-col>
				  <van-col span="4"></van-col>
				  <van-col span="4"></van-col>
				</van-row>
			</div>
			<div class="my_head">
			<van-row style="text-align: center;padding-top: 3%; padding-bottom: -2%;">
			  <van-col span="6">
				<van-uploader>
				  <img style="width: 68px; height: 68px; " src="../../static/touxiang1.png" />
				</van-uploader>
				<span></span>  
			  </van-col>
			  <van-col span="6" style="padding-top: 5%;font-size: 16px;color: white;">湖人总冠军</van-col>
			  <!-- <van-col span="8">  </van-col> -->
			  <van-col span="12">
				  <img style="height: 40px; border-radius: 10px; margin-left: 51%;margin-top: 5%;" src="../../static/touxiang2.png" />
			  </van-col>
			</van-row>
		</div>
		
		<!-- 头部钱 -->
		<div class="head_money" >
			<van-grid :border="false" :column-num="5" >
			  <van-grid-item v-for="moner in moners">
				<div>{{moner.text1}}</div>
				<div style="">{{moner.text2}}</div>
			  </van-grid-item>
			</van-grid>
		</div>
		<!-- 我的订单 -->
		<div class="order">
			<div class="order_head">
				<van-row type="flex" justify="space-between">
				  <van-col span="6">我的订单</van-col>
				  <van-col span="4"></van-col>
				  <van-col span="8" style="font-size: 13px;color: #b8b8b8;">查看全部订单  〉</van-col>
				</van-row>
			</div>
			<!-- 收货 -->
			<div class="order_content">
				<van-grid :border="false" :column-num="5">
				  <van-grid-item v-for="order in orders">
				    <van-image style="transform: scale(0.5);" :src="order.url" />
					<p>{{order.name}}</p>
				  </van-grid-item>
				</van-grid>
			</div>			
		</div>
		<!-- 我的服务 -->
		<div class="serve">
			<div class="serve_head">我的服务</div>
			<div class="serve_content">
				<van-row type="flex" style="border-bottom: 1px solid #b8b8b8; padding-top: 5%;padding-bottom: 5%;" >
				  <van-col span="6" v-for="serve_o in serves_o">
					  <img :src="serve_o.url" />
				  </van-col>
				</van-row>
				<van-row type="flex" style="border-bottom: 1px solid #b8b8b8; padding-top: 5%;padding-bottom: 5%;" >
				  <van-col span="6" v-for="serve_t in serves_t">
					  <img :src="serve_t.url" />
				  </van-col>
				</van-row>
				<van-row type="flex" style=" padding-top: 5%;padding-bottom: 5%;" >
				  <van-col span="6" v-for="serve_s in serves_s">
					  <img :src="serve_s.url" />
				  </van-col>
				</van-row>
				
			</div>
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
			// 头部钱
			moners:[
				{
					text1:'0',
					text2:'果果币'
				},
				{
					text1:'0',
					text2:'优惠券'
				},
				{
					text1:'¥0.00',
					text2:'余额'
				},
				{
					text1:'0',
					text2:'立减金'
				},
				{
					text1:'0',
					text2:'叠加金'
				},
			],
			// 收货
			orders:[
				{
					url:'../../static/order1.png',
					name:'待付款'
				},
				{
					url:'../../static/order2.png',
					name:'待发货'
				},
				{
					url:'../../static/order3.png',
					name:'已发货'
				},
				{
					url:'../../static/order4.png',
					name:'待评价'
				},
				{
					url:'../../static/order5.png',
					name:'售后'
				},
			],
			// 我的服务
			serves_o:[
				{
					url:'../../static/serve1.png'
				},
				{
					url:'../../static/serve2.png'
				},
				{
					url:'../../static/serve3.png'
				},
				{
					url:'../../static/serve4.png'
				}
			],
			serves_t:[
				{
					url:'../../static/serve5.png'
				},
				{
					url:'../../static/serve6.png'
				},
				{
					url:'../../static/serve7.png'
				},
				{
					url:'../../static/serve8.png'
				},
			],
			serves_s:[
				{
					url:'../../static/serve9.png'
				}
			]
		}
	}
	
}
</script>

<style scoped>
.my{
     background-color: #f6f6f6;
	 padding-bottom: 20%;
}
	/* 头部 */
.my_head{
	background-color: #bc390b;
	padding-bottom: 10%;
	padding-top: 5%;
}
.head_head{
	background-color: red;
	font-size: 16px;
	color: white;
	padding-bottom: 9px;
	margin-top:-3% ;
	position: sticky;
	top: 0;
	z-index: 99;
}
.head_head img{
	transform: scale(0.4);
	border-radius: 50%;
	/* margin-bottom: -32px; */
	margin-right: -21px;
	margin-left: -6%;
	margin-bottom: -31px;
	margin-top: -9px;
}
/* 头部钱 */
.head_money{
	background-color: white;
	border-radius: 5px;
	width: 90%;
	margin-left: 5%;
	font-size: 12px;
	color: #363636;
	margin-top: -8%;
	padding-top: 1%;
	padding-bottom: 1%;
}
/* 我的订单 */
.order{
	width: 90%;
	margin-left: 5%;
	text-align: center;
	background-color: white;
	height: 100px;
	border-radius: 5px;
	font-size: 14px;
	margin-top: 5%;
	padding-bottom: 16%;
}
.order_head{
	padding-top: 2%;
	border-bottom: 1px solid #b8b8b8;
	padding-bottom: 3%;
}
/* 收货 */
.order_content {
	font-size:13px; 
}
/* 我的服务 */
.serve{
	width: 90%;
	margin-left: 5%;
	background-color: white;
	margin-top: 5%;
	border-radius: 5px;
}
/* 我的服务头部 */
.serve_head{
	font-size: 14px;
	padding-bottom: 3%;
	padding-top: 3%;
	padding-left: 3%;
	border-bottom: 1px solid #b8b8b8;
}
.serve_content{
	width: 95%;
	margin-left: 2.5%;
}
.serve_content img{
	width: 73px;
	height: 73px;
}

</style>
