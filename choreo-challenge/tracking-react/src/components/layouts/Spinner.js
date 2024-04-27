import styled, { keyframes } from 'styled-components';
import StyledPage from '../pages/StyledPage';

const Spinner = () => {
  return (
    <StyledSpinner>
      <div className='spinner'></div>
      <h1>Loading...</h1>
    </StyledSpinner>
  );
};

export default Spinner;

const spin = keyframes`
to{
    transform: rotate(360deg);
}
`;

const StyledSpinner = styled(StyledPage)`
  flex-direction: column;
  .spinner {
    width: 5rem;
    height: 5rem;
    border: 7px solid var(--mediumGrayClr);
    border-top-color: var(--redTxtClr);
    border-radius: 50%;
    animation: ${spin} 0.6s linear infinite;
  }
`;
