import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ArticleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {currentId: 1};
        this._changeSelection = this._changeSelection.bind(this);
    }

    _changeSelection(id) {
        if (id !== undefined) {
            this.setState({currentId: id});
        }
    }

    _getElement(i) {
        if (i !== undefined) {
            for (let q = 0; q < myData.length; q++) {
                if (myData[q].id === i) {
                    return myData[q];
                }
            }
        }
        return {title: 404, text: "Error 404"};
    }

    render() {
        const myData = this.props.data;
        const content = this._getElement(this.state.currentId);
        console.log('Seleccionado: ' + this.state.currentId);
        //console.log(text);
        return (
            <div className='row'>
                <article className='col text-justify'>
                    {myData}
                    <h1>{content.title}</h1>
                    <p>{content.text}</p>
                </article>
            </div>
        );
    }
}

ArticleComponent.propTypes = {
    data: PropTypes.array,
    onclick: PropTypes.func
};

export default ArticleComponent;