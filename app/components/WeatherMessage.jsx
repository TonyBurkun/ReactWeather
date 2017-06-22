var React = require('react');

// var WeatherMessage = React.createClass({
//     render: function () {
//         return (
//             <h3>It's it {this.props.temp} in {this.props.location}</h3>
//         );
//     }
// });

var WeatherMessage = ({temp, location}) => {
    return (
        <h3 className="text-center">It's it {temp} in {location}</h3>
    );
};

module.exports = WeatherMessage;