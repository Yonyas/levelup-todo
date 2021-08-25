const createTraits = (): any => {
  let traits = [];
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
  static createRandomCharacter() {
    const [job, race, clothes] = createTraits();
    return new Character(job, race, clothes);
  }
}
