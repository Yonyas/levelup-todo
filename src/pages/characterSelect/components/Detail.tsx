/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Button } from '../../../styles/button';
import Select from './Select';

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

const WideButton = styled(Button)`
  width: 120px;
  height: 40px;
`;

const Detail: React.FC = () => {
  return (
    <DetailView>
      <Select title="직업" subTitle={['전사 ⚔️', '법사 🪄']} />
      <Select title="종족" subTitle={['인간 👨‍🦲', '외계인 👽']} />
      <div css={{ display: 'flex', justifyContent: 'space-around' }}>
        <WideButton>RANDOM</WideButton>
        <WideButton>FINISH</WideButton>
      </div>
    </DetailView>
  );
};

export default Detail;
