import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import StyledPage from './StyledPage';
import ShipmentStatus from '../layouts/ShipmentStatus';
import ShipmentTable from '../layouts/ShipmentTable';
import ErrorMessage from '../layouts/ErrorMessage'; // Import the message layout component
import ShipmentStatusError from '../layouts/ShipmentStatusError'; // Import the message layout component
import useFetch from '../hooks/useFetch';


//const apiUrl = window?.configs?.apiUrl ? window.configs.apiUrl : "http://localhost:8080";

const apiUrl = 'https://be858289-8f36-4453-baf1-92ce88cf27ce-dev.e1-us-cdp-2.choreoapis.dev/test-tracking-system/test-tracking-api/tracking-api-5c6/v1.0';

// const apiUrl = 'http://localhost:8080';

//const apiUrl = '/choreo-apis/test-tracking-system/test-tracking-api/tracking-api-5c6/v1';




const ShipmentDetails = () => {
  const { track_num } = useParams();


  const url = `${apiUrl}/track/${track_num}`;
  
  console.log(url);
  const  {data, error}  = useFetch(url, {
    headers: {
      'API-Key': 'eyJraWQiOiJnYXRld2F5X2NlcnRpZmljYXRlX2FsaWFzIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI2YWQ3YTU1My1jN2MyLTRhMTAtOWJhNy0xZGIyZjllM2UyZTZAY2FyYm9uLnN1cGVyIiwiYXVkIjoiY2hvcmVvOmRlcGxveW1lbnQ6c2FuZGJveCIsImlzcyI6Imh0dHBzOlwvXC9zdHMuY2hvcmVvLmRldjo0NDNcL2FwaVwvYW1cL3B1Ymxpc2hlclwvdjJcL2FwaXNcL2ludGVybmFsLWtleSIsImtleXR5cGUiOiJTQU5EQk9YIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOm51bGwsIm5hbWUiOiJ0ZXN0IHRyYWNraW5nIGFwaSAtIFRyYWNraW5nIEFQSSIsImNvbnRleHQiOiJcL2JlODU4Mjg5LThmMzYtNDQ1My1iYWYxLTkyY2U4OGNmMjdjZVwvdGVzdC10cmFja2luZy1zeXN0ZW1cL3Rlc3QtdHJhY2tpbmctYXBpXC90cmFja2luZy1hcGktNWM2XC92MS4wIiwicHVibGlzaGVyIjoiY2hvcmVvX3Byb2RfYXBpbV9hZG1pbiIsInZlcnNpb24iOiJ2MS4wIiwic3Vic2NyaXB0aW9uVGllciI6bnVsbH1dLCJleHAiOjE3MTQ1MjY3MDUsInRva2VuX3R5cGUiOiJJbnRlcm5hbEtleSIsImlhdCI6MTcxNDUyNjEwNSwianRpIjoiNDgyZDAxYWQtYmQ3ZC00MjQ4LTgwOTctODY2YjM3NjcyODUzIn0.aIfIEgy--bbFEcVufglF0DE_qQLiX9ED7IWCeiRslXPHbFgaQ1M-1Am33TSf0zqJ6wkDu2mj-GCxjRxioJWhZa0i5bQyYrkz8x7aO5in6PdE1jVoQhOjneMN4xOfrnAKpsx4igXkNV4rpXTdXz5pDz3qdWtMB-CSl9TRhvPWil8Myrj1oD3zN5DuajF5MyMEoVhYwOFp5Oc1eUoNxqv6sl7dOcUF9C3WNA-LM3MVexkN_75Y63N8xoPTAnuEwrWwpj4Rb-BsZckWAl_IBNQMskuF5JhBM_cIqF_Lw_ykiBTQhqx-kvpn1ofVJ6K1JrqLD0z4lVdb1TfxZBZR6okp4xPWENXbz4tD433EdWfv756R5vhUWVJe0n0g1tlVfejD7G7Np402qk5zRPG7z3AEKMa_WAUxgJG2OJKxoaNM6XLaDruGg_RujoI4d-LUnz6Di6OxEVYDjusm6IETpvZc2hLr9AuR0zjT_c6Xp6BFr_QOMbh_hhaalIH08vuZp2vpsg134vSsyIU4K_MRUXwWgVaIofHnJ6n4faTHvgqdevx76P0Hl1PElanj0BM8dqrm7UNANwJlsHlvBw38BNYV5maagho8c0GztuYmU8F9sf1NlhdKb34ojgBje1HItjvbyDmfEyW4reWAorDzj0YUBfjtkrlVwhTFCW6tdAqhSd8'
    }
  }
  );

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
