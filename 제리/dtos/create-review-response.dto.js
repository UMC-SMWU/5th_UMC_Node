export const createReviewResponseDTO = (review, user, store) => {
    return {
        user_name: user.name,
        store_name: store.name,
        rating: review.rating,
        content: review?.content,
        created_at: review.created_at,
    };
};
