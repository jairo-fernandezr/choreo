import { MdLocalShipping, MdCheck, MdFactCheck } from 'react-icons/md';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const ShipmentStatus = ({ data: shipmentData }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const stateTxts = document.querySelectorAll('.stateClr');
    stateTxts.forEach((stateTxt) => {
    stateTxt.style.color = '#dadada';
    });

    const stateBars = document.querySelectorAll('.state-bar');
    stateBars.forEach((stateBar) => {
	    stateBar.style.background = '#dadada';
		stateBars[2].style.background = '#eee';

    });
  });

  return (
    <ShipmentStatusLayout className='shipment-status'>
      <div className='details'>
        <ul>
          <li>
            {t(`shipmentData.TrackingNumber`)} {shipmentData?.TrackingNumber}
          </li>
          <li className='stateClr'>{i18n.language === 'en-US' ? shipmentData?.CurrentStatus.state.replaceAll("_", " ") : t(`${shipmentData?.TrackingNumber}.CurrentStatus.state`)}</li>
        </ul>
        <ul>
          <li>{t(`shipmentData.LastUpdate`)}</li>
          <li>{shipmentData?.CurrentStatus.timestamp.slice(0, 10)}</li>
        </ul>
        <ul>
          <li>{t(`shipmentData.Merchant`)}</li>
          <li>ABC.COM</li>
        </ul>
        <ul>
          <li>{t(`shipmentData.DeliveryTime`)}</li>
          <li>{shipmentData?.CurrentStatus.timestamp.slice(0, 10)}</li>
        </ul>
      </div>

      <div className='horizontal-rule'></div>

      <div className='shipment-track'>
        <div className='state'>
          <div className='state-bar'></div>
          <div className='iconTxt'>
            <IconContainer className='icon' backClr={'black'}>
              <CheckIcon />
            </IconContainer>
            <p className='txt'>{t(`shipmentData.ShipmentCreated`)}</p>
          </div>
        </div>
        <div className='state'>
          <div className='state-bar'></div>
          <div className='iconTxt'>
            <IconContainer className='icon' backClr={'black'}>
              <CheckIcon />
            </IconContainer>
            <p className='txt'>{t(`shipmentData.MerchantRecieve`)}</p>
          </div>
        </div>
        <div className='state'>
          <div className='state-bar'></div>
          <div className='iconTxt'>
            <IconContainer
              className='icon'
              backClr={shipmentData?.CurrentStatus.state === 'DELIVERED' ? 'green' : 'red'}
              size={shipmentData?.CurrentStatus.state === 'DELIVERED' ? 'sm' : 'lg'}
              margin={shipmentData?.CurrentStatus.state === 'DELIVERED' ? '' : 'marginLeft'}
            >
              {shipmentData?.CurrentStatus.state === 'DELIVERED' ? <CheckIcon /> : <ShippingTruckIcon size={'lg'} />}
            </IconContainer>
            <div className='deliveryReason'>
              <p className='txt'>{t(`shipmentData.ShipmentDelivery`)}</p>
              <p style={{ fontSize: '10px', margin: '0 10px' }} className='stateClr'>
                {/*  shipment cancelation reason */}
                {i18n.language === 'ar' &&
                  shipmentData?.CurrentStatus.state === 'DELIVERED_TO_SENDER' &&
                  shipmentData?.TransitEvents.find((transit) => transit.state === 'WAITING_FOR_CUSTOMER_ACTION')?.reason.slice(0, 5)}
                {i18n.language === 'en-US' && shipmentData?.CurrentStatus.state === 'DELIVERED_TO_SENDER' && t(`${shipmentData?.TrackingNumber}.CancelationReason`).slice(0, 12)}
              </p>
            </div>
          </div>
        </div>
        <div className='state'>
          <div className='iconTxt'>
            <IconContainer
              className='icon'
              backClr={shipmentData?.CurrentStatus.state === 'DELIVERED' ? 'green' : 'white'}
              size={shipmentData?.CurrentStatus.state === 'DELIVERED' ? 'sm' : 'lg'}
              border={shipmentData?.CurrentStatus.state === 'DELIVERED' ? '' : 'bordered'}
              margin={shipmentData?.CurrentStatus.state === 'DELIVERED' ? '' : 'marginLeft'}
            >
              {shipmentData?.CurrentStatus.state === 'DELIVERED' ? <CheckIcon /> : <DeliveredIcon size={'lg'} />}
            </IconContainer>
            <p className='txt'>{t(`shipmentData.SentHanded`)}</p>
          </div>
        </div>
      </div>
    </ShipmentStatusLayout>
  );
};

export default ShipmentStatus;

const ShipmentStatusLayout = styled.div`
  width: 90%;
  margin: 0 auto;
  border: 1px solid #eee;
  border-radius: 10px;

  .details,
  .shipment-track {
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    @media (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .details {
    padding: 1rem;
    gap: 1rem;
    ul {
      list-style: none;
      font-weight: bold;
      li:first-child {
        color: var(--mediumGrayClr);
        font-size: 14px;
      }
      li:last-child {
        color: var(--blackTxtClr);
        @media (min-width: 768px) and (max-width: 1144px) {
          font-size: 14px;
        }
      }
    }
  }

  .horizontal-rule {
    width: 100%;
    height: 1px;
    background: #eee;
  }

  .shipment-track {
    height: 50vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    @media (min-width: 768px) {
      padding: 2rem 1rem 1rem;
      height: auto;
      flex-direction: row;
    }

    .state {
      position: relative;
      height: 100px;
      display: flex;
      @media (min-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
      }

      .iconTxt {
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 12px;
        font-weight: bold;
        p.txt {
          margin: 0 10px;
        }
        @media (min-width: 768px) {
          display: block;
          text-align: center;
          width: 100%;
          p.txt {
            max-width: 150px;
            margin: 0 auto;
          }
        }
        @media (max-width: 420px) {
          font-size: 10px;
        }
      }

      .state-bar {
        width: 5px;
        height: 100%;
        margin: 0 12px;
        position: absolute;
        top: 50%;
        z-index: -10;
        @media (min-width: 768px) {
          width: 100%;
          height: 5px;
          margin: 0;
          position: absolute;
          top: 12%;
          right: ${() => (document.body.dir === 'ltr' ? '-50%' : '50%')};
          left: ${() => (document.body.dir === 'rtl' ? '-50%' : '50%')};
        }
      }
    }
  }

  @media (max-width: 472px) {
    .shipment-status,
    .shipment-track {
      margin: 0;
      width: 100%;
    }
  }
`;

const CheckIcon = styled(MdCheck)`
  color: white;
  font-size: 20px;
`;

const ShippingTruckIcon = styled(MdLocalShipping)`
  padding: 0.5rem;
  color: ${({ size }) => (size === 'sm' ? '#eee' : 'white')};
`;

const DeliveredIcon = styled(MdFactCheck)`
  padding: 0.3rem;
  color: ${({ size }) => (size === 'lg' ? '#eee' : 'white')};
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: ${({ size }) => (size === 'lg' ? '46px' : '30px')};
  height: ${({ size }) => (size === 'lg' ? '46px' : '30px')};
  background: ${({ backClr }) => (backClr === 'black' ? '#dadada' : 'var(--redTxtClr)')};
  background: ${({ backClr }) => (backClr === 'white' ? '#dadada' : '')};
  border: ${({ border }) => (border === 'bordered' ? '2px solid #eee' : '0')};
  margin-left: ${({ size, margin }) => (size === 'lg' && margin === 'marginLeft' && document.body.dir === 'ltr' ? '-8px' : '0')};
  margin-right: ${({ size, margin }) => (size === 'lg' && margin === 'marginLeft' && document.body.dir === 'rtl' ? '-8px' : '0')};
  @media (min-width: 768px) {
    margin: 0 auto;
    margin-top: ${({ size }) => (size === 'lg' ? '-8px' : '0')};
  }
`;
