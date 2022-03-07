/**
 * Following fonts will be loaded and cached in async while <AppLoading/>
 * Detail please check src/root.js
 */
const customFonts = {
    'Roboto-Regular': require('Assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('Assets/fonts/Roboto-Medium.ttf'),
    'Montserrat-SemiBold': require('Assets/fonts/Montserrat-SemiBold.ttf'),
    'Roboto-Bold': require('Assets/fonts/Roboto-Bold.ttf'),
    'Ubuntu-Medium': require('Assets/fonts/Ubuntu-Medium.ttf'),
    'Montserrat-Italic': require('Assets/fonts/Montserrat-Italic.ttf'),
    'GreatVibes-Regular': require('Assets/fonts/GreatVibes-Regular.ttf'),
};
const type = {
    primary: 'Roboto-Regular',
    secondary: 'Ubuntu-Medium',
    medium: 'Roboto-Medium',
    bold: 'Roboto-Bold',
    semi: 'Montserrat-SemiBold',
    stylish: 'GreatVibes-Regular',
    italic: 'Montserrat-Italic',
};

const Fonts = { customFonts, type };

export default Fonts;
