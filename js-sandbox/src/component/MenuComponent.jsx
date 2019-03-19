import React, {Component} from 'react';
import PropTypes from "prop-types";

class MenuComponent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const links = this.props.links;
        return (
            <header className="col-12">
                <ul className="navbar navbar-light bg-light">
                    {links.map((l) =>
                        <li><a href={l} className="btn btn-primary">{l}</a></li>
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