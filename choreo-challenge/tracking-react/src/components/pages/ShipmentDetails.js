import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import StyledPage from './StyledPage';
import ShipmentStatus from '../layouts/ShipmentStatus';
import ShipmentTable from '../layouts/ShipmentTable';
import ErrorMessage from '../layouts/ErrorMessage'; // Import the message layout component
import ShipmentStatusError from '../layouts/ShipmentStatusError'; // Import the message layout component
import useFetch from '../hooks/useFetch';
//import {apiUrl} from '../../../public/config';


const apiUrl = window?.configs?.apiUrl ? window.configs.apiUrl : "http://localhost:8080";


const ShipmentDetails = () => {
  const { track_num } = useParams();


  const url = `${apiUrl}/track/${track_num}`;
  
  console.log(url);
  const  {data, error}  = useFetch(url);

if (error) {
 return (
    <ShipmentDetailsPage className='ShipmentDetails'>
    		<ErrorMessage message="Tracking data not found" />
	    <ShipmentStatusError data={data} />

    </ShipmentDetailsPage>
  );
} else {
  return (
    <ShipmentDetailsPage className='ShipmentDetails'>
      <ShipmentStatus data={data} />
      <ShipmentTable data={data} />
    </ShipmentDetailsPage>
  );
}



};

export default ShipmentDetails;

const ShipmentDetailsPage = styled(StyledPage)`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  margin-top: 77px;
`;
