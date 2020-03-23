<template>
	<div class="add">
		<!-- 头部 -->
		<div class="add_head">
			<van-row>
			  <van-col span="10">
				<router-link to="/shopping_account_site">
					<img src="../../static/左箭头.png"  />
				</router-link>
				<span>新增地址</span>  
			  </van-col>
			  <van-col span="7"></van-col>
			  <van-col span="7"></van-col>
			</van-row>
		</div>
		<!-- 新增地址内容 -->
		<van-address-edit
		  :area-list="areaList"
		  show-postal
		  show-delete
		  show-set-default
		  show-search-result
		  :search-result="searchResult"
		  :area-columns-placeholder="['请选择', '请选择', '请选择']"
		  @save="onSave"
		  @delete="onDelete"
		  @change-detail="onChangeDetail"
		/>
	</div>
</template>

<script>
	import areaList from "../assets/area.js";
	import { Toast } from "vant";
	export default{
		data(){
			return{
				areaList,
				searchResult:[1,1,1,1],
				list:[]
			}
		},
		methods:{
			onChangeDetail(val) {
			  if (val) {
			    this.searchResult = [{
			      name: '黄龙万科中心',
			      address: '杭州市西湖区',
				  name: '新乡市红旗区',
				  address: '大喇叭中心',
			    }];
			  } else {
			    this.searchResult = [];
			  }
			},
			// 新增地址-S
			onSave(content){
				// this.list.push(content)
				this.$router.go(0);
				this.$router.push({
					path:"shopping_account_site",
					query:{
						name:content.name,
						tel:content.tel,
						dz:content.addressDetail
					},
					
				})
				
				
			}
		}
	}
</script>

<style scoped>
	/* 头部 */
.add_head{
	background-color: red;
	font-size: 16px;
	color: white;
	padding: 3%;
}
.add_head img{
	border-radius: 50%;
	margin-bottom: -1%;
	width: 20px;
	height: 20px;
}
</style>
