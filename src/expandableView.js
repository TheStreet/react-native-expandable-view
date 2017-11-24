import React from 'react';
import PropTypes from 'prop-types';

import {
    Text,
    View,
    TouchableHighlight,
    LayoutAnimation
} from 'react-native';

import Style from './style';

const EXPAND_BTTN_HEIGHT = 50;

/**
 * A View that can be expanded if its content exceeds the given max height
 */
class ExpandableView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hideContent: true,
            expandButtonHeight: 0
        };

        this.setCanExpand = this.setCanExpand.bind(this);
    }

    componentDidMount() {
        // https://github.com/facebook/react-native/issues/953
        setTimeout(this.setCanExpand);
    }

    render() {
        return (
            <View
                style={this.props.style}
            >
                {this.renderHeader()}
                {this.renderContent()}
                {this.renderExpandButton()}
            </View>
        );
    }

    renderContent() {
        if (this.state.hideContent)
            return null;

        return (
            <View
                ref='Content'
            >
                {this.props.children}
            </View>
        )
    }

    setCanExpand() {
        if (this.props.header)
            this.setState({
                expandButtonHeight: EXPAND_BTTN_HEIGHT
            });

        if (this.refs.Content) {
            this.refs.Content.measure((ox, oy, width, height, px, py) => {
                if (height > (this.props.initialMaxHeight - EXPAND_BTTN_HEIGHT))
                    this.setState({
                        expandButtonHeight: EXPAND_BTTN_HEIGHT
                    });
            });
        }
    }

    renderHeader() {
        if (!this.props.header) return null;

        return (
            <View>
                {this.props.header}
            </View>
        );
    }

    renderExpandButton() {
        if(!this.state.hideContent){
            return null;
        }
        
        return (
            <TouchableHighlight
                onPress={() => {
                    LayoutAnimation.easeInEaseOut();
                    this.setState({
                        hideContent: false,
                        expandButtonHeight: 0
                    })
                }}
                underlayColor={'#F7F7F7'}
                style={[
                    Style.button,
                    this.props.buttonStyle,
                    {
                        height: this.state.expandButtonHeight,
                    },
                ]}
                accessible={true}
                accessibilityTraits={'button'}
                accessibilityLabel={this.props.text}
            >
                <Text style={Style.buttonText} numberOfLines={1} ellipsizeMode="tail">
                    {this.props.text}
                </Text>
            </TouchableHighlight>
        );
    }
}

ExpandableView.propTypes = {
    initialMaxHeight: PropTypes.number,
    text: PropTypes.string,
    header: PropTypes.element,
    buttonStyle: PropTypes.object
};

ExpandableView.defaultProps = {
    initialMaxHeight: 500,
    text: 'Tap here to expand'
};

export default ExpandableView;
