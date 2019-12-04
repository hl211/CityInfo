<template name="shouye">
	<view>
		<scroll-view scroll-y>
			<view class="cu-bar">
				这里是状态栏
			</view>
			
			<!-- 滚动 -->
			<homeSwiper></homeSwiper>
			<!-- 欄目信息 -->
			<homeColumn></homeColumn>
			
			<view class="cu-bar">
				<image src="/static/logo.png"></image>
			</view>
			<view class="cu-bar">
				<image src="/static/logo.png"></image>
			</view>
			<view class="cu-bar">
				<image src="/static/logo.png"></image>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	import homeSwiper from './homeSwiper.vue'
	import homeColumn from './homeColumn.vue'
	
	export default {
		data() {
			return {
				cardCur: 0,
				title: "hello",
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
				dotStyle: false
			};
		},
		onLoad() {

		},
		methods: {

		},
		components:{
			homeSwiper,
			homeColumn
		}
	}
</script>

<style>


</style>
