import React from 'react';
import StarRatings from 'react-star-ratings';

interface StarRating {
    rating?: number;
    // changeRating?: (rating: number) => void;
}

const RatingStar:React.FC<StarRating> = (props) => {
    return (
        <StarRatings
            rating={props.rating}
            starRatedColor="#ffb21e"
            starEmptyColor="#CBD3E4"
            starHoverColor="#ffb21e"
            starDimension="20px"
            starSpacing="3px"
            // changeRating={this.changeRating}
            numberOfStars={5}
        />
    );
};

export default RatingStar;
