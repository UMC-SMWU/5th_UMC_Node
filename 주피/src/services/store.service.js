import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { RegisterStoreResponseDTO } from "../dtos/store.dto.js"
import { addStore, getStore, getStoreRegionToStoreID } from "../models/store.dao.js";

export const registerStore = async (body) => {
    const region = body.region;

    const registerStoreData = await addStore({
        'name': body.name,
        'addr': body.addr,
        'score': body.score,
        'region_id': body.region_id
    })

    if(registerStoreData == -1){
        // registerStoreData가 -1일 때, if문에 걸려 Error를 뱉게 된다!
        throw new BaseError(status.STORE_ALREADY_EXISTS);
    }else{
        return RegisterStoreResponseDTO(await getStore(registerStoreData), await getStoreRegionToStoreID(registerStoreData));
    }
}