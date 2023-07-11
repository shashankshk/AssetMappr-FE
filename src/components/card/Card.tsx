import PropTypes from 'prop-types';

/* Implementation of the card component which will be displayed on the web browser.
   This will be imported into all other components. 
*/
interface CardProps {
    children: React.ReactNode;
    classname?:string;
}
const Card: React.FC<CardProps> = (props) => {
    return <div className={props.classname}>{props.children}</div>;
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    classname: PropTypes.string
};
export default Card;