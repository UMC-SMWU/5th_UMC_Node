export const createReviewSql = "INSERT INTO review (user_id, store_id, mission_id, rating, comment) VALUES (?, ?, ?, ?, ?);";

// export const createReviewSql = "INSERT INTO review (mission_id, rating, comment, store_id, user_id) "
// + "SELECT u.id AS user_id, s.id AS store_id, ?, ?, ? "
// + "FROM user u "
// + "JOIN store s ON s.name = ? "
// + "WHERE u.name = ?;"

export const getReviewID = "SELECT * FROM review WHERE id = ?";

export const getReview = "SELECT * FROM review WHERE id = ?";

export const confirmStore = "SELECT EXISTS(SELECT 1 FROM store WHERE id IS NULL) as isNOTExistStore";
// 존재하는 가게인지 확인