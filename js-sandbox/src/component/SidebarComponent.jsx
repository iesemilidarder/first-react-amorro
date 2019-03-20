import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SidebarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {show: false,};
        this.changeState = this.changeState.bind(this);
    }

    changeState() {
        this.setState(function (prevState) {
            return {show: !prevState.show};
        });
    }

    render() {
        const info = this.props.info;
        return (
            <div className={this.state.show ? 'col-2 justify-content-center' : 'col-1 justify-content-center'}>
                <button onClick={this.changeState} className='btn btn-light'>
                    {this.state.show ? 'Hide' : 'Show'}
                </button>
                <div className={this.state.show ? 'visible' : 'invisible'}>
                    <aside className='col-3'>
                        <ol>
                            {
                                info.map((i) =>
                                    <li>{i}</li>
                                )
                            }
                        </ol>
                    </aside>
                </div>
            </div>
        );
    }
}

SidebarComponent.propTypes = {
    info: PropTypes.array,
    show: PropTypes.bool
};

export default SidebarComponent;