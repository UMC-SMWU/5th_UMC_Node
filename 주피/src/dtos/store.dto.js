export const AddStoreResponseDTO = (store, region) => {
    return {"name": store[0].name, "region": region[0].name};
    // 가게명과 지역명 전달
}