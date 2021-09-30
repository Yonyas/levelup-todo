const createTraits = (): any => {
  const traits = [];
  traits.push(Math.floor(Math.random() * 2) ? 'warrior' : 'sorcerer');
  traits.push(Math.floor(Math.random() * 2) ? 'human' : 'alien');
  traits.push(Math.floor(Math.random() * 2) ? 0 : 1);
  return traits;
};

export type jobType = 'warrior' | 'sorcerer';
export type raceType = 'human' | 'alien';
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
