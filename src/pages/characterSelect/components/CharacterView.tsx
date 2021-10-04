/** @jsxImportSource @emotion/react */
import { ReactElement, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { CharacterState } from '../../../modules/creater';
import { attributeState } from '../../../modules/character';

const View = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  background: url('/assets/character-back.jpg') no-repeat;
  border-radius: 15px;
  background-size: cover;
`;

const ClickPart = styled.div`
  position: absolute;
  width: 40px;
  height: 100%;
  cursor: pointer;
`;
const Left = styled(ClickPart)``;
const Right = styled(ClickPart)`
  right: 0;
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const LeftArrow = styled(Arrow)`
  left: 10px;
`;

const RightArrow = styled(Arrow)`
  right: 10px;
`;

const Character = styled.img`
  width: 80%;
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`;

const CharacterView: React.FC = (): ReactElement => {
  const job: attributeState = useSelector((state: CharacterState) => state.job);
  const race: attributeState = useSelector(
    (state: CharacterState) => state.race
  );
  const [src, setSrc] = useState<string>('/assets/전사파랑사람.png');

  //job, race에 따라 imgSrc return
  const getImgSrc = (
    characterJob: attributeState,
    characterRace: attributeState
  ) => {
    switch (true) {
      case characterJob === 'warrior' && characterRace === 'human':
        return '/assets/전사파랑사람.png';
      case characterJob === 'warrior' && characterRace === 'alien':
        return '/assets/전사파랑외계인.png';
      case characterJob === 'sorcerer' && characterRace === 'human':
        return '/assets/법사빨강사람.png';
      case characterJob === 'sorcerer' && characterRace === 'alien':
        return '/assets/법사빨강외계인.png';
      default:
        throw new Error(`unknown job or race`);
    }
  };

  useEffect(() => {
    try {
      setSrc(getImgSrc(job, race));
    } catch (e: unknown) {
      console.log(e);
    }
  }, [job, race]);

  return (
    <View>
      <Left>
        <LeftArrow aria-label="previos clothes color">
          <i
            className="fas fa-arrow-alt-circle-left"
            css={{ fontSize: '1.5rem' }}
          />
        </LeftArrow>
      </Left>
      <Right>
        <RightArrow aria-label="next clothes color">
          <i
            className="fas fa-arrow-alt-circle-right"
            css={{ fontSize: '1.5rem' }}
          />
        </RightArrow>
      </Right>
      <Character src={src} />
    </View>
  );
};

export default CharacterView;
