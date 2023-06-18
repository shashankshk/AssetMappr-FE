import './Card.css';
import PropTypes from 'prop-types';

/* Implementation of the card component which will be displayed on the web browser.
   This will be imported into all other components. 
*/
interface CardProps {
    children: React.ReactNode;
}
const Card: React.FC<CardProps> = (props) => {
    return <div className='card'>{props.children}</div>;
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Card;