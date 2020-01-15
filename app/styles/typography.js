import { Platform } from 'react-native';
 
//families
export const FONT_REGULAR = Platform.select({
    android: {
        fontFamily: 'Roboto-Regular'
    },
    ios: {
        fontFamily: 'System',
        fontWeight: '400'
    }
});
 
export const FONT_MEDIUM = Platform.select({
    android: {
        fontFamily: 'Roboto-Medium'
    },
    ios: {
        fontFamily: 'System',
        fontWeight: '500'
    }
});
 
export const FONT_SEMIBOLD = Platform.select({
    android: {
        fontFamily: 'Roboto-Medium'
    },
    ios: {
        fontFamily: 'System',
        fontWeight: '600'
    }
});
 
export const FONT_BOLD = Platform.select({
    android: {
        fontFamily: 'Roboto-Bold'
    },
    ios: {
        fontFamily: 'System',
        fontWeight: '700'
    }
});