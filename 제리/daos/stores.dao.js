import { Store } from '../models';

export const insertStore = async (data) => {
    return Store.create({
        name: data.name,
        address: data.address,
        region_id: data.region_id,
    });
};
