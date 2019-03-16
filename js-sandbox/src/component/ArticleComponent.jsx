import React, {Component} from 'react';
import PropTypes from "prop-types";

class ArticleComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data;
        return (
            <article className="col">
                {data}
            </article>
        );
    }
}

ArticleComponent.propTypes = {
    data: PropTypes.string
};

export default ArticleComponent;