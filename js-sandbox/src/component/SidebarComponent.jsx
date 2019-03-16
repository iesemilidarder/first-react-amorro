import React, {Component} from 'react';
import PropTypes from "prop-types";

class SidebarComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const info = this.props.info;
        return (
            <aside className="col-3">
                <ol>
                    {info.map((i) =>
                        <li>{i}</li>
                    )}
                </ol>
            </aside>
        );
    }
}

SidebarComponent.propTypes = {
    info: PropTypes.array,
    show: PropTypes.bool.isRequired
};

export default SidebarComponent;

//onClick: function() {
//    this.state({ show: true });