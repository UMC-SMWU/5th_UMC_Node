import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { addUserMissionSql, getUserMissionID, confirmMission } from "./mission.sql.js";

export const addUserMission = async (mission_id) => {
    try{
        const conn = await pool.getConnection();
        
        const [confirm] = await pool.query(confirmMission, [mission_id]);

        if(confirm[0].isNOTExistMission){
            conn.release();
            return -1;
        }
        const result = await pool.query(addUserMissionSql, [mission_id]);

        conn.release();
        return result[0].insertId;
    
    }catch (err) {
        console.log(err.message);
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}