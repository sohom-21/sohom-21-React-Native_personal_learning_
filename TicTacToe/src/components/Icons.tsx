import React from 'react';
import type { PropsWithChildren } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

type IconsProps = PropsWithChildren<{
  name: string;
}>;

const Icons = ({ name }: IconsProps) => {
  switch (name) {
    case 'circle':
      return <Icon name="radio-button-unchecked" size={38} color="#F7CD2E" />;
    case 'cross':
      return <Icon name="close" size={38} color="#38CC77" />;
    default:
      return <Icon name="edit" size={38} color="#0D0D0D" />;
  }
};

export default Icons;
