export const StoragePremitives = {
    test: 'test/user',
}

class LocalStorageAccessor {
    set(premitive: string, value: string) {
        localStorage.setItem(premitive, value)
    }

    get(premitive: string) {
        return localStorage.getItem(premitive)
    }

    remove(premitive: string) {
        return localStorage.removeItem(premitive)
    }
}

export const storageAccessor = new LocalStorageAccessor()
