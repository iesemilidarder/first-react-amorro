import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ArticleComponent extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const data = this.props.data;
        return (
            <div className='row'>
                <article className='col text-justify'>
                    <p>{data}</p>
                </article>
            </div>
        );
    }
}

ArticleComponent.propTypes = {
    data: PropTypes.array
};

export default ArticleComponent;