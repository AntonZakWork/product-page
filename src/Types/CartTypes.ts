import { Item } from './ItemTypes';
export interface CartState {
    counterValue: number
    itemCount: number
    cartContent: ItemInCart[]

}

export interface ItemInCart extends Item {
    counterValue: number
}
