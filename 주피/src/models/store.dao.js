import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { insertStoreSql, getStoreID, confirmStore, getRegionToStoreID } from "./store.sql.js";

// store 데이터 삽입
export const addStore = async (data) => {
    try {
        const conn = await pool.getConnection();

        const [confirm] = await pool.query(confirmStore, data.store_id);
        // 이 부분 맞는지 확인 필요할 듯

        if(confirm[0].isExistStore){
            conn.release();
            return -1;
        }

        const result = await pool.query(insertStoreSql, [data.name, data.score, data.addr, data.region_id]);

        conn.release();
        return result[0].insertId;
    } catch (err) {
        console.log(err.message);
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 가게 정보 얻기
export const getStore = async (storeID) => {
    try {
        const conn = await pool.getConnection();
        const [store] = await pool.query(getStoreID, storeID);

        console.log(store);

        if(store.length == 0){
            return -1;
        }

        conn.release();
        return store;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 가게의 지역 ID 반환
export const getStoreRegionToStoreID = async (storeID) => {
    try {
        const conn = await pool.getConnection();
        const region = await pool.query(getRegionToStoreID, String(storeID));
        console.log("getStoreRegionToStoreID result:", region);
        conn.release();

        return region;
    } catch (err) {
        console.log("Error in getStoreRegionToStoreID:", err.message);
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}