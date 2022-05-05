import React from 'react';
import { Text } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

const GradientText = (props: any) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={['#002CC3', 'purple']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={{ alignSelf: 'center' }}
      >
        <Text {...props} style={[props.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
