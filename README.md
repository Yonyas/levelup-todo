Levelup-Todo project 입니다.

스택 : TypeScript, Emotion, Jest, React, Redux

### CRA vs next.js

next.js는 ssr 설정이 쉽고 SEO 최적화가 되어있다. 그래서 쇼핑몰 사이트 같은 곳에서 좋다.
CRA는 설정할 것이 거의 없다. 그래서 편하다.
둘 중 고민하다가 내가 만들 앱은 SEO가 필요 없기 때문에 CRA로 갔다.

### 캐릭터 만들기

안드로이드 앱 Pixel Studio로 직.접. 그렸다.

### 색상 선택

[컬러 어도비사이트](https://color.adobe.com/ko/create/color-wheel)를 이용했다. 색 하나를 지정하면 어울리는 색들을 알려준다.

## 캐릭터선택 페이지

<img width="797" alt="스크린샷 2021-08-22 오후 4 26 35" src="https://user-images.githubusercontent.com/60434382/130346374-e8f89772-7b80-4d8e-a2ca-eb60133e1587.png">

### 로그아웃 상태에서 캐릭터 저장하기

Cookie, Local storage, Session storage 중 고민.
일단 다른 탭마다 다른 캐릭터가 저장되게 하는건 막고 싶어서 session storage는 탈락.
로컬스토리지는 plain text로 저장되어 client-side에서 직접 확인이 가능해서 보안문제가 있지만 캐릭터선택에 어떤 보안문제가 있을 것 같지 않아서 선택.

## Troubles

### 1. \<CharacterView> getImgSrc 함수 : job, race 에 따라 img src 불러오기

character.ts 에서 createRandomCharacter()으르 실행시키면

```
{job: 'warrior', race: 'human'}
```

같은 객체가 생성된다. 이 객체를 initialState로 해서
\<CharacterView>에서 객체내용에 맞게끔 imgSrc를 받아온다.

그 함수가 getImgSrc함수이다.  

근데 이렇게 짤바에야 if else문이 나은것 같기도 하고... 그렇다.

```js
const getImgSrc = (characterJob: string, characterRace: string): string => {
  switch (true) {
    case characterJob === 'warrior' && characterRace === 'human':
      return '/assets/전사파랑사람.png';
    case characterJob === 'warrior' && characterRace === 'alien':
      return '/assets/전사파랑외계인.png';
    case characterJob === 'sorcerer' && characterRace === 'human':
      return '/assets/법사빨강사람.png';
    case characterJob === 'sorcerer' && characterRace === 'alien':
      return '/assets/법사빨강외계인.png';
    default:
      throw new Error(`unknown job or race`);
  }
};
```
