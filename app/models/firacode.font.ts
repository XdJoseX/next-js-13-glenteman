import localFont from 'next/font/local';

export const firacode = localFont({
  src: [
    {
     path: "../font/FiraCode-Medium.woff2", 
     weight: '400',
      style: 'normal', 
    },
    {
      path: "../font/FiraCode-Bold.woff2",
      weight: '700',
      style: 'normal',
    },
  ],
});