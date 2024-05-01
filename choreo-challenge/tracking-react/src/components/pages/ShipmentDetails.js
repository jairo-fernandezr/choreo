import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import StyledPage from './StyledPage';
import ShipmentStatus from '../layouts/ShipmentStatus';
import ShipmentTable from '../layouts/ShipmentTable';
import ErrorMessage from '../layouts/ErrorMessage'; // Import the message layout component
import ShipmentStatusError from '../layouts/ShipmentStatusError'; // Import the message layout component
import useFetch from '../hooks/useFetch';


//const apiUrl = window?.configs?.apiUrl ? window.configs.apiUrl : "http://localhost:8080";

//const apiUrl = 'https://121a89eb-0982-4a78-89d0-f9edb0c2d9bd-dev.e1-us-cdp-2.choreoapis.dev/tracking-app/choreo-challengetracking-api/tracking-api-5c6/v1';


// const apiUrl = 'http://localhost:8080';

const apiUrl = '/choreo-apis/tracking-app/choreo-challengetracking-api/tracking-api-5c6/v1';




const ShipmentDetails = () => {
  const { track_num } = useParams();


  const url = `${apiUrl}/track/${track_num}`;
  
  console.log(url);
  const  {data, error}  = useFetch(url, {
  headers: {
      'API-Key': 'eyJraWQiOiJnYXRld2F5X2NlcnRpZmljYXRlX2FsaWFzIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIyZjliNjAyYi05NWQ1LTQ0MmYtYTQ2MC02MmQyYjg4MThhOTNAY2FyYm9uLnN1cGVyIiwiYXVkIjoiY2hvcmVvOmRlcGxveW1lbnQ6c2FuZGJveCIsImlzcyI6Imh0dHBzOlwvXC9zdHMuY2hvcmVvLmRldjo0NDNcL2FwaVwvYW1cL3B1Ymxpc2hlclwvdjJcL2FwaXNcL2ludGVybmFsLWtleSIsImtleXR5cGUiOiJTQU5EQk9YIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOm51bGwsIm5hbWUiOiJDaG9yZW8gQ2hhbGxlbmdlVHJhY2tpbmcgQXBpIC0gVHJhY2tpbmcgQVBJIiwiY29udGV4dCI6IlwvMTIxYTg5ZWItMDk4Mi00YTc4LTg5ZDAtZjllZGIwYzJkOWJkXC90cmFja2luZy1hcHBcL2Nob3Jlby1jaGFsbGVuZ2V0cmFja2luZy1hcGlcL3RyYWNraW5nLWFwaS01YzZcL3YxLjAiLCJwdWJsaXNoZXIiOiJjaG9yZW9fcHJvZF9hcGltX2FkbWluIiwidmVyc2lvbiI6InYxLjAiLCJzdWJzY3JpcHRpb25UaWVyIjpudWxsfV0sImV4cCI6MTcxNDUzNDc5OSwidG9rZW5fdHlwZSI6IkludGVybmFsS2V5IiwiaWF0IjoxNzE0NTM0MTk5LCJqdGkiOiI1NzAxYjM3Yi01NTI3LTRhMTQtOTkzMS1lNzc3ZTNkZTc2NzIifQ.RatqqzofDSMBrB49ilEAlBEa1tQ68hxXRk8-WrQtWoOlz537bWk1z8LceTMR8lMIVRUnL2v9DnD6AtdWY68m7tSlZ4XkNr7s9WdMKWWFXqR4jYhiG4YX-1mGySD7pXSvanG2Lt62RU1Z4hSKoskL0GSQI12Ac71tFEJUcLK7iNGjUQzxCo1l86tT8gvFml94E2OakzF2SpuLtJmAqBEBQFh50DLNKPTrX70LAU8BuGcJgdz-H2eiLRPvWkEIvaIXTH_6S0EtgnGXCYqzz4v35I0qDRywnhOnz9IeYjrvVNFMqWucSlfM41wTJFoB0Btt6SsUUoHyqg5LVGh4To5JY_gjXHDZ6Yb1xPeEOtK6wFBSU2_vG95fXIicB02pujc6WNT4eDX90pwwi660uIqbeBxE0-yWy_hu6eeQq2wSdFMpFStjpMepdzMqCbzS5WD3Aniqh5xi4GgT621CLxevKpaajvk9IXIu7i6yZq9aeyiqXlmxCAEx1JDlj3sU4uZ-PDlK3Lp7rS-bgNbE81ZWGwIMdjLv4IWH6y11q6_PhlKFF802-uef9iXbcTQ9EvVeF1mf4bm3RzLSxqeUIkAGdcWzNXiJAX12KjeHO4hPwiPvhsesD6ryDPlHvEe7f8Q8hLmfGPqZTXYx6nItjF_vUjNqaRV2q1upUzHxR29nFdE',
      'Accept':'application/json'    }
  
  });

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
