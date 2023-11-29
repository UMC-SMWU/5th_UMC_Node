import { Region } from '../models';

export const getRegionName = async (regionId) => {
    return Region.findOne({
        where: {
            id: regionId,
        },
    });
};
