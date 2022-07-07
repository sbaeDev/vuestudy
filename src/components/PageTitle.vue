<!-- <template>
	<h2>{{ title }}</h2>
</template>

<script>
export default {
	props: {
		title: {
			type: Number,
			default: 123,
		},
	},
};
</script> -->

<template>
	<h2>
		<slot></slot>
	</h2>
</template>
