import React, {Component} from 'react';
import PropTypes from "prop-types";

class SidebarComponent extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const info =this.props.info;
        return (
            <aside className="col-2">
                <ol>
                    {info.map((i) =>
                        <li>{i}</li>
                    )}
                </ol>
            </aside>
        );
    }
}
Component.propTypes = {info: PropTypes.array};

export default SidebarComponent;