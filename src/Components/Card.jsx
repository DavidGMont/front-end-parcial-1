import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({ cardDetails }) => {
    return (
        <div className={styles.card}>
            <h2>{cardDetails.cardNumber}</h2>
            <h3>{cardDetails.name}</h3>
            <p>
                {cardDetails.month}/{cardDetails.year}
            </p>
            <p>{cardDetails.cvc}</p>
        </div>
    );
};

Card.propTypes = {
    cardDetails: PropTypes.object,
};

export default Card;
