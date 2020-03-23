<template>
	<div class="seek">
		<!-- 头部 -->
		<div class="seek_head">
			<van-row>
			  <van-col span="16">
				<router-link to="/">
					<img src="../../static/my_index.png"  />
				</router-link>
				<span>搜索结果</span>  
			  </van-col>
			  <van-col span="4"></van-col>
			  <van-col span="4"></van-col>
			</van-row>
		</div>
		<!-- 内容 -->
		<div class="flex">
			<van-grid :border="false" :column-num="2" :gutter="10">
			  <van-grid-item  class="content" v-for="com in comm" @click="date(com.name)">
			    <img :src="'https://dawn.changxvan.top/Data/'+com.photo_d" />
				<p>{{com.name}}</p>
				<p style="font-size: 10px;color: #8C939D; margin-top: -5%;">{{com.intro}}</p>
				<p style="color: red;font-size: 16px;">¥{{com.price}}</p>
				<!-- <input style="color: red;font-size: 16px; border: 0px;" :value="com.price" /> -->
				<!-- <div v-html="com.content"></div> -->
			  </van-grid-item>
			</van-grid>
		</div>
		<!-- <button @click="aa()">111</button> -->
	</div>
</template>

<script>
	export default{
		data(){
			return{
			
				comm:[],
				// a:[]
			}
		},
	methods:{
		// 搜索框传参接口
		date(id){
			var _this=this;
			_this.id = id
			console.log(id)
			this.$router.push({
				path:"indexs_seek_deta",			//要跳转的页面
				query:{
					kee:id	,//传递的搜索框输入的参数
				}
			})
		}
	},
		mounted(){
			// if(a==0){
			// 	alert("111")
			// }
		},
		created(){
			let _this=this
			// let a=""
			// 接收参数
			var k_val=this.$route.query.k;
			// 参数数据处理
			let kdata=this.$qs.stringify({
				// keyword:后台需要的参数
				keyword:k_val
			})
			this.$axios.post('https://dawn.changxvan.top/api/search/get_product',kdata)
			// 请求成功后
			.then((res)=>{
				// alert("阿打算打算的")
				console.log(res.data)	//打印获取的数据
				this.comm=res.data.pro	//数据赋于数组
				// 没有搜索结果弹出
				let a=res.data.msg
				console.log(a)
				if(a==0){
					alert(res.data.err)
					this.$router.push({path:"/"})
				}
			})
			//请求失败后
			// .catch((err)=>{
			// 	this.a=err
			// });
		}
		
	}
</script>

<style scoped>
/* 头部 */
.seek_head{
	background-color: red;
	font-size: 16px;
	color: white;
	padding-bottom: 9px;
	margin-top:-3% ;
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 99;
}
.seek_head img{
	transform: scale(0.4);
	border-radius: 50%;
	margin-bottom: -32px;
	margin-right: -21px;
	margin-left: -6%;
}
/* 内容 */
.flex{
	width: 80%;
	margin-left: 10%;
	padding-top: 5%;
	margin-top: 15%;
	padding-bottom: 5%;
}
.content{
	border: 1px solid yellow;
	padding: 3%;
	font-size: 13px;
}
.content img{
	width: 50%;
}
</style>
