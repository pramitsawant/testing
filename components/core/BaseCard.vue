<template>
	<v-card :elevation="elevation" v-bind="$attrs" v-on="$listeners">
		<slot />
	</v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
	name: 'BaseCard',
	props: {
		elevation: {
			type: Number,
			default: 0,
			required: false,
		},
	},
})
</script>

<style></style>
