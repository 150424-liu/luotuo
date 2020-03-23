import Vue from 'vue'
import Router from 'vue-router'
import indexs from '@/components/indexs'		//首页引用
import footers from '@/components/footers'		//底部导航引用
import my from '@/components/my'				//我的引用
import sort from '@/components/sort'			//分类引用
import sort_date from '@/components/sort_date'			//分类引用
import date from '@/components/date'	//分类商品详情引用
import shopping from '@/components/shopping'	//购物车引用
import shopping_account from '@/components/shopping_account'	//购物车结算引用
import shopping_account_site from '@/components/shopping_account_site'	//收货地址引用
import shopping_account_site_add from '@/components/shopping_account_site_add'	//新增地址地址引用
import shopping_account_edit from '@/components/shopping_account_edit'	//编辑地址地址引用
import pay from '@/components/pay'	//新增地址地址引用
import indexs_seek from '@/components/indexs_seek'	//首页搜索页面引用
import indexs_seek_deta from '@/components/indexs_seek_deta'	//首页搜索商品详情页面引用

Vue.use(Router)

export default new Router({
  routes: [
	// 首页路由
	{
	  path: '/',
	  name: 'indexs',
	  component: indexs
	},
	// 首页搜索页面路由
	{
	  path: '/indexs_seek',
	  name: 'indexs_seek',
	  component: indexs_seek
	},
	// 首页搜索商品详情页面路由
	{
	  path: '/indexs_seek_deta',
	  name: 'indexs_seek_deta',
	  component: indexs_seek_deta
	},
	// 分类路由
	{
	  path: '/sort',
	  name: 'sort',
	  component: sort
	},
	// 分类商品详情路由
	{
	  path: '/date',
	  name: 'date',
	  component: date
	},
	// 分类列表路由
	{
	  path: '/sort_date',
	  name: 'sort_date',
	  component: sort_date
	},
	// 购物车路由
	{
	  path: '/shopping',
	  name: 'shopping',
	  component: shopping
	},
	// 购物车结算路由
	{
	  path: '/shopping_account',
	  name: 'shopping_account',
	  component: shopping_account
	},
	// 收货地址路由
	{
	  path: '/shopping_account_site',
	  name: 'shopping_account_site',
	  component: shopping_account_site
	},
	// 新增地址路由
	{
	  path: '/shopping_account_site_add',
	  name: 'shopping_account_site_add',
	  component: shopping_account_site_add
	},
	// 编辑地址路由
	{
	  path: '/shopping_account_edit',
	  name: 'shopping_account_edit',
	  component: shopping_account_edit
	},
	// 我的路由
	{
	  path: '/my',
	  name: 'my',
	  component: my
	},
	// 底部导航路由
	{
	  path: '/footers',
	  name: 'footers',
	  component: footers
	},
	// 支付路由
	{
	  path: '/pay',
	  name: 'pay',
	  component:pay
	},
  ]
})
