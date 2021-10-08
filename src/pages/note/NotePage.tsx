/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import contents from '../../data/contents.json';

import Block from './components/Block';

const Note = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  height: 100%;
`;

const Menu = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Contents = styled.section`
  background-color: ${({ theme }) => theme.noteBackgroundColor};
`;

const Icon = styled.div`
  margin: 10px;
  font-size: 30px;
  color: ${({ theme }) => theme.noteIconColor};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.noteIconHoverColor};
  }
`;

const AccountIcon = styled(Icon)``;

const SettingIcon = styled(Icon)``;

const ContentMenu = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 25px;
  margin-left: 25px;
`;

const Select = styled.ul`
  display: flex;
  justify-content: end;
`;

const AddBtn = styled.li`
  width: 82px;
  height: 36px;
  margin: 30px 9px;
  background-color: ${({ theme }) => theme.noteBtnBackColor};
  color: ${({ theme }) => theme.noteBtnColor};
  text-align: center;
  line-height: 36px;

  &::hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.noteBtnBackHoverColor};
  }
`;

const Board = styled.div`
  padding: 0 25px;
`;

const NotePage: React.FC = () => {
  return (
    <Note>
      <Menu>
        <AccountIcon className="far fa-user-circle" />
        <SettingIcon className="fas fa-cog" />
      </Menu>
      <Contents>
        <ContentMenu>
          <Title>Board</Title>
          <Select>
            {contents.res.map(v => {
              return <AddBtn key={Math.random()}>{v.title}</AddBtn>;
            })}
          </Select>
        </ContentMenu>
        <Board>
          <Block />
        </Board>
      </Contents>
    </Note>
  );
};

export default NotePage;
