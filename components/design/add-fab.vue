<template>
	<v-fab-transition>
		<v-bottom-sheet inset>
			<template v-slot:activator="{ on, attrs }">
				<v-btn v-bind="attrs" v-on="on" style="z-index: 10; bottom: 60px; right: 10px" color="pink" dark absolute right fab>
					<v-icon>mdi-plus</v-icon>
					{{ tabSelection.test }}
				</v-btn>
			</template>
			<v-sheet height="calc(100vh - 10vh)">
				<v-btn @click="addText"><span>Add Text</span></v-btn>
				<v-btn @click="addImage"><span>Add Image</span></v-btn>
				<v-btn @click="addSvg"><span>Add Shapes</span></v-btn>

				<v-tabs-items v-model="tabSelection.tab">
					<v-tab-item value="tab-text">
						<v-layout row wrap class="overflow-y-auto ma-2">
							<v-flex v-for="card in 12" :key="card" v-bind="{ [`xs${4}`]: true }">
								<v-card class="pa-2" flat>
									<v-img src="https://dev.ams.autosigma.com/img/1e3a9e5421664ac6914787c3c4288a68.jpg" height="200px"> </v-img>
								</v-card>
							</v-flex>
						</v-layout>
					</v-tab-item>
					<v-tab-item value="tab-image">
						<v-layout row wrap class="overflow-y-auto ma-2">
							<v-flex v-for="card in 12" :key="card" v-bind="{ [`xs${4}`]: true }">
								<v-card class="pa-2" flat>
									<v-img src="https://dev.ams.autosigma.com/img/1e3a9e5421664ac6914787c3c4288a68.jpg" height="200px"> </v-img>
								</v-card>
							</v-flex>
						</v-layout>
					</v-tab-item>
					<v-tab-item value="tab-shape">
						<v-layout row wrap class="overflow-y-auto ma-2">
							<v-flex v-for="card in 12" :key="card" v-bind="{ [`xs${4}`]: true }">
								<v-card class="pa-2" flat>
									<v-img src="https://dev.ams.autosigma.com/img/1e3a9e5421664ac6914787c3c4288a68.jpg" height="200px"> </v-img>
								</v-card>
							</v-flex>
						</v-layout>
					</v-tab-item>
				</v-tabs-items>
				<v-bottom-navigation dense fixed>
					<v-btn @click="tabSelection.tab = 'tab-text'"><span>Text</span></v-btn>
					<v-btn @click="tabSelection.tab = 'tab-image'"><span>Image</span></v-btn>
					<v-btn @click="tabSelection.tab = 'tab-shape'"><span>Shapes</span></v-btn>
				</v-bottom-navigation>
			</v-sheet>
		</v-bottom-sheet>
	</v-fab-transition>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from '@nuxtjs/composition-api'
import { testStore } from '~/store'
import { TextPayload, UrlPayload } from '~/types/events'
import { TestModel } from '~/types/models'
import { emitter } from '~/utils/mitt'

export default defineComponent({
	name: 'AddFab',
	props: {},
	setup() {
		const tabSelection = reactive({
			tab: 'tab-text',
			test: <TestModel | undefined>undefined,
		})

		const addImage = (color: any) => {
			const payload = {
				id: '',
				url: '',
			} as UrlPayload
			emitter.emit('add:image', payload)
			// testStore.setTest({ name: 'add:image' })
		}

		const addText = (color: any) => {
			const payload = {
				text: 'text',
			} as TextPayload
			emitter.emit('add:text', payload)
			// testStore.setTest({ name: 'add:text' })
		}

		const addSvg = (color: any) => {
			const payload = {
				id: '',
				url: '',
			} as UrlPayload
			emitter.emit('add:shape', payload)
			// testStore.setTest({ name: 'add:shape' })
		}
		onMounted(async () => {
			// tabSelection.test = testStore.getTest()
		})

		return {
			tabSelection,
			addText,
			addSvg,
			addImage,
		}
	},
})
</script>
