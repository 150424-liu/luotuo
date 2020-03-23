<template>
	<div class="date">
		<!-- 头部 -->
		<div class="date_head">
			<van-row>
			  <van-col span="16">
				<router-link to="/sort">
					<img src="../../static/左箭头.png"  />
				</router-link>
				<span>商品列表详情</span>  
			  </van-col>
			  <van-col span="7"></van-col>
			  <van-col span="1"></van-col>
			</van-row>
		</div>
		<!-- 轮播 -->
		<div class="date_focus">
			<van-swipe  :autoplay="3000" indicator-color="white">
			  <van-swipe-item v-for="focu in focus">
				  <img :src="focu" />
			  </van-swipe-item>
			</van-swipe>
		</div>
		<!-- 商品详情 -->
		<div class="date_content">
			<p class='content_head'>{{content.name}}</p>
			<p class="content_con">{{content.intro}}</p>
			<p class="content_price">¥{{content.price}}</p>
			<p  style="margin-left: 50%;">购买数量<van-stepper v-model="value" /></p>
			
		</div>
		<p>商品详情</p>
		<div v-html="content.content"></div>
		<div>
		<!-- 立即购买 -->
			<van-goods-action>
			  <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
			  <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcons(shopping.uid)" />
			  <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton(content.id)" />
			  <van-goods-action-button type="danger" text="立即购买" @click="onClickButtons" />
			</van-goods-action>
		</div>


	</div>
</template>

<script>
	export default{
		data(){
			return{
				focus:[]		,//轮播
				content:[],		//商品详情
				shopping:[]
				
			}
		},
		methods:{
		// 购物车添加-S
			// onClickButton(id){
			// 	// this.$toast('√添加成功');
			// 	var _this=this;
			// 	_this.id=id
			// 	console.log(id)
			// 	// 购物车列表
			// 	this.$axios.get('https://dawn.changxvan.top/api/Shopping/index',{
			// 		params:{
			// 			user_id:id
			// 		}
			// 	})
			// 	.then(function(res){
			// 		console.log(res.data.cart)
			// 		_this.shopping=res.data.cart
			// 	})
				
			// },
			onClickButton(id){
				// this.$toast('√添加成功');
				var _this=this;
				_this.id=id
				console.log(id)
				// 购物车列表
				this.$router.push({
					path:"shopping",			//要跳转的页面
					query:{
						kee:id	,//传递的搜索框输入的参数
						num:this.value
					}
				})
				
			},
		// 购物车添加-E
			// 立即购买
			onClickButtons(){
				this.$router.push({path:"shopping_account"})
			},
			// 购物车跳转
			onClickIcons(id){
				// let _this=this;
				// _this.id=id,
				// // _this.b=b,
				// // _this.c=c,
				// console.log(id)
				// this.$router.push({
				// 	path:"shopping",
				// 	})
			}
		},
		created(){
			let _this=this;
			let api='https://dawn.changxvan.top/api/product/index'
			let kee_val=this.$route.query.kee
			let api_data=this.$qs.stringify({
				pro_id:kee_val,
			})
		
	// 商品详情
	this.$axios.post(api,api_data).then(rese=>{
		console.log(rese.data.pro)
		_this.focus=rese.data.pro.img_arr
		_this.content=rese.data.pro
	})
	//加入购物车
	// this.$axios({
	// 	method:'get',
	// 	url:"https://dawn.changxvan.top/api/Shopping/index",
	// 	params:{
	// 		user_id:7
	// 	},
	// })
	// 	.then(function(res){
	// 		console.log(res.data)
			
	// 	})
	}
	}

</script>

<style scoped>
/* 头部 */
	.date_head{
		background-color: red;
		font-size: 16px;
		color: white;
		/* padding: 3%; */
		padding-top: 3%;
		padding-bottom: 3%;
		width: 100%;
		position: sticky;
		top:0px;
		z-index: 99;
	}
	.date_head img{
		/* transform: scale(0.4); */
		border-radius: 50%;
		margin-bottom: -1%;
		width: 20px;
		height: 20px;
	}
	/* 轮播 */
	.date_focus img{
		width: 100%;
		/* height: 150px; */
	}
	/* 商品详情*/
	.date_content{
		font-size: 14px;
		border-bottom: 1px solid #7D7E80;
	}
	.date_content p{
		padding-left: 3%;
	}
	.content_head{
		font-weight: bold;
	}
	.content_con{
		font-size: 10px;
		color: #767676;
	}
	.content_price{
		font-size:22px;
		color: red;
		font-weight: bold;
	}
	/* 商品 */
	
</style>

