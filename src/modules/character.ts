type jobType = '전사' | '법사';
type raceType = '인간' | '외계인';
type clothesType = 0 | 1;

const createTraits = (traits: (string | number)[]): (string | number)[] => {
  traits.push(Math.floor(Math.random() * 2) ? '전사' : '법사');
  traits.push(Math.floor(Math.random() * 2) ? '인간' : '외계인');
  traits.push(Math.floor(Math.random() * 2) ? 0 : 1);
  return traits;
};

export class Character {
  job: jobType;
  race: raceType;
  clothes: clothesType;

  private constructor(job: jobType, race: raceType, clothes: clothesType) {
    this.job = job;
    this.race = race;
    this.clothes = clothes;
  }
  createRandomCharacter(random: 'random') {
    const traits: (string | number)[] = [];
    createTraits(traits);
  }
}

//랜덤생성.
// new Character(random)
