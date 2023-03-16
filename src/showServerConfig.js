import PropTypes from 'prop-types'

const ShowServerConfig = ({config, environment}) => {
    const {minConnections, maxConnections, restartAlways, SSL} = config;

    if (typeof minConnections !== 'number' || typeof maxConnections !== 'number' || typeof restartAlways !== 'boolean') {
        return <div>Error: Invalid config.</div>;
    }
    
    if (environment !== 'dev' && environment !== 'play' && environment !== 'live') {
        return <div>Error: Invalid environment.</div>;
    }
    
    if (environment === 'live' && !SSL) {
        return <div>Error: SSL is required for live environment.</div>;
    }


    return (
        <div>
            <p> Min Connections: {minConnections}</p>
            <p> Max Connections: {maxConnections}</p>
            <p> Restart Always: {restartAlways ? 'Yes': 'No'} </p>
            <p> SSL: {SSL ? 'Yes' : 'No'} </p>
        </div>
    );
};

ShowServerConfig.propTypes = {
    config: PropTypes.shape({
        minConnections: PropTypes.number.isRequired,
        maxConnections: PropTypes.number.isRequired,
        restartAlways: PropTypes.bool.isRequired,
        SSL: PropTypes.bool,
    }).isRequired,
    environment: PropTypes.oneOf(['dev', 'play', 'live']).isRequired,
};

export default ShowServerConfig;
