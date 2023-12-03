export const addUserMissionSql = "INSERT INTO user_mission (user_id, mission_id, status) VALUES (?, ?, ?);"

// export const getUserID = "SELECT * FROM user WHERE id = ?";

// export const getMissionID = "SELECT * FROM mission WHERE id = ?";

export const getUserMissionID = "SELECT * FROM user_mission WHERE id = ?";

export const confirmMission = "SELECT EXISTS(SELECT 1 FROM mission WHERE id IS NULL) as isNOTExistMission";
// 존재하는 미션인지 확인