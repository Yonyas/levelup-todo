const HUMAN = 'creater/HUMAN' as const;
const ALIEN = 'creater/ALIEN' as const;
const WARRIOR = 'creater/WARRIOR' as const;
const SORCERER = 'creater/SORCERROR' as const;
const RANDOM = 'creater/RANDOM' as const;
const NEXTCLOTHES = 'creater/NEXTCLOTEHS' as const;
const PREVCLOTHES = 'creater/PREVCLOTEHS' as const;

export const toHuman = () => ({
  type: HUMAN,
});

export const toAlien = () => ({
  type: ALIEN,
});

export const toWarrior = () => ({
  type: WARRIOR,
});

export const toSorcerer = () => ({
  type: SORCERER,
});

export const toRandom = () => ({
  type: RANDOM,
});

export const toNextclothes = () => ({
  type: NEXTCLOTHES,
});

export const toPrevclothes = () => ({
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

type CreaterState = {
  job: string;
  race: string;
  clothes: number;
};

const initialState: CreaterState = {
  job: 'warrior',
  race: 'human',
  clothes: 0,
};

function creater(
  state: CreaterState = initialState,
  action: CreaterAction
): CreaterState {
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
      return state;
  }
}

export default creater;
export type CharacterState = ReturnType<typeof creater>;
