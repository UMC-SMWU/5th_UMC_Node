export const createReviewSql = "INSERT INTO review (user_id, store_id, mission_id, rating, comment) VALUES (?, ?, ?, ?, ?);";

export const getReviewID = "SELECT * FROM review WHERE id = ?";

export const confirmStore = "SELECT EXIST(SELECT 0 FROM store WHERE id = ?) as isNOTExistStore";
// 존재하는 가게인지 확인