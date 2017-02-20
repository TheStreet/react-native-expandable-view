import React from 'react';
import { 
    Text, 
    View, 
    TouchableHighlight, 
    LayoutAnimation,
    Dimensions 
} from 'react-native';

import Style from '../Style';

const width = Dimensions.get('window').width;
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
                style={{
                    height: this.state.expandButtonHeight,
                    position: 'absolute',
                    bottom: 0,
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                    width: width
                }}
            >
                <Text
                    style={{
                        position: 'relative',
                        bottom: 0,
                        padding: 5,
                        textAlign: 'center',
                    }}
                >Tap here to expand</Text>
            </TouchableHighlight>
        );
    }
}

ExpandableView.propTypes = {
    initialMaxHeight: React.PropTypes.number,
};

ExpandableView.defaultProps = {
    initialMaxHeight: 500
};

export default ExpandableView;
