<template>
	<div class="pay">
		<!-- 头部 -->
		<div class="pay_head">
			<van-row>
			  <van-col span="16">
				<router-link to="/">
					<img src="../../static/my_index.png"  />
				</router-link>
				<span>支付</span>  
			  </van-col>
			  <van-col span="4"></van-col>
			  <van-col span="4"></van-col>
			</van-row>
		</div>
		<!-- 支付 -->
		<!-- 订单付款 -->
		<div class="pays">
			<p class="pay_pay">订单付款</p>
			<p class="money">￥668.00</p>
		</div>
		<!-- 收款方 -->
		<div class="gather">
			<span class="gather_1">收款方</span>
			<p class="gather_com" >骆驼商品有限公司</p>
		</div>
		<!-- 支付按钮 -->
		<van-button style="margin-top: 27px;" type="primary" to="index" size="large">立即支付</van-button>
		<!-- 底部说明 -->
		<p class="bootom">支付安全由中国人民财产保险股份有限公司承包</p>
	</div>
</template>

<script>
</script>

<style scoped>
/* 头部 */
.pay_head{
	background-color: red;
	font-size: 16px;
	color: white;
	padding-bottom: 9px;
	margin-top:-3% ;
}
.pay_head img{
	transform: scale(0.4);
	border-radius: 50%;
	margin-bottom: -32px;
	margin-right: -21px;
	margin-left: -6%;
}
/* 支付 */
.pays{
	width: 100%;
	background-color: white;
	border-bottom: 1px solid  #767676;
	text-align: center;
}
.pay_pay{
	/* margin-left: 140px; */
	font-size: 16px;
	font-weight: bold;
	padding-top: 10px;
}
.money{
	font-size:30px;
	font-weight: bold;
	/* margin-left: 108px; */
	padding-top: 10px;
	padding-bottom: 10px;
}
/* 收款方 */
.gather{
	padding: 10px;
	background-color: white;
}
.gather_1{
	font-size: 14px;
	color: #B3B3B3;
}
.gather_com{
	/* display: flex; */
	/* right: 5%; */
	/* margin-left: 70%; */
}
/* 底部说明 */
.bootom{
	font-size: 12px;
	color: #666666;
	text-align: center;
	margin-top: 90%;
}	
</style>
