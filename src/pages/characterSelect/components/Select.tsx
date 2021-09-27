/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import {
  toHuman,
  toAlien,
  toWarrior,
  toSorcerer,
} from '../../../modules/creater';
import { Button } from '../../../styles/button';

const SelectTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

type SelectProps = {
  title: string;
  subTitle: string[];
};

const Select = ({ title, subTitle }: SelectProps) => {
  const dispatch = useDispatch();

  const onClickSelectBtn = (trait: string | undefined) => () => {
    if (trait === '전사') return dispatch(toWarrior());
    if (trait === '법사') return dispatch(toSorcerer());
    if (trait === '인간') return dispatch(toHuman());
    if (trait === '외계인') return dispatch(toAlien());
  };
  return (
    <SelectTab>
      {title}
      {subTitle.map(v => {
        const currentTrait = v.match(/[가-힣]+/)?.[0];
        return (
          <Button key={v} onClick={onClickSelectBtn(currentTrait)}>
            <span aria-label={currentTrait} role="img">
              {v}
            </span>
          </Button>
        );
      })}
    </SelectTab>
  );
};

export default Select;
