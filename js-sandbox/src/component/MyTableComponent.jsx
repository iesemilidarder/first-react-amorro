import React, {Component} from 'react';

class MyTableComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        const myDate=this.state.date.toISOString();
        return (
            <div className="container">
                Loren ipsum - {myDate}
            </div>
        );
    }
}
export default MyTableComponent;