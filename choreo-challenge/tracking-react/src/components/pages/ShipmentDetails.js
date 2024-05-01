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
      'API-Key': 'eyJraWQiOiJnYXRld2F5X2NlcnRpZmljYXRlX2FsaWFzIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI2YWQ3YTU1My1jN2MyLTRhMTAtOWJhNy0xZGIyZjllM2UyZTZAY2FyYm9uLnN1cGVyIiwiYXVkIjoiY2hvcmVvOmRlcGxveW1lbnQ6c2FuZGJveCIsImlzcyI6Imh0dHBzOlwvXC9zdHMuY2hvcmVvLmRldjo0NDNcL2FwaVwvYW1cL3B1Ymxpc2hlclwvdjJcL2FwaXNcL2ludGVybmFsLWtleSIsImtleXR5cGUiOiJTQU5EQk9YIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOm51bGwsIm5hbWUiOiJ0ZXN0IHRyYWNraW5nIGFwaSAtIFRyYWNraW5nIEFQSSIsImNvbnRleHQiOiJcL2JlODU4Mjg5LThmMzYtNDQ1My1iYWYxLTkyY2U4OGNmMjdjZVwvdGVzdC10cmFja2luZy1zeXN0ZW1cL3Rlc3QtdHJhY2tpbmctYXBpXC90cmFja2luZy1hcGktNWM2XC92MS4wIiwicHVibGlzaGVyIjoiY2hvcmVvX3Byb2RfYXBpbV9hZG1pbiIsInZlcnNpb24iOiJ2MS4wIiwic3Vic2NyaXB0aW9uVGllciI6bnVsbH1dLCJleHAiOjE3MTQ1Mjg4MTIsInRva2VuX3R5cGUiOiJJbnRlcm5hbEtleSIsImlhdCI6MTcxNDUyODIxMiwianRpIjoiNjMyOTU1NDYtNDA5ZS00M2M3LWIxZTUtYzc5YTM0Y2NhMGZlIn0.Gs8UDwdVgHENUrGbSGdA1SDIjZL-J5p_DUH1RAmA7V_ibGyIurDmXMqut9vD9hIV1ttt4IkaocH-0dSE8d-hsHBcBlpC55GklQdYgDdHQybC-5bEzisTlLzdBZx3SYfEY4LqEsSwuWxJhgG6KaLyerwohvWslq8-IC9Gv5vRMx-FxvKypyQ9cpOkmdY02uXkW1chBApKlocaskmF2cvB5rKrzDh_eTXqh8KBcPR-7DtMufgOU_ryli8rIRht80YI-wa6uRN5FyfLdSalxQOaxFyps8yUjKgxSAAFAt8WSYTefc8d0lWTTjcRvnKs4oxohhqa9bKFdn4g4J2n8pB2quRgKOlvQhMXibxgh5-QtZL9l4tPL3a8qksmUCwkiKogM1ofd4QWinSdEhBaY3_T4CgYimBcCdkBRpf_I8YKBrfLyMuIZB1fDqn2ohtVsscFqkCz9lGrdOiRuN2TSiAE_Y8gmWx9LpkuA_mqix6zqpGdoNbWuY_Rs0yNepuQPdpOHPcXO-bG_hh_6_02dYi5M3QtTVVHw2nOHn1ex5y2rlHco2peuo7yS2OEzQlusqeb27wK_y1EohI49-j7djLOJbGC8gUJSKORolQUHO5D_aDzcYg3Xkmy2y761KrvMVgz-ByRHXSIbjCmqdQRvPA-0tssCeqzILDKFSuQQHugS_w'
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
