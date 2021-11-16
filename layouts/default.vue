<template>
	<v-app>
		<v-main>
			<v-container fluid>
				<DesignHeader />
				<Nuxt />
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import { defineComponent, useRoute, useRouter } from '@nuxtjs/composition-api'

import DesignHeader from '~/components/layout/design-header.vue'

export default defineComponent({
	name: 'Offers',
	components: {
		DesignHeader,
	},
	head: {},
	setup(props, context) {
		const router = useRouter()
		const { value: route } = useRoute()

		return {}
	},
})
</script>
