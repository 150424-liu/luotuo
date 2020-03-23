<template>
	<div class="site">
		<!-- 头部 -->
		<div class="site_head">
			<van-row>
			  <van-col span="10">
				<router-link to="/shopping_account">
					<img src="../../static/左箭头.png"  />
				</router-link>
				<span>收货地址</span>  
			  </van-col>
			  <van-col span="7"></van-col>
			  <van-col span="7"></van-col>
			</van-row>
		</div>
		<van-address-list
		  v-model="chosenAddressId"
		  :list="list"
		  :disabled-list="disabledList"
		  disabled-text="以下地址超出配送范围"
		  @add="onAdd"
		  @edit="onEdit"
		/>
	</div>
</template>

<script>
export default{
	data(){
		return{
			chosenAddressId: '1',
			list:[]
		}
	},
	methods:{
		// 新增地址跳转
		onAdd(){
			this.$router.push({path:'shopping_account_site_add'})
		},
		// 编辑地址
		onEdit(content) {
			this.id=content.id,
			// alert("删除成功，请刷新查看")
			this.$router.push({
				path:"shopping_account_site",
				query:{
					id:this.id
				},
			})
			this.$router.go(0);
		}
	},
	created(){
		// 地址列表
		let _this=this
		this.$axios({
			methods:'get',
			url:'https://dawn.changxvan.top/api/Address/index',
			params:{
				user_id:7
			}
		})
		.then(function(res){
			// console.log(res.data)
			_this.list=res.data.adds
		})
		// 新增地址接收参数
		// let _this =this;
		let name_val=this.$route.query.name
		let tel_val=this.$route.query.tel
		let dz_val=this.$route.query.dz
		// console.log(name_val)
		// console.log(tel_val)
		let app_data=this.$qs.stringify({
			user_id:7,
			receiver:name_val,
			tel:tel_val,
			adds:dz_val,
			code:1,
			sheng:1,
			city:1,
			quyu:1
		})
		this.$axios.post("https://dawn.changxvan.top/api/Address/add_adds",app_data)
		.then(res=>{
			// console.log(res.data)
			// this.list=res.data.add_arr
		})
		// 删除地址
		let id_val=this.$route.query.id
		// console.log(id_val)
		let id_data=this.$qs.stringify({
			user_id:7,
			id:id_val
		})
		this.$axios.post("https://dawn.changxvan.top/api/Address/my_del",id_data)
		.then(res=>{
			console.log(res)
		})
	}
}
</script>

<style scoped>
	/* 头部 */
.site_head{
	background-color: red;
	font-size: 16px;
	color: white;
	padding: 3%;
}
.site_head img{
	border-radius: 50%;
	margin-bottom: -1%;
	width: 20px;
	height: 20px;
}

</style>
