import React, {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import {ButtonPressableStyles} from './ButtonPressable.presets';

interface ButtonPressableProps {
  onPress: () => void;
  isVisible: boolean;
  textVisible?: string;
  textInvisible?: string;
}
export const ButtonPressable: FC<ButtonPressableProps> = ({
  onPress,
  isVisible,
  textVisible,
  textInvisible,
}) => {
  return (
    <Pressable style={ButtonPressableStyles.Container} onPress={onPress}>
      <View>
        <Text style={ButtonPressableStyles.Text}>
          {isVisible ? textVisible : textInvisible}
        </Text>
      </View>
    </Pressable>
  );
};
