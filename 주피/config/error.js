export class BaseError extends Error {
    constructor(data){
        super(data.message);
        this.data = data;
        this.status = data.status || 500; // status가 값이 없을 경우 기본값으로 500 사용
    }
}