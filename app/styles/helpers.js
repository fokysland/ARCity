import {Dimensions, PixelRatio} from 'react-native';
 
const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');
 
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
 
export const scaleSize = (size) => (WINDOW_WIDTH / guidelineBaseWidth) * size;
export const verticalScale = (size) => (WINDOW_HEIGHT / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.5) => size + (scaleSize(size) - size) * factor;
 
export const scaleFont = (size) => size;
//size * PixelRatio.getFontScale();
 
export function boxShadow(color, offset = { height: 2, width: 2 }, radius = 8, opacity = 0.2, elevation = 2) {
    return {
        shadowColor: color,
        shadowOffset: offset,
        shadowOpacity: opacity,
        shadowRadius: radius,
        elevation: elevation,
    };
}