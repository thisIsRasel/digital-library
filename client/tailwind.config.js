const spacing = {};
const heightWidth = {};
const fontSize = {};
const borderRadius = {};

//------------------------------
// @Spacing (margin,padding,gap)
//-------------------------------
for (let i = 0; i <= 128; i++) {
  spacing[i * 2] = `${i * 2}px`;
}

//------------------------------
// @FontSize
//-------------------------------
for (let i = 10; i <= 30; i++) {
  fontSize[i] = [`${i}px`, `${i + 3}px`];
}
//------------------------------
// @Width
// Default have 0 to 256px
//-------------------------------
for (let i = 130; i <= 500; i++) {
  heightWidth[i * 2] = `${i * 2}px`;
}

for (let i = 0; i <= 40; i++) {
  borderRadius[i] = `${i}px`;
}
borderRadius[100] = '100px';

module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/containers/**/*.tsx',
    './src/styles/**/*.scss',
    './src/styles/**/*.css',
  ],
  important: true,
  theme: {
    container: {
      center: true,
    },
    screens: {
      xs: { max: '360px' },
    },
    colors: {
      white: {
        DEFAULT: '#ffffff',
      },
      black: {
        DEFAULT: '#1C1C1C',
      },
      primary: {
        DEFAULT: '#1C1C1C',
      },
      gray: {
        light: '#F5F5F5',
        DEFAULT: '#DEDEDE',
        dark: '#757575',
        darker: '#575757',
      },
      green: {
        light: '#E7F0EB',
        DEFAULT: '#16B050',
      },
      red: {
        light: '#FEECEF',
        DEFAULT: '#F43F5E',
      },
      yellow: {
        light: '#FEF9E8',
        DEFAULT: '#F3C318',
      },
      transparent: 'transparent',
    },
    fontSize: {
      xs: ['10px', { lineHeight: '140%', letterSpacing: '-0.05%' }],
      sm: ['12px', { lineHeight: '140%', letterSpacing: '-0.05%' }],
      md: ['14px', { lineHeight: '140%', letterSpacing: '-0.05%' }],
      lg: ['16px', { lineHeight: '140%', letterSpacing: '-0.05%' }],
      xl: ['18px', { lineHeight: '140%', letterSpacing: '-0.05%' }],
      '2xl': ['20px', { lineHeight: '140%', letterSpacing: '-0.05%' }],
      '3xl': ['22px', { lineHeight: '140%', letterSpacing: '-0.05%' }],
      '4xl': ['24px', { lineHeight: '140%', letterSpacing: '-0.05%' }],
    },
    fontFamily: {
      interRegular: ['Inter Regular'],
      interMedium: ['Inter Medium'],
    },
    borderRadius: {
      ...borderRadius,
      full: '9999px',
    },
    borderWidth: {
      DEFAULT: '0.5px',
      0: '0',
      1: '1px',
      2: '2px',
    },

    spacing: {
      ...spacing,
    },
    extend: {
      width: {
        ...heightWidth,
      },
      height: {
        ...heightWidth,
      },
    },
  },
  variants: {
    fontSize: ['responsive', 'hover'],
  },
  plugins: [],
};
