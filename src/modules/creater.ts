const HUMAN = 'creater/HUMAN' as const;
const ALIEN = 'creater/ALIEN' as const;
const WARRIOR = 'creater/WARRIOR' as const;
const SORCERER = 'creater/SORCERROR' as const;
const RANDOM = 'creater/RANDOM' as const;
const NEXTCLOTHES = 'creater/NEXTCLOTEHS' as const;
const PREVCLOTHES = 'creater/PREVCLOTEHS' as const;

export const human = () => ({
  type: HUMAN,
});

export const alien = () => ({
  type: ALIEN,
});

export const warrior = () => ({
  type: WARRIOR,
});

export const sorcerer = () => ({
  type: SORCERER,
});

export const random = () => ({
  type: RANDOM,
});

export const nextclothes = () => ({
  type: NEXTCLOTHES,
});

export const prevclothes = () => ({
  type: PREVCLOTHES,
});

type CreaterAction =
  | ReturnType<typeof human>
  | ReturnType<typeof alien>
  | ReturnType<typeof warrior>
  | ReturnType<typeof sorcerer>
  | ReturnType<typeof random>
  | ReturnType<typeof nextclothes>
  | ReturnType<typeof prevclothes>;

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
