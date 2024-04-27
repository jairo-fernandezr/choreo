import styled from 'styled-components';
import cardImg from '../../assets/images/card-img.jpg';
import { useTranslation } from 'react-i18next';

const ShipmentTable = ({ data: shipmentData, message }) => {
  const { t, i18n } = useTranslation();

  return (
    <ShipmentTableLayout className='ShipmentTable'>
      <section className='table-section'>
      	<div align="center">
      	<h1>{message}</h1>
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
