# react-native-expandable-view

---
An expandable view for react native, working both on Android and iOS.

## <a name='install'>Installation</a>
```
npm install react-native-expandable-view --save
```

## <a name='usage'>Usage</a>
```
import DataTable from 'react-native-datatable';
```

Then wrap the view you wish to be expandable. 

It will automatically become expandable if the height of its content exceeds the given initial manxium height.

```js
<ExpandableView>
    <View>
        <Text>My expandable view</Text>
    </View>
</ExpandableView>
```

## Properties

| Prop | Description | Default |
|---|---|---|
|**`intialMaxHeight`**|The maxmium height your content can be before it becomes expandable|500|
|**`text`**|Text for the expand button|'Tap here to expand'|

