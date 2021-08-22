import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    mainRedColor: string;
    mainRedDarkColor: string;
    mainBackgroundColor: string;
    hoverColor: string;
    selectedColor: string;
    mq: {
      laptop: string;
      tablet: string;
      mobile: string;
    };
  }
}
