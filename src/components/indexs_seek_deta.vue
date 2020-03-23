<template>
	<div class="deta">
		<!-- 头部 -->
		<div class="deta_head">
			<van-row>
			  <van-col span="16">
				<router-link to="/">
					<img src="../../static/my_index.png"  />
				</router-link>
				<span>详情</span>  
			  </van-col>
			  <van-col span="4"></van-col>
			  <van-col span="4"></van-col>
			</van-row>
		</div>
		<!-- 详情页面 -->
		<!-- <p>商品详情</p> -->
		<!-- <div>{{cos.name}}</div> -->
		<!-- <div v-html="cos.content"> -->
			<div class="flex">
				<div class="flex_deta">商品详情</div>
				<div v-for="com in cos">
					<div v-html="com.content"></div>
				</div>
			
			</div>
		<!-- </div> -->
	</div>
</template>

<script>
	export default{
		data(){
			return{
				cos:[]
			}
		},
		created(){
			let _this=this
			var kee_val=this.$route.query.kee
			console.log(kee_val)
			let kdata=this.$qs.stringify({
				// keyword:后台需要的参数
				keyword:kee_val
			})
			this.$axios.post('https://dawn.changxvan.top/api/search/get_product',kdata)
			.then((res)=>{
				console.log(res.data.pro)
				this.cos=res.data.pro
				console.log(this.cos)
			})
		}
	}
</script>

<style scoped>
/* 头部 */
.deta_head{
	background-color: red;
	font-size: 16px;
	color: white;
	padding-bottom: 9px;
	margin-top:-3% ;
}
.deta_head img{
	transform: scale(0.4);
	border-radius: 50%;
	margin-bottom: -32px;
	margin-right: -21px;
	margin-left: -6%;
}
/* 详情 */
.flex {
	text-align: center;
	background-color: #D3DCE6;
	/* width: 100%; */
}
.flex_deta{
	/* color: white; */
	padding-top: 3%;
	padding-bottom: 3%;
}
</style>
