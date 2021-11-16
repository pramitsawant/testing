<template>
	<v-bottom-navigation dense fixed style="overflow-x: auto">
		<template v-if="layerType == LayerTypes.TEXT">
			<v-btn class="mx-2" icon dark small color="primary">
				<span>Edit</span>
				<v-icon dark> mdi-keyboard-outline </v-icon>
			</v-btn>
			<v-btn class="mx-2" icon dark small color="primary">
				<span>Delete</span>
				<v-icon dark> mdi-delete </v-icon>
			</v-btn>
			<v-btn class="mx-2" icon dark small color="primary">
				<span>Duplicate</span>
				<v-icon dark> mdi-content-duplicate </v-icon>
			</v-btn>
			<v-btn class="mx-2" icon dark small color="primary">
				<span>Color</span>
				<v-icon dark> mdi-square-rounded </v-icon>
			</v-btn>
			<v-btn class="mx-2" icon dark small color="primary">
				<span>Font</span>
				<v-icon dark> mdi-square-rounded </v-icon>
			</v-btn>
			<v-btn class="mx-2" icon dark small color="primary">
				<span>Font Size</span>
				<v-icon dark> mdi-square-rounded </v-icon>
			</v-btn>
			<v-btn class="mx-2" icon dark small color="primary">
				<span>Format</span>
				<v-icon dark> mdi-square-rounded </v-icon>
			</v-btn>
			<v-btn class="mx-2" icon dark small color="primary">
				<span>Spacing</span>
				<v-icon dark> mdi-square-rounded </v-icon>
			</v-btn>
			<v-btn class="mx-2" icon dark small color="primary">
				<span>Opacity</span>
				<v-icon dark> mdi-square-rounded </v-icon>
			</v-btn>
			<v-btn class="mx-2" icon dark small color="primary">
				<span>Lock</span>
				<v-icon dark> mdi-square-rounded </v-icon>
			</v-btn>
		</template>
		<template v-if="layerType == LayerTypes.IMAGE">
			<v-btn class="mx-2" icon dark small color="primary">
				<span>Replace</span>
				<v-icon dark> mdi-keyboard-outline </v-icon>
			</v-btn>
			<v-btn class="mx-2" icon dark small color="primary">
				<span>Delete</span>
				<v-icon dark> mdi-delete </v-icon>
			</v-btn>
			<v-btn class="mx-2" icon dark small color="primary">
				<span>Duplicate</span>
				<v-icon dark> mdi-content-duplicate </v-icon>
			</v-btn>
			<v-btn class="mx-2" icon dark small color="primary">
				<span>Filter</span>
				<v-icon dark> mdi-square-rounded </v-icon>
			</v-btn>
			<v-btn class="mx-2" icon dark small color="primary">
				<span>Adjust</span>
				<v-icon dark> mdi-square-rounded </v-icon>
			</v-btn>
			<v-btn class="mx-2" icon dark small color="primary">
				<span>Flip</span>
				<v-icon dark> mdi-square-rounded </v-icon>
			</v-btn>
			<v-btn class="mx-2" icon dark small color="primary">
				<span>Opacity</span>
				<v-icon dark> mdi-square-rounded </v-icon>
			</v-btn>
			<v-btn class="mx-2" icon dark small color="primary">
				<span>Lock</span>
				<v-icon dark> mdi-square-rounded </v-icon>
			</v-btn>
		</template>
		<template v-if="layerType == LayerTypes.SVG">
			<v-btn class="mx-2" icon dark small color="primary">
				<span>Replace</span>
				<v-icon dark> mdi-keyboard-outline </v-icon>
			</v-btn>
			<v-btn class="mx-2" icon dark small color="primary">
				<span>Delete</span>
				<v-icon dark> mdi-delete </v-icon>
			</v-btn>
			<v-btn class="mx-2" icon dark small color="primary">
				<span>Color</span>
				<v-icon dark> mdi-square-rounded </v-icon>
			</v-btn>
			<v-btn class="mx-2" icon dark small color="primary">
				<span>Duplicate</span>
				<v-icon dark> mdi-content-duplicate </v-icon>
			</v-btn>
			<v-btn class="mx-2" icon dark small color="primary">
				<span>Filter</span>
				<v-icon dark> mdi-square-rounded </v-icon>
			</v-btn>
			<v-btn class="mx-2" icon dark small color="primary">
				<span>Adjust</span>
				<v-icon dark> mdi-square-rounded </v-icon>
			</v-btn>
			<v-btn class="mx-2" icon dark small color="primary">
				<span>Flip</span>
				<v-icon dark> mdi-square-rounded </v-icon>
			</v-btn>
			<v-btn class="mx-2" icon dark small color="primary">
				<span>Opacity</span>
				<v-icon dark> mdi-square-rounded </v-icon>
			</v-btn>
			<v-btn class="mx-2" icon dark small color="primary">
				<span>Lock</span>
				<v-icon dark> mdi-square-rounded </v-icon>
			</v-btn>
		</template>
	</v-bottom-navigation>
</template>
<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import { LayerTypes } from '~/types/enums'

export default defineComponent({
	name: 'EditOption',
	props: {},
	setup() {
		const layerType = LayerTypes.SVG
		return { LayerTypes, layerType }
	},
})
</script>
