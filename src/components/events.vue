<template lang="html">
	<div class="events">
		<slot name='2'></slot>
		<div>{{age}}</div>
		<button type="button" name="button" @click="$emit('msg')">test</button>
		<slot name='1'></slot>

	</div>


</template>

<script type="text/javascript">
	export default {
		 props:['age'],
	}
</script>

<style lang='css'>
	
</style>