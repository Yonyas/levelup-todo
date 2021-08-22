/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const DetailView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 0 0 30px;
  width: 350px;
  height: 400px;
  color: #fff;
  font-size: 1.3rem;
`;

const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  margin: 10px;
  height: 35px;
  width: 110px;
  background-color: ${props => props.theme.mainRedColor};
  cursor: pointer;
  font-size: 1.2rem;
  box-shadow: 2px 2px;

  &:hover {
    background-color: ${props => props.theme.hoverColor};
    color: #fff;
  }
`;

const RandomButton = styled(Button)`
  width: 120px;
  height: 40px;
`;

const Detail = () => {
  return (
    <DetailView>
      <Select>
        직업
        <Button>
          <span aria-label="warrior" role="img">
            전사 ⚔️
          </span>
        </Button>
        <Button>
          <span aria-label="sorcerer" role="img">
            법사 🪄
          </span>
        </Button>
      </Select>
      <Select>
        종족
        <Button>
          <span aria-label="human" role="img">
            인간 🧑‍🦲
          </span>
        </Button>
        <Button>
          <span aria-label="alien" role="img">
            외계인 👽
          </span>
        </Button>
      </Select>
      <div css={{ display: 'flex', justifyContent: 'space-around' }}>
        <RandomButton>RANDOM</RandomButton>
        <RandomButton>FINISH</RandomButton>
      </div>
    </DetailView>
  );
};

export default Detail;
