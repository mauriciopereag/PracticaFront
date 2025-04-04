import PropTypes from 'prop-types';

const ImageCarousel = ({ items = [] }) => {
    return (
        <div className="carousel-container">
            {items && items.map((item, index) => (
                <div key={index} className="carousel-item">
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

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