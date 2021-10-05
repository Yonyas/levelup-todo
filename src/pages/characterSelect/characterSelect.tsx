/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

import NavBar from './components/NavBar';
import Detail from './components/Detail';
import CharacterView from './components/CharacterView';

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 80px;
  background-color: ${props => props.theme.mainBackgroundColor};
`;

const CharacterName = styled.input`
  width: 100%;
  margin-top: 20px;
  padding: 5px 10px;
`;

const CharacterSelect: React.FC = () => {
  return (
    <>
      <NavBar />
      <Main>
        <div css={{ position: 'relative' }}>
          <CharacterView />
          <CharacterName placeholder="캐릭터명을 입력하세요" />
        </div>
        <Detail />
      </Main>
    </>
  );
};

export default CharacterSelect;
