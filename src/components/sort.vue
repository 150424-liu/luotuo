<template>
	<div class="sort">
		<!-- 头部 -->
		<div class="sort_head">
			<van-row>
			  <van-col span="16">
				<router-link to="/">
					<img src="../../static/my_index.png"  />
				</router-link>
				<span>商品分类</span>  
			  </van-col>
			  <van-col span="4"></van-col>
			  <van-col span="4"></van-col>
			</van-row>
		</div>
		<!-- 菜单 -->
		<div class="sort_content">
		  <el-tabs :tab-position="tabPosition"style="height: 200px;">
			<!-- 一级导航 -->
		    <el-tab-pane label="手机">
			<!-- 二级导航 -->
				<van-grid :border="false" :column-num="3">
				  <van-grid-item v-for=" phones in phone" @click="date(phones.id)" >
				    <van-image :src="phones.bz_1" />
					<p>{{phones.name}}</p>
				  </van-grid-item>
				</van-grid>
			</el-tab-pane>
			<!-- 一级导航 -->
			<el-tab-pane label="笔记本">
			<!-- 二级导航 -->
				<van-grid :border="false" :column-num="3">
				  <van-grid-item v-for=" phones in books" @click="date(phones.id)">
				    <van-image :src="phones.bz_1" />
					<p>{{phones.name}}</p>
				  </van-grid-item>
				</van-grid>
			</el-tab-pane>
			<!-- 一级导航 -->
			<el-tab-pane label="智能硬件">
			<!-- 二级导航 -->
				<van-grid :border="false" :column-num="3">
				  <van-grid-item v-for="phones in hars"@click="date(phones.id)">
				    <van-image :src="phones.bz_1" />
					<p>{{phones.name}}</p>
				  </van-grid-item>
				</van-grid>
			</el-tab-pane>
			<!-- 一级导航 -->
			<el-tab-pane label="周边配件">
			<!-- 二级导航 -->
				<van-grid :border="false" :column-num="3">
				  <van-grid-item @click="date(phones.id)" v-for=" phones in acc">
				    <van-image :src="phones.bz_1" />
					<p>{{phones.name}}</p>
				  </van-grid-item>
				</van-grid>
			</el-tab-pane>
		  </el-tabs>
		</div>
		
		<!-- test -->
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
			tabPosition: 'left',
		// 一级目录
			list:[],
		// 二级目录
			// 手机
			phone:[],
			// 笔记本
			books:[],
			//硬件
			hars:[],
			//配件
			acc:[]
			
		}
	},
	
	methods: {
		date(id){
			var _this=this;
			_this.id=id
			console.log(id)
			this.$router.push({
				path:"/sort_date",
				query:{
					id:id,
				}
				})
		}
	},
	// 一级目录接口请求
	created(){
		var _this=this
		this.$axios({
			methods:'get',
			url:'https://dawn.changxvan.top/api/Category/index'
		})
		.then(function(res){
			// console.log(res)
			_this.list=res.data.list;
		})
	// 二级接口多参数请求
		let api='https://dawn.changxvan.top/api/Category/getcat'
		let api_data=this.$qs.stringify({
			cat_id:2,
		})
		let book_data=this.$qs.stringify({
			cat_id:3,
		})
		let har_data=this.$qs.stringify({
			cat_id:4,
		})
		let acc_data=this.$qs.stringify({
			cat_id:12,
		})
		// 发送请求
		this.$axios.post(api,api_data).then(rese=>{
			// console.log(rese.data)
			_this.phone=rese.data.catList
		})
		this.$axios.post(api,book_data).then(rese=>{
			console.log(rese.data)
			_this.books=rese.data.catList
		})
		this.$axios.post(api,har_data).then(rese=>{
			// console.log(rese.data)
			_this.hars=rese.data.catList
		})
		this.$axios.post(api,acc_data).then(rese=>{
			// console.log(rese.data)
			_this.acc=rese.data.catList
		})
	// 商品详情接口
		
	}
	
}
</script>

<style scoped>
/* 头部 */
	.sort_head{
		background-color: red;
		font-size: 16px;
		color: white;
		padding-bottom: 9px;
		margin-top:-3% ;
		position: sticky;
		top: 0;
		z-index: 99;
	}
	.sort_head img{
		transform: scale(0.4);
		border-radius: 50%;
		/* margin-bottom: -32px; */
		margin-right: -21px;
		margin-left: -6%;
		margin-bottom: -31px;
		margin-top: -9px;
	}
	/* 菜单 */
	.sort_content{
		font-size: 12px;
		text-align: center;
		margin-top: 3%;
	}
</style>
