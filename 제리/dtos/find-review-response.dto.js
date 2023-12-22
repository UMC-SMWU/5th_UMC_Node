export const findReviewResponseDTO = (reviews) => {
    return reviews.map((review) => ({
        user_name: review['User.name'],
        created_at: review.created_at,
        rating: review.rating,
        content: review?.content,
    }));
};
