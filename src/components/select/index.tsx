/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Button } from '../../styles/button';

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
  return (
    <SelectTab>
      {title}
      {subTitle.map(v => {
        const ariaLabel = v.match(/[가-힣]+/);
        return (
          <Button key={v}>
            <span aria-label={ariaLabel?.[0]} role="img">
              {v}
            </span>
          </Button>
        );
      })}
    </SelectTab>
  );
};

export default Select;
