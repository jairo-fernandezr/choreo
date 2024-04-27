import styled from 'styled-components';

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh);
  h1 {
    text-align: center;
    color: var(--redTxtClr);
    font-size: 42px;
    @media (min-width: 768px) {
      font-size: 64px;
    }
  }
`;
export default StyledPage;
