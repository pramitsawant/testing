import mitt, { Emitter } from 'mitt'
import { Events } from '~/types/events'

let emitter: Emitter<Events>
export function initializeMitt() {
    emitter = mitt<Events>()
}

export { emitter }
