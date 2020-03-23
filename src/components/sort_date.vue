<template>
	<div class="date">
		<!-- 头部 -->
		<div class="date_head">
			<van-row>
			  <van-col span="17">  
				<router-link to="/sort">
					<img src="../../static/左箭头.png"  />
				</router-link>
				<span>商品列表</span>
			  </van-col>
			  <van-col span="5">
			  </van-col>
			  <van-col span="8"></van-col>
			</van-row>
		</div>
		<!-- 分类列表详情 -->
		<div class="name">{{name.cat_name}}</div>
		<div class="date_content">
			<van-grid :border="false" :column-num="2" :gutter="10">
			  <van-grid-item class="content"  v-for="date in dates" @click="soo(date.id)">
			    <van-image :src="date.photo_x"  />
				<p>{{date.name}}</p>
				<p style="font-size: 10px;color: #8C939D; margin-top: -5%;">{{date.intro}}</p>
				<p style="color: red;font-size: 16px;">¥{{date.price}}</p>
			  </van-grid-item>
			</van-grid>
			<!-- <img :src="date.photo_x" /> -->
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				dates:[],
				name:[]
			}
		},
		methods:{
			soo(id){
				var _this=this;
				_this.id=id
				// console.log(id)
				this.$router.push({
					path:"date",
					query:{
						kee:id
					}
				})
			}
		},
		created(){
			let _this=this;
			// 接受sort传过来的id参数
			var kee_val=this.$route.query.id
			// console.log(kee_val)
			let kdata=this.$qs.stringify({
				// keyword:后台需要的参数
				cat_id:kee_val
			})
			this.$axios.post('https://dawn.changxvan.top/api/Product/lists',kdata)
			.then((res)=>{
				console.log(res.data.pro)
				// 列表详情
				this.dates=res.data.pro
				// 列表类别
				this.name=res.data
			})
	}
	}
	
</script>

<style scoped>
	.date{
	}
/* 详情页面头部 */
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
/* 头部说明 */
.name{
	background-color:#dcdde0 ;
	color: red;
	text-align: center;
	font-size: 16px;
	font-weight: bold;
	padding: 3%;
}
/* 详情内容 */
.date_content{
	width: 90%;
	margin: 5%;
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
