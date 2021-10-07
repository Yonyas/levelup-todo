/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const Note = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  height: 100%;
`;

const Menu = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Contents = styled.section`
  background-color: rgb(234, 237, 247);
`;

const Icon = styled.div`
  padding: 10px;
  font-size: 30px;
  color: gray;
`;

const AccountIcon = styled(Icon)``;

const SettingIcon = styled(Icon)``;

const Select = styled.ul``;

const Board = styled.div``;

const NotePage: React.FC = () => {
  return (
    <Note>
      <Menu>
        <AccountIcon className="far fa-user-circle" />
        <SettingIcon className="fas fa-cog" />
      </Menu>
      <Contents>
        <Select />
        <Board />
      </Contents>
    </Note>
  );
};

export default NotePage;
