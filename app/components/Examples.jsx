var React = require('react'),
    {Link} = require('react-router');

// var Examples = React.createClass({
//     render: function () {
//         return (
//             <h3>Examples component</h3>
//         );
//     }
// });

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples component</h1>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=London">London</Link>

                </li>
                <li>
                    <Link to="/?location=Rio">Rio</Link>
                </li>
            </ol>
        </div>

    );
};

module.exports = Examples;