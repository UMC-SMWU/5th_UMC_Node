export const insertStoreSql = "INSERT INTO store (name, score, addr, region_id) VALUES (?, ?, ?, ?);";
// 앞선 회원가입 API와 달리, 일대다 관계이므로 별도의 연결 테이블을 생성하지 않고 store에 외래키에 대한 정보도 추가함

export const getStoreID = "SELECT * FROM store WHERE id = ?";

export const confirmStore = "SELECT EXISTS(SELECT 1 FROM store WHERE name = ? AND region_id = ?) as isExistStore";
// 같은 지역에 같은 이름의 가게가 있으면 이미 등록되어 있는 가게라고 판단하도록 함

export const getRegionToStoreID = 
"SELECT s.id, s.name, s.region_id, r.id, r.name " 
+ "FROM store s JOIN region r ON s.region_id = r.id "
+ "WHERE s.id = ? " + "ORDER BY s.region_id ASC;";
// 특정 가게의 지역 정보를 가져오고, 가게의 지역 ID를 기준으로 정렬