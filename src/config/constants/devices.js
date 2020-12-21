export const sizes = {
  mobileSmall: '320px',
  mobileMedium: '375px',
  mobileLarge: '475px',
  mobileExtraLarge: '565px',
  tablet: '768px',
  laptop: '1024px',
  laptopLarge: '1440px',
  desktop: '2560px',
};

export const devices = {
  mobileSmall: `@media (max-width: ${sizes.mobileSmall})`,
  mobileMedium: `@media (max-width: ${sizes.mobileMedium})`,
  mobileLarge: `@media (max-width: ${sizes.mobileLarge})`,
  mobileExtraLarge: `@media (max-width: ${sizes.mobileExtraLarge})`,
  tablet: `@media (max-width: ${sizes.tablet})`,
  laptop: `@media (max-width: ${sizes.laptop})`,
  laptopLarge: `@media (max-width: ${sizes.laptopLarge})`,
  desktop: `@media (max-width: ${sizes.desktop})`,
  desktopLarge: `@media (max-width: ${sizes.desktop})`,
};

export default {devices, sizes};

