import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MenuComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const myData = this.props.links;
        return (
            <header className='col-12'>
                <ul className='navbar nav navbar-light bg-light'>
                    {myData.map((o) => {
                            return <a key={o.label} href={o.link}>{o.label}</a>
                        }
                    )}
                </ul>
            </header>
        );
    }
}

MenuComponent.propTypes = {
    links: PropTypes.array.isRequired
};


export default MenuComponent;