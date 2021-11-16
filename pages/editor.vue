<template>
	<v-main>
		<v-container fluid>
			<DesignHeader />
			<Canvas />
			<AddFab />
			<EditOptions />
		</v-container>
	</v-main>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import DesignHeader from '~/components/layout/design-header.vue'
import Canvas from '~/components/design/canvas.vue'
import AddFab from '~/components/design/add-fab.vue'
import EditOptions from '~/components/design/edit-options.vue'

export default defineComponent({
	name: 'editor-layout',
	layout: 'editor',
	components: { DesignHeader, Canvas, AddFab, EditOptions },
	head: {},
	setup(props, context) {
		return {}
	},
})
</script>
