/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const BlockContent = styled.div`
  width: 400px;
  height: 200px;
  background-color: ${({ theme }) => theme.noteBlockBackColor};
  box-shadow: 7px 7px 10px ${({ theme }) => theme.noteBlockShadowColor};
`;

const Block: React.FC = () => {
  return <BlockContent />;
};

export default Block;
