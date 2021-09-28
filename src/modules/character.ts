const createTraits = (): any => {
  const traits = [];
  traits.push(Math.floor(Math.random() * 2) ? '전사' : '법사');
  traits.push(Math.floor(Math.random() * 2) ? '인간' : '외계인');
  traits.push(Math.floor(Math.random() * 2) ? 0 : 1);
  return traits;
};

export type jobType = '전사' | '법사';
export type raceType = '인간' | '외계인';
export type clothesType = 0 | 1;
export class Character {
  private constructor(
    public job: jobType,
    public race: raceType,
    public clothes: clothesType
  ) {
    this.job = job;
    this.race = race;
    this.clothes = clothes;
  }
  static createRandomCharacter(): Character {
    const [job, race, clothes]: [jobType, raceType, clothesType] =
      createTraits();
    return new Character(job, race, clothes);
  }

  jump() {
    console.log('jump');
  }
}
