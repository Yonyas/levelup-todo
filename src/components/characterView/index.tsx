/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

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

const CharacterView = () => {
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
      <Character src="/assets/전사파랑사람.png" />
    </View>
  );
};

export default CharacterView;
