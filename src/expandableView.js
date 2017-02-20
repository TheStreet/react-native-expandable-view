import React from 'react';
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
    constructor(props){
        super(props);

        this.state = {
            contentContainerStyle: {
                maxHeight: this.props.initialMaxHeight
            },
            expandButtonHeight: 0
        };

        this.setCanExpand = this.setCanExpand.bind(this);
    }

    componentDidMount(){
        // https://github.com/facebook/react-native/issues/953
        setTimeout(this.setCanExpand);
    }

    render() {
        return (
            <View>
                <View
                    ref='Content'
                    style={this.state.contentContainerStyle} 
                >
                    {this.props.children}
                </View>
                {this.renderExpandButton()}
            </View>
        );
    }

    setCanExpand(){
        if (this.refs.Content) {
            this.refs.Content.measure((ox, oy, width, height, px, py) => {
                if(height > (this.props.initialMaxHeight - EXPAND_BTTN_HEIGHT))
                    this.setState({
                        expandButtonHeight: EXPAND_BTTN_HEIGHT
                    });
            });   
        }
    }

    renderExpandButton(){
        return (
            <TouchableHighlight
                onPress={() => {
                    LayoutAnimation.easeInEaseOut();
                    this.setState({
                        contentContainerStyle: {},
                        expandButtonHeight: 0
                    })
                }}
                underlayColor={'#F7F7F7'}
                style={[
                    Style.button,
                    {
                        height: this.state.expandButtonHeight,
                    }
                ]}
            >
                <Text style={Style.buttonText}>
                    {this.props.text}
                </Text>
            </TouchableHighlight>
        );
    }
}

ExpandableView.propTypes = {
    initialMaxHeight: React.PropTypes.number,
    text: React.PropTypes.string
};

ExpandableView.defaultProps = {
    initialMaxHeight: 500,
    text: 'Tap here to expand'
};

export default ExpandableView;