import PropTypes from 'prop-types';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import './ImageCarousel.css';

const ImageCarousel = ({ items = [] }) => {
    if (!items) {
        return <div className="carousel-container">No hay elementos para mostrar</div>;
    }
    
    return (
        <div className="carousel-container">
            <Carousel>
                {items.map((item, i) => (
                    <Item key={i} item={item} />
                ))}
            </Carousel>
        </div>
    );
}

function Item(props) {
    return (
        <Paper className="carousel-item">
            <img src={props.item.image} alt={props.item.name} className="carousel-image" />
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
        </Paper>
    );
}

ImageCarousel.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })
    )
};

ImageCarousel.defaultProps = {
    items: []
};

export default ImageCarousel;