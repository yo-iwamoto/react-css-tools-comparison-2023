import { style } from '@vanilla-extract/css';

export const title = (fontStyle: string) =>
  style({
    fontWeight: 'bold',
    fontSize: '20px',
    fontStyle: fontStyle,
  });
