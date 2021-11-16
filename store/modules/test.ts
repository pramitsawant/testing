import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { storageAccessor, StoragePremitives } from '~/plugins/local-storage-accessor'
import { TestModel } from '~/types/models'

@Module({
    name: 'user',
    stateFactory: true,
    namespaced: true,
    preserveState: true,
})

export default class TestModule extends VuexModule {
    test?: TestModel

    @Action
    getTest() {
        if (this.test) return this.test
        return undefined;
    }

    @Action
    setTest(test: TestModel) {
        this.test = test
        storageAccessor.set(StoragePremitives.test, JSON.stringify(test))
    }
}