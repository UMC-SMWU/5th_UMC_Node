export const findReviewResponseDTO = (reviews) => {
    return reviews.map((review) => ({
        user_name: review['User.name'],
        created_at: formatDate(review.created_at),
        rating: review.rating,
        content: review?.content,
    }));
};

const formatDate = (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Intl.DateTimeFormat('kr', options).format(new Date(date)).replaceAll(' ', '').slice(0, -1);
};
