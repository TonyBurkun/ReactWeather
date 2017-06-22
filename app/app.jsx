var React = require('react'),
    ReactDOM = require('react-dom'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router'),
    Main = require('Main'),
    Weather = require('Weather'),
    Examples = require('Examples'),
    About = require('About');

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!applicationStyle');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path='about' component={About}/>
            <Route path='examples' component={Examples}/>
            <IndexRoute component={Weather}/>


        </Route>
    </Router>,
    document.getElementById('app')
);
