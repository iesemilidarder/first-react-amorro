import React, {Component} from 'react';
import PropTypes from "prop-types";

class SidebarComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const info = this.props.info;
        return (
            <aside className="col-3" >
                <button onClick={function(){this.props({ show: false })}}>hide</button>
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
    show: PropTypes.bool
};

export default SidebarComponent;