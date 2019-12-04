<template>
	<view>
		<shouye  v-if="PageCur=='shouye'"></shouye>
		<components v-if="PageCur=='component'"></components>
		<plugin v-if="PageCur=='plugin'"></plugin>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view :class="PageCur=='shouye'?'action text-green':'action text-gray'" @click="NavChange" data-cur="shouye">
				<view class="cuIcon-homefill"></view> 首页
			</view>
			<view :class="PageCur=='component'?'action text-green':'action text-gray'" @click="NavChange" data-cur="component">
				<view class="cuIcon-similar"></view> 好店
			</view>
			<view class="action text-gray add-action" @click="NavChange" data-cur="plugin">
				<button class="cu-btn cuIcon-add bg-green shadow"></button>
				发布
			</view>
			<view :class="PageCur=='component1'?'action text-green':'action text-gray'" @click="NavChange" data-cur="component1">
				<view class="cuIcon-cart">
					<view class="cu-tag badge">99</view>
				</view>
				消息
			</view>
			<view :class="PageCur=='plugin'?'action text-green':'action text-gray'" @click="NavChange" data-cur="plugin">
				<view class="cuIcon-my">
					<view class="cu-tag badge"></view>
				</view>
				我的
			</view>			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'shouye'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
