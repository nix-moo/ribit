import * as React from 'react';
import { View } from 'react-native';
import { styles } from '../constants/globalStyles';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import RowCard from './card';

export const testCard = {
  num: 3,
  text: 'Round 1: K1, *p2, k2, repeat from * to last 3 stitches, p2, k1.',
}
