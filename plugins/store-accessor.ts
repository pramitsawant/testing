import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import TestModule from '~/store/modules/test'

let testStore: TestModule

function initialiseStores(store: Store<any>): void {
    testStore = getModule(TestModule, store)
}

export { initialiseStores, testStore, }
