<template>
	<!-- 底部导航 -->
	<div class="footers">
		<van-tabbar route v-model="active"   >
		  <van-tabbar-item replace :to="ico.url"   v-for="ico in icon" >
		    <img
		      slot="icon"
		      slot-scope="props"
		      :src="props.active ? ico.active : ico.normal"
		    >
			<span>{{ico.name}}</span>
		  </van-tabbar-item>
		</van-tabbar>
	</div>
</template>
<!-- <img src="../../static/首页-黄色.png" /> -->

<script>
	export default {
	  data() {
	    return {
	      active:this ,
	      icon: [
			  {
				url:"/",
				name:'首页',
				normal: '../../static/首页-黄色.png',
				active: '../../static/首页-紫色.png'
			},
			{
				url:"/sort",
				name:'分类',
				normal: '../../static/分类-黄色.png',
				active: '../../static/分类-紫色.png'
			},
			{
				url:'/shopping',
				name:'购物车',
				normal: '../../static/购物车黄色.png',
				active: '../../static/购物车紫色.png'
			},
			{
				url:'/my',
				name:'我的',
				normal: '../../static/我的黄色.png',
				active: '../../static/我的 紫色.png'
			}
		  ]
	    }
	  }
	}
</script>

<style>
/* 	.footers{
		border: 1px solid beige;
		position: absolute;
		bottom: 20px;
		display: flex;
		flex-wrap: wrap;
	} */
</style>
