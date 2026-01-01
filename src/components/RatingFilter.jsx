import Rating from "./Rating";

const RatingFilter = ({ onChangeRating, selectedRating }) => {
  return (
    <div className="p-5 space-y-3 border border-gray-800 rounded-lg bg-white">
      <h3 className="font-bold text-lg text-black">Rating</h3>
      {[5, 4, 3, 2, 1].map((rating) => (
        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors border border-transparent"
          key={rating}
          onClick={() => onChangeRating(rating)} >
          <div className="flex items-center gap-4">
            <Rating rating={rating}
              ratingClassName={`${rating === selectedRating ? "!text-red-500" : ""}`}
            />
            <span className={`${rating === selectedRating ? "text-red-400" : "text-black"}`}>
              {rating === 5 ? "5.0" : `${rating.toFixed(1)}+`}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RatingFilter;