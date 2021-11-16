import { Plugin } from '@nuxt/types'
import { initializeMitt } from '~/utils/mitt'

const accessor: Plugin = () => {
    initializeMitt()
}

export default accessor
