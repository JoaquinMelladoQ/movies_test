import React, {FC} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {LoaderStyles} from './LoaderComponent.presets';

interface LoaderComponentProps {
  size?: 'small' | 'large';
  color?: string;
}

const defaultProps: LoaderComponentProps = {
  size: 'large',
  color: '#0000ff',
};

export const LoaderComponent: FC<LoaderComponentProps> = ({size, color}) => (
  <View style={LoaderStyles.container}>
    <ActivityIndicator size={size} color={color} />
  </View>
);

LoaderComponent.defaultProps = defaultProps;
