import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MenuComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const myData = this.props.links;
        return (
            <div className='row'>
                <header className='col-12'>
                    <div className='navbar nav navbar-light bg-light'>
                        {myData.map((o) => {
                                return <a key={o.label} href={o.link}
                                    onClick={()=>this.props.onclick(o.id)}>{o.label}</a>
                            }
                        )}
                    </div>
                </header>
            </div>
        );
    }
}

MenuComponent.propTypes = {
    links: PropTypes.array.isRequired
};


export default MenuComponent;