var React = require('react'),
    WeatherForm = require('WeatherForm'),
    WeatherMessage = require('WeatherMessage'),
    openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
      return {
          isLoading: false
      };
    },
    handleSearch: function (location) {
        var that = this;

        this.setState({isLoading: true});

        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function (errorMessage) {
            that.setState({
                isLoading: false
            });
            alert(errorMessage);
        });
    },
    render: function () {
        console.log(this);
        var {isLoading, temp, location} = this.state;

        function  renderMessage() {
            if (isLoading){
                return <h3 className="text-center">Fetching weather...</h3>
            } else if (temp && location){
                return  <WeatherMessage location = {location} temp = {temp}/>
            }
        }

        return (
           <div>
               <h1 className="text-center">Weather component</h1>
               <WeatherForm onSearch = {this.handleSearch}/>
               {renderMessage()}
           </div>
      );
    }
});

module.exports = Weather;