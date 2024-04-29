import styled from 'styled-components';
import cardImg from '../../assets/images/card-img.jpg';
import { useTranslation } from 'react-i18next';

const ShipmentTable = ({ data: shipmentData }) => {
  const { t, i18n } = useTranslation();

  return (
    <ShipmentTableLayout className='ShipmentTable'>
      <section className='table-section'>
        <h3 className='title'>{t(`shipmentData.ShipmentDetailsTitle`)}</h3>
        <div className='table'>
          {/* the table header */}
          <ul className='thead'>
            <li>{t(`shipmentData.table.branch`)}</li>
            <li>{t(`shipmentData.table.date`)}</li>
            <li>{t(`shipmentData.table.time`)}</li>
            <li>{t(`shipmentData.table.details`)}</li>
          </ul>
          {/* CREATED STATE */}
          <ul>
            <li>{t(`${shipmentData?.TrackingNumber}.TransitEvents.TICKET_CREATED.hub`)}</li>
            <li>{shipmentData?.CreateDate.slice(0, 10)}</li>
            <li>{shipmentData?.CreateDate.slice(11, 16)}</li>
            <li>{t(`shipmentData.table.created`)}</li>
          </ul>
          {/* RECEIVED STATE */}
          <ul>
            <li>{t(`${shipmentData?.TrackingNumber}.TransitEvents.PACKAGE_RECEIVED.hub`)}</li>
            <li>{shipmentData?.TransitEvents.find((transit) => transit.state === 'PACKAGE_RECEIVED').timestamp.slice(0, 10)}</li>
            <li>{shipmentData?.TransitEvents.find((transit) => transit.state === 'PACKAGE_RECEIVED').timestamp.slice(11, 16)}</li>
            <li>{t(`shipmentData.table.received`)}</li>
          </ul>
          {/* OUT_FOR_DELIVERY STATE */}
          <ul>
            <li>{t(`${shipmentData?.TrackingNumber}.TransitEvents.OUT_FOR_DELIVERY.hub`)}</li>
            <li>{shipmentData?.TransitEvents.find((transit) => transit.state === 'OUT_FOR_DELIVERY').timestamp.slice(0, 10)}</li>
            <li>{shipmentData?.TransitEvents.find((transit) => transit.state === 'OUT_FOR_DELIVERY').timestamp.slice(11, 16)}</li>
            <li>{t(`shipmentData.table.out`)}</li>
          </ul>
          {/* DELIVERED STATE */}
          <ul>
            <li>{t(`${shipmentData?.TrackingNumber}.TransitEvents.DELIVERED.hub`)}</li>
            <li>{shipmentData?.TransitEvents.find((transit) => transit.state === 'DELIVERED').timestamp.slice(0, 10)}</li>
            <li>{shipmentData?.TransitEvents.find((transit) => transit.state === 'DELIVERED').timestamp.slice(11, 16)}</li>
            <li>
              <p>{i18n.language === 'en-US' ? shipmentData?.CurrentStatus.state.replaceAll("_", " ") : t(`${shipmentData?.TrackingNumber}.CurrentStatus.state`)}</p>
              <p className='stateClr'>
                {/*  shipment cancelation reason */}
                {i18n.language === 'ar' &&
                  shipmentData?.CurrentStatus.state === 'DELIVERED_TO_SENDER' &&
                  shipmentData?.TransitEvents.find((transit) => transit.state === 'WAITING_FOR_CUSTOMER_ACTION')?.reason}
                {i18n.language === 'en-US' && shipmentData?.CurrentStatus.state === 'DELIVERED_TO_SENDER' && t(`${shipmentData?.TrackingNumber}.CancelationReason`)}
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className='address-section'>
        <h3 className='title'>{t('shipmentData.DeliveryAddress')}</h3>
        <p className='address'>{t('shipmentData.AddressText')}</p>
        <div className='card'>
          <div>
            <p>{t('shipmentData.Question')}</p>
            <button>{t('shipmentData.QuestionBtn')}</button>
          </div>
          <img src={cardImg} alt='card image' />
        </div>
      </section>
    </ShipmentTableLayout>
  );
};

export default ShipmentTable;

const ShipmentTableLayout = styled.div`
  width: 90%;
  margin: 1rem auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  .table-section {
    width: 100%;
    @media (min-width: 768px) {
      width: 65%;
    }
  }

  .address-section {
    width: 100%;
    @media (min-width: 768px) {
      width: 35%;
    }
  }

  .title {
    color: var(--darkGrayClr);
    margin: 1rem 0;
  }

  .table {
    border-radius: 7px;
    border: 1px solid #eee;
    overflow: hidden;
    font-size: 10px;
    @media (min-width: 420px) {
      font-size: 12px;
    }
    @media (min-width: 576px) {
      font-size: 14px;
    }
  }

  .table > ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 2fr;
    padding: 0.5rem;
    @media (min-width: 576px) {
      padding: 1rem;
    }
    &:first-child {
      background: #eee;
      color: var(--mediumGrayClr);
      font-weight: bold;
    }
  }

  .address,
  .card {
    max-width: 350px;

    border-radius: 7px;
  }

  .address {
    padding: 1rem;
    background: #eee;
    color: var(--darkGrayClr);
  }

  .card {
    padding: 0.5rem;
    display: flex;
    justify-content: space-around;
    border: 1px solid #eee;
    margin-top: 1rem;
    img {
      display: inline-block;
      width: 35%;
    }

    div {
      text-align: center;
      color: red;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-right: 0.5rem;
    }

    p {
      font-size: 14px;
      font-weight: bold;
      width: 100%;
      color: var(--darkGrayClr);
    }

    button {
      margin: 0.5rem 0;
      padding: 0.2rem 1rem;
      background: var(--redTxtClr);
      color: white;
      border: 0;
      border-radius: 10px;
      font-family: inherit;
      cursor: pointer;
    }
  }
`;
