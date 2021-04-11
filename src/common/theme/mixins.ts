export enum FontStyle {
  Body,
  LargeBody,
}

export const font = (fontStyle: FontStyle): string => {
  switch (fontStyle) {
    case FontStyle.Body:
      return 'font-size: 16px;';
    case FontStyle.LargeBody:
      return 'font-size: 20px; font-weight: 500;';
    default:
      return 'font-size: 16px;';
  }
};
