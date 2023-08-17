import PropTypes from 'prop-types';

const Card = ({ cardDetails }) => {
    return (
        <>
            <h2>{cardDetails.cardNumber}</h2>
            <h3>{cardDetails.name}</h3>
            <p>
                {cardDetails.month}/{cardDetails.year}
            </p>
            <p>{cardDetails.cvc}</p>
        </>
    );
};

Card.propTypes = {
    cardDetails: PropTypes.object,
};

export default Card;
