const createTraits = (): attributeArrayState => {
  const traits: attributeArrayState = [];
  traits.push(Math.floor(Math.random() * 2) ? 'warrior' : 'sorcerer');
  traits.push(Math.floor(Math.random() * 2) ? 'human' : 'alien');
  traits.push(Math.floor(Math.random() * 2) ? 0 : 1);
  return traits;
};

export type jobType = 'warrior' | 'sorcerer';
export type raceType = 'human' | 'alien';
export type clothesType = 0 | 1;

export type attributeState = jobType | raceType | clothesType | undefined;
export type attributeArrayState = (
  | jobType
  | raceType
  | clothesType
  | undefined
)[];
export class Character {
  private constructor(
    public job: attributeState,
    public race: attributeState,
    public clothes: attributeState
  ) {}
  static createRandomCharacter(): Character {
    const [job, race, clothes]: attributeArrayState = createTraits();
    return new Character(job, race, clothes);
  }
}
