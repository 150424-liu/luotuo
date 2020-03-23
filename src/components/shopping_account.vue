<template>
	<div class="account">
		<!-- 头部 -->
		<div class="account_head">
			<van-row>
			  <van-col span="10">
				<router-link to="/shopping">
					<img src="../../static/左箭头.png"  />
				</router-link>
				<span>订单结算</span>  
			  </van-col>
			  <van-col span="7"></van-col>
			  <van-col span="7"></van-col>
			</van-row>
		</div>
		<!-- 添加收货地址 -->
		<router-link to="/shopping_account_site" >
		<div class="head_site">
			<van-row>
			  <van-col span="10">
				<span style="color: #000000;">在这里添加收货地址</span> 
			  </van-col>
			  <van-col span="12"></van-col>
			  <van-col span="2">
				  <img src="../../static/右箭头 (1).png"  />
			  </van-col>
			</van-row>
		</div>
		</router-link>
		<!-- 商品信息 -->
		<div class="site_shopping">
			<van-card
			  :price="pri.price"
			  :desc="pri.intro"  
			  :title="pri.name"
			  :thumb="pri.photo_d"
			>
			  <div slot="tags">
			    <van-tag plain type="danger">原价{{pri.sort}}</van-tag>
			    <!-- <van-tag plain type="danger">标签</van-tag> -->
			  </div>
			</van-card>
			<div class="site_count" >
				<van-row>
				  <van-col span="10">
					<span>购买数量</span>  
				  </van-col>
				  <van-col span="7"></van-col>
				  <van-col span="7">
					  <van-stepper v-model="value" />
				  </van-col>
				</van-row>
			</div>
			<!-- 付款 -->
			<div class="footer">
				<van-submit-bar
				  :price="17400"
				  button-text="确认支付"
				  @submit="onSubmit"
				/>
			</div>
		</div>
		<!-- <img src="../../static/QQ图片20191118150425.jpg" /> -->
	</div>
</template>

<script>
export default{
	data(){
		return{
			pri:[]
		}
	},
	// 支付
	methods:{
		onSubmit(){
			this.$router.push({path:"pay"})
		}
	},
	// 商品信息接口
	created(){
		let _this=this;
		let url='https://dawn.changxvan.top/api/product/index';
		let url_data=this.$qs.stringify({
			pro_id:279,
		})
		this.$axios.post(url,url_data).then(rese=>{
			console.log(rese.data.pro)
			_this.pri=rese.data.pro
			// _this.content=rese.data.pro
		})
	}
}
</script>

<style scoped>
	/* 头部 */
		.account_head{
			background-color: red;
			font-size: 16px;
			color: white;
			padding: 3%;
		}
		.account_head img{
			border-radius: 50%;
			margin-bottom: -1%;
			width: 20px;
			height: 20px;
		}
	/* 添加收货地址 */
		.head_site{
			padding: 3%;
			font-size: 14px;
			color:#767676 ;
			border-bottom: 1px solid red;
			color: black;
		}
		.head_site img{
			width: 30px;
			height: 30px;
			margin-top: -15%;
		}
		.site_count{
			font-size: 14px;
			padding: 3%;
		}
		/* 付款 */
</style>
