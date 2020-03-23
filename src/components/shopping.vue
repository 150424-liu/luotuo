<template>
	<div class="shopping">
		<!-- 购物车头部 -->
		<div class="shopping_head">
			<van-row>
			  <van-col span="16">
				<router-link to="/">
					<img src="../../static/my_index.png"  />
				</router-link>
				<span>骆驼官方商城</span>  
			  </van-col>
			  <van-col span="4"></van-col>
			  <van-col span="4"></van-col>
			</van-row>
		</div>
		<!-- 头部说明 -->
		<div class="head_state">
			购物车
		</div>
		<div class="shopping_shopping">
			<van-card  v-for="pris in pri"
			  :num="pris.num"
			  :price="pris.price"
			  desc=""  
			  :title="pris.pro_name"
			  :thumb="pris.photo_x"
			>
			  <!-- <div slot="tags">
			    <van-tag plain type="danger">标签</van-tag>
			    <van-tag plain type="danger">标签</van-tag>
			  </div> -->
			  <div slot="footer">
			    <van-button size="mini">按钮</van-button>
			    <van-button size="mini" @click="dele(pris.id)">移出购物车</van-button>
			  </div>
			</van-card>
			
		</div>
		<!-- 底部提交订单 -->
		<div class="footer">
			<van-submit-bar
			  :price="17400"
			  button-text="提交订单"
			  @submit="onSubmit"
			>
			  <van-checkbox v-model="checked">全选</van-checkbox>
			  <span slot="tip">
			    你的收货地址不支持同城送, <span>修改地址</span>
			  </span>
			</van-submit-bar>
		</div>
		
		<footers></footers>		<!-- 底部导航 -->
	</div>
</template>

<script>
	// 底部导航注册
	import footers from './footers.vue'
export default{
	inject:['reload'],                                 //注入App里的reload方法
	components:{footers},
	data(){
		return{
			// 添加购物车
			pri:[]
		}
	},
	
	methods:{
		// 删除购物车
		dele(id){
			var _this=this;
			_this.id=id
			this.$axios.get("https://dawn.changxvan.top/api/Shopping/delete",{
				params:{
					cart_id:id
				}
			})
			.then(function(res){
				console.log(res)
			})
			this.reload();
		},
		// 提交订单
		onSubmit(){
			this.$router.push({path:'/shopping_account'})
		}
	},
	// 商品信息接口
	created(){
		// 购物车商品列表-S
		let url='https://dawn.changxvan.top/api/Shopping/index';
		let url_data=this.$qs.stringify({
			user_id:7
		})
		this.$axios.post(url,url_data).then(rese=>{
			this.pri=rese.data.cart
			console.log(rese.data)
			// _this.content=rese.data.pro
		})
		// 购物车商品列表-E
	// 加入购物车-S
		var kee_val=this.$route.query.kee
		var num=this.$route.query.num
		console.log(kee_val)
		let kdata=this.$qs.stringify({
			// keyword:后台需要的参数
			uid:7,
			pid:kee_val,
			num:num
		})
		this.$axios.post('https://dawn.changxvan.top/api/Shopping/add',kdata)
		.then((res)=>{
			console.log(res.data)
			// _this.pri=res.data.cart
		})
		// 加入购物车-E
	}
}
</script>

<style scoped>
/* 头部 */
	.shopping_head{
		background-color: red;
		font-size: 16px;
		color: white;
		padding-bottom: 9px;
		margin-top:-3% ;
		position: sticky;
		top: 0;
		z-index: 99;
	}
	.shopping_head img{
		transform: scale(0.4);
		border-radius: 50%;
		/* margin-bottom: -32px; */
		margin-right: -21px;
		margin-left: -6%;
		margin-bottom: -31px;
		margin-top: -9px;
	}
/* 头部说明 */
	.head_state{
		background-color: #fafafa;
		color: #313131;
		font-size: 16px;
		text-align: center;
		padding: 5%;
		border-bottom: 1px solid #cacaca;
	}
/* 提交订单 */
	.footer{
		font-size: 14px;
	}
	.van-submit-bar{
		margin-bottom: 51px;
		font-size: 14px;
	}
</style>
