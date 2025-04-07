import { atom } from "recoil"
export const ConfigAtom = atom({
    key: 'cofnigAtom', 
    default: 0
})
export const ConfigTableTextureAtom = atom({
    key: 'configTableTextureAtom', 
    default: 0
})
export const ConfigChairTextureAtom =atom({
    key: 'configChairTextureAtom', 
    default: 0
})
export const price = atom({
    key:'price',
    default: [15000, 1000, 800]
})