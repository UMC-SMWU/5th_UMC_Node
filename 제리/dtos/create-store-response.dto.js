export const createStoreResponseDTO = (store, region) => {
    return {
        store_name: store.name,
        region_name: region.name,
    };
};
