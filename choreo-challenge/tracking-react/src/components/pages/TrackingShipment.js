import styled from 'styled-components';
import StyledPage from './StyledPage';
import SearchBox from '../layouts/SearchBox';

const TrackingShipment = () => {
  return (
    <TrackingShipmentPage className='TrackingShipment'>
      <SearchBox className='large-box' />
    </TrackingShipmentPage>
  );
};

export default TrackingShipment;

const TrackingShipmentPage = styled(StyledPage)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
