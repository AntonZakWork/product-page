export interface Item {
    companyName: string,
    itemName: string,
    description: string,
    price: string,
    discount: string,
    previousPrice: string,
}

export interface ItemState {
    itemPictures: string[],
    itemThumbnails: string[],
    currentImgIndex: number,
    currentLightboxImgIndex: number,
    showPopupStatus: boolean,
    item: Item,
    isLightboxOpen: boolean,
    modalMenuStatus: boolean,

}
