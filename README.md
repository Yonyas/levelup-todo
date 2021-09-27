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

### 1. Type error

```js
const createTraits = (): (string | number)[] => {
  const traits = [];
  traits.push(Math.floor(Math.random() * 2) ? '전사' : '법사');
  traits.push(Math.floor(Math.random() * 2) ? '인간' : '외계인');
  traits.push(Math.floor(Math.random() * 2) ? 0 : 1);
  return traits;
};

type jobType = '전사' | '법사';
type raceType = '인간' | '외계인';
type clothesType = 0 | 1;

export class Character {
  private constructor(job: jobType, race: raceType, clothes: clothesType) {
    this.job = job;
    this.race = race;
    this.clothes = clothes;
  }
  createRandomCharacter(): Character {
    const [job, race, clothes]: [jobType, raceType, clothesType] =
      createTraits();
    return new Character(job, race, clothes);
    //error: job 에는 string만 들어와야하는데 string|number라니까 에러가 뜬다
  }
}

```

> Argument of type 'string | number' is not assignable to parameter of type 'jobType'.Type 'string' is not assignable to type 'jobType'.

첫번째줄의 `(string | number)[]` 는 지정해주지 않아도 저렇게 타입추론이 된다.  
저 부분을 : any로 변경하면 해결된다.
