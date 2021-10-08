import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    mainRedColor: string;
    mainRedDarkColor: string;
    mainBackgroundColor: string;
    hoverColor: string;
    selectedColor: string;

    noteBackgroundColor: string;
    noteIconColor: string;
    noteIconHoverColor: string;
    noteBtnBackColor: string;
    noteBtnBackHoverColor: string;
    noteBtnColor: string;
    noteBlockBackColor: string;
    noteBlockShadowColor: string;

    mq: {
      laptop: string;
      tablet: string;
      mobile: string;
    };
  }
}
