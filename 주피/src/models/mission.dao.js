import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { addUserMissionSql, getUserMissionID, confirmMission } from "./mission.sql.js";

export const addUserMission = async (data) => {
    try{
        const conn = await pool.getConnection();
        
        const [confirm] = await pool.query(confirmMission, data.mission_id);

        if(confirm[0].isNOTExistMission){
            conn.release();
            return -1;
        }
        
        const result = await pool.query(addUserMissionSql, [user_id, mission_id, status]);

        conn.release();
        return result[0].insertId;
    
    }catch (err) {
        console.log(err.message);
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const getUserMission = async (userMissionID) => {
    try {
        const conn = await pool.getConnection();
        const [userMission] = await pool.query(getUserMissionID, userMissionID);
        if(userMission.length == 0){
            return -1;
        }
        conn.release();
        console.log("user mission is", userMission);
        return userMission;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}