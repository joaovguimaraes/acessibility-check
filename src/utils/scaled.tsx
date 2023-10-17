import {Dimensions, PixelRatio} from 'react-native';

var WIDTH_SCREEN = 375,
  HEIGHT_SCREEN = 812;

function fontScaled(size: number) {
  if (!size) return;

  const {width, height} = Dimensions.get('window');

  const scaleWidth = width / WIDTH_SCREEN;
  const scaleHeight = height / HEIGHT_SCREEN;
  const scale = Math.min(scaleWidth, scaleHeight);

  return Math.ceil(PixelRatio.roundToNearestPixel(size * scale - scale));
}

function horizontalScaled(size: number) {
  if (!size) return 0;

  const {width} = Dimensions.get('window');
  const scaleWidth = width / WIDTH_SCREEN;

  return Math.ceil(PixelRatio.roundToNearestPixel(size * scaleWidth));
}

function verticalScaled(size: number) {
  if (!size) return 0;

  const {height} = Dimensions.get('window');
  const scaleHeight = height / HEIGHT_SCREEN;

  return Math.ceil(PixelRatio.roundToNearestPixel(size * scaleHeight));
}

export {fontScaled, horizontalScaled, verticalScaled};
