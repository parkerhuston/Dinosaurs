import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

export default class Fact extends Component {
    static propTypes = {
        header: PropTypes.string,
        text: PropTypes.string,
        img: PropTypes.array,
    };

    static defaultProps = {
        header: '',
        text: '',
        img: [],
    };

    render() {
        const { header, text, img } = this.props;
        return (
            <Fragment>
                {
                    header &&
                    <h1>{header}</h1>
                }
                {
                    text && text.length &&
                    <p>{text}</p>
                }
                {img.map((i) => (
                    <img src={i} />
                ))}
            </Fragment>
        );
    }
}
