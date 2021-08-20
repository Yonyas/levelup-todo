import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    mainRedColor: string;
    mainRedDarkColor: string;
    mq: {
      laptop: string;
      tablet: string;
      mobile: string;
    };
  }
}
