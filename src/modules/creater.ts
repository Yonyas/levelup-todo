import { Character } from './character';

const HUMAN = 'creater/HUMAN' as const;
const ALIEN = 'creater/ALIEN' as const;
const WARRIOR = 'creater/WARRIOR' as const;
const SORCERER = 'creater/SORCERER' as const;
const RANDOM = 'creater/RANDOM' as const;
const NEXTCLOTHES = 'creater/NEXTCLOTEHS' as const;
const PREVCLOTHES = 'creater/PREVCLOTEHS' as const;

type dispatchState = { type: string };

export const toHuman = (): dispatchState => ({
  type: HUMAN,
});

export const toAlien = (): dispatchState => ({
  type: ALIEN,
});

export const toWarrior = (): dispatchState => ({
  type: WARRIOR,
});

export const toSorcerer = (): dispatchState => ({
  type: SORCERER,
});

export const toRandom = (): dispatchState => ({
  type: RANDOM,
});

export const toNextclothes = (): dispatchState => ({
  type: NEXTCLOTHES,
});

export const toPrevclothes = (): dispatchState => ({
  type: PREVCLOTHES,
});

type CreaterAction =
  | ReturnType<typeof toHuman>
  | ReturnType<typeof toAlien>
  | ReturnType<typeof toWarrior>
  | ReturnType<typeof toSorcerer>
  | ReturnType<typeof toRandom>
  | ReturnType<typeof toNextclothes>
  | ReturnType<typeof toPrevclothes>;

const initialState: Character = Character.createRandomCharacter();

function creater(state = initialState, action: CreaterAction): Character {
  switch (action.type) {
    case HUMAN:
      return { ...state, race: 'human' };
    case ALIEN:
      return { ...state, race: 'alien' };
    case WARRIOR:
      return { ...state, job: 'warrior' };
    case SORCERER:
      return { ...state, job: 'sorcerer' };
    case RANDOM:
      return { ...state };
    case NEXTCLOTHES:
      return { ...state, clothes: 1 };
    case PREVCLOTHES:
      return { ...state, clothes: 0 };
    default:
      throw new Error(`invalid input`);
  }
}

export default creater;
export type CharacterState = ReturnType<typeof creater>;
