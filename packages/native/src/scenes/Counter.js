import React from 'react'
import counterContainer, { defaultProps, propTypes } from '../../store/containers/counter'
import { Button, Text, View } from 'react-native'

export const Counter = ({ count, countMore, resetCount }) => {
  return (
    <View>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20 }}>
          Simple Counter: {count}
        </Text>
      </View>
      <Button onPress={countMore}
              title="Count up"
              color="#38876c"
              accessibilityLabel="Learn more about this green button"/>
      <Button onPress={resetCount}
              title="Reset"
              color="#ff52f7"/>
    </View>
  );
};

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default counterContainer(Counter)
