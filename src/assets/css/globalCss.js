'use strict';

import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import { STATUS_BAR_HEIGHT } from '../../utils/deviceInfo';

export const headerHeight = STATUS_BAR_HEIGHT + 44;
export const headerPaddingTop = STATUS_BAR_HEIGHT;
export const headerRightMarginRight=15;


export const Size = Dimensions.get('window');
export const ScreenWidth = Size.width;
export const ScreenHeight = Size.height;

export const themeColor="#009185";

export const routeActiveTintColor=themeColor;
export const routeInactiveTintColor='#5E5E5E';
export const globalStyle={
  iconFont:{
    fontFamily: 'iconfont',
  }
}