<template>
	<v-responsive class="overflow-y-auto mt-2" height="calc(100vh - 133px)">
		<v-card v-resize="onResize" ref="container" color="yellow" elevation="3" height="100%">
			<canvas id="canvas"></canvas>
		</v-card>
	</v-responsive>
</template>
<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, reactive, ref } from '@nuxtjs/composition-api'
import { CREATIVE } from '~/constant/creative'
import { fabric } from 'fabric-with-gestures'
import 'fabric-history'
fabric.Object.NUM_FRACTION_DIGITS = 10
import { emitter } from '~/utils/mitt'

export default defineComponent({
	name: 'Canvas',
	props: {},
	setup() {
		let container = ref<any>(null)
		let canvas = new fabric.Canvas('canvas')

		const initCanvas = () => {
			canvas = new fabric.Canvas('canvas', {
				statefull: true,
				selectionKey: 'ctrlKey',
			})
			canvas.fireRightClick = true
			canvas.preserveObjectStacking = true

			canvas.loadFromJSON(
				CREATIVE.data,
				() => {},
				(ob: any, object: any) => {},
			)
			canvas.setHeight(CREATIVE.height)
			canvas.setWidth(CREATIVE.width)
		}

		const canvasController = reactive({
			fitToObjects: () => {
				canvas.discardActiveObject()
				var object = new fabric.ActiveSelection(canvas.getObjects(), {
					canvas: canvas,
				})

				canvas.setActiveObject(object)
				canvas.discardActiveObject()
				canvas.requestRenderAll()
				let zoom = 1 //canvas.getZoom()
				let panX = 0
				let panY = 0
				let objWidth = object.getScaledWidth()
				let objHeight = object.getScaledHeight()
				let zm_v = canvas.getHeight() / object.height
				let zm_h = canvas.getWidth() / object.width

				if (object._objects.length == 0) {
					//Fit To Screen
					zm_v = canvas.getHeight() / CREATIVE.height
					zm_h = canvas.getWidth() / CREATIVE.width

					panX = canvas.getWidth() / 2 - CREATIVE.width / 2
					panY = canvas.getHeight() / 2 - CREATIVE.height / 2
				} else {
					zoom = Math.min(zm_v, zm_h) - 0.1

					panX = (canvas.getWidth() / zoom / 2 - object.aCoords.tl.x - objWidth / 2) * zoom
					panY = (canvas.getHeight() / zoom / 2 - object.aCoords.tl.y - objHeight / 2) * zoom
				}

				canvas.setViewportTransform([zoom, 0, 0, zoom, panX, panY])
			},
			fitToCanvas: () => {
				canvas.discardActiveObject()
				var object = new fabric.ActiveSelection(canvas.getObjects(), {
					canvas: canvas,
				})
				canvas.setActiveObject(object)
				canvas.discardActiveObject()
				canvas.requestRenderAll()
				let zoom = 1
				let panX = 0
				let panY = 0
				let zm_v = canvas.getHeight() / object.height
				let zm_h = canvas.getWidth() / object.width
				zm_v = canvas.getHeight() / CREATIVE.height
				zm_h = canvas.getWidth() / CREATIVE.width
				let zm = Math.min(zm_v, zm_h) - 0.1
				panX = canvas.getWidth() / 2 - CREATIVE.width / 2
				panY = canvas.getHeight() / 2 - CREATIVE.height / 2
				const center = canvas.getCenter()
				zoom = zoom
				zm = zm + 0.09
				canvas.setViewportTransform([1, 0, 0, 1, panX, panY])
				var point = { x: center.left, y: center.top }
				canvas.zoomToPoint(point, zm)
			},
			zoomIn: () => {
				var zoom = canvas.getZoom()
				zoom += 0.01
				if (zoom > 20) zoom = 20
				if (zoom < 0) zoom = 0.1
				zoom = zoom
				canvas.zoomToPoint({ x: CREATIVE.width / 2, y: CREATIVE.height / 2 }, zoom)
			},
			zoomOut: () => {
				var zoom = canvas.getZoom()
				zoom -= 0.01
				if (zoom > 20) zoom = 20
				if (zoom < 0) zoom = 0.1
				zoom = zoom
				canvas.zoomToPoint({ x: CREATIVE.width / 2, y: CREATIVE.height / 2 }, zoom)
			},
			undo: () => {
				canvas.undo()
			},
			redo: () => {
				canvas.redo()
			},
			updateLayers() {
				// this.$root.$emit(`canvasDataFor${this.canvasName}`,this.canvas.getObjects());
			},
		})

		const onResize = () => {
			if (container.value) {
				canvas.setHeight(container.value.$el.clientHeight)
				canvas.setWidth(container.value.$el.clientWidth)
				canvasController.fitToCanvas()
			}
		}

		const objectEventsController = reactive({
			bindObjectEvents: () => {
				emitter.on('add:text', objectEventsController.addText)
				emitter.on('add:image', objectEventsController.addImage)
				emitter.on('add:shape', objectEventsController.addShape)
				emitter.on('apply:bgcolor', objectEventsController.setBGColor)
				emitter.on('apply:design', objectEventsController.applyDesign)
			},
			unbindObjectEvents: () => {
				emitter.off('add:text', objectEventsController.addText)
				emitter.off('add:image', objectEventsController.addImage)
				emitter.off('add:shape', objectEventsController.addShape)
				emitter.off('apply:bgcolor', objectEventsController.setBGColor)
				emitter.off('apply:design', objectEventsController.applyDesign)
			},
			addText() {
				console.log('addText')
			},
			addImage() {
				console.log('addImage')
			},
			addShape() {
				console.log('addShape')
			},
			setBGColor() {
				console.log('setBGColor')
			},
			applyDesign() {
				console.log('applyDesign')
			},
		})

		onMounted(async () => {
			initCanvas()
			onResize()
			objectEventsController.bindObjectEvents()
		})

		onBeforeUnmount(() => {
			objectEventsController.unbindObjectEvents()
		})

		return {
			container,
			onResize,
		}
	},
})
</script>
