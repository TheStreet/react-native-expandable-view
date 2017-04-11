import React from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
} from 'react-native';

import ExpandableView from 'react-native-expandable-view';

export default class ExpandableViewExample extends React.Component {
    render() {
        return (
            <ScrollView>
                <ExpandableView
                    header={this.renderHeader()}
                >
                    <View style={styles.yellowBox}>
                        <Text>
                            Expanded content
                        </Text>
                    </View>
                </ExpandableView>
                <ExpandableView
                    text='Tap to expand box'
                    initialMaxHeight={200}
                >
                    <View style={styles.redBox}>
                        <Text>
                            A box that can be expanded
                        </Text>
                    </View>
                </ExpandableView>
                <View style={styles.blueBox}>
                    <Text>
                        A box that can't be expanded
                    </Text>
                </View>
            </ScrollView>
        );
    }

    renderHeader() {
        return (
            <View style={styles.greenBox}>
                <Text>A header</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    redBox: {
        paddingTop: 50,
        minHeight: 400,
        backgroundColor: 'red'
    },
    blueBox: {
        paddingTop: 50,
        minHeight: 300,
        backgroundColor: 'blue'
    },
    greenBox: {
        paddingTop: 50,
        minHeight: 200,
        backgroundColor: 'green'
    },
    yellowBox: {
        minHeight: 200,
        backgroundColor: 'yellow'
    }
});