import { Platform } from 'react-native'

function getFontFamilyDevice(
    fontName: string,
    fontWeight: number,
): string {
    const fontAndroid = `${fontName.toLowerCase()}_${fontWeight.toString()}`

    return Platform.OS === 'ios' ? fontName : fontAndroid;
}

export {
    getFontFamilyDevice
}