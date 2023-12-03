export const createReviewResponseDTO = (review) => {
    console.log("rating is", review[0].rating);
    console.log("comment is", review[0].comment);
    return {"rating": review[0].rating, "comment": review[0].comment};
}