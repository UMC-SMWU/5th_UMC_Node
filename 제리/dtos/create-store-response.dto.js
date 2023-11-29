export const createStoreResponseDTO = (store, regionName) => {
    return {
        store_name: store.name,
        region_name: regionName,
    };
};
