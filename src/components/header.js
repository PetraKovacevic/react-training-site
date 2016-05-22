import React     from 'react';
import {Link}    from 'react-router';
import _         from 'lodash';

const Header = React.createClass({

    getDefaultProps() {
        return {
            menuItems: [
                {
                    name: 'Home',
                    link: '/'
                }
            ]
        }
    },

    render() {
        return (
            <nav>
                <ul className="nav navbar-nav">
                    {this.generateMenuItems()}
                </ul>
            </nav>
        );
    },

    generateMenuItems() {
        return _.map(this.props.menuItems,function(item,i){
            return (
                <li key={i}>
                    <Link activeClassName="active" to={item.link}>{item.name}</Link>
                </li>
            )
        })
    }


});

export default Header;
