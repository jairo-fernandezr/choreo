import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Wrapper from './Wrapper';
import enlogo from '../../assets/images/logo_en_white.svg';
import facebook from '../../assets/images/facebook.svg';
import twitter from '../../assets/images/twitter.svg';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const handleClick = (anchorTo) => {
    window.scrollTo(0, 0);
    const clickedLink = document.querySelector(`li.${anchorTo}`);
    const allListItems = document.querySelectorAll('.nav-menu li');
    allListItems.forEach((listItem) => (listItem.style.borderTop = '5px solid transparent'));
    clickedLink.style.borderTop = '5px solid var(--redTxtClr)';
  };

  return (
    <StyleFooter className='Footer'>
      <Wrapper>
        <div className='footer-links'>
          <div>           
            <Link className='logo' to='/'>
          		<img onClick={handleClick} src={enlogo} alt='logo' />
        	</Link>
            <p>help@raportdelivery.com</p>
            <ul>
              <li>
                <a href='/'>
                  <img src={facebook} alt='facebook-icon' />
                </a>
              </li>
              <li>
                <a href='/'>
                  <img src={twitter} alt='twitter-icon' />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p>{t('Footer.title')}</p>
            <ul>

              <li onClick={() => handleClick('tracking-shipment')}>
                <Link to='/tracking-shipment'>{t('Navigation.TrackingShipment')}</Link>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
      <div className='copy-right'>
        <p>{t('Footer.Copyright')}</p>
      </div>
    </StyleFooter>
  );
};

export default Footer;

const StyleFooter = styled.footer`
  background-color: var(--darkGrayClr);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  .footer-links {
    padding: 4rem 0;
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    @media (min-width: 770px) {
      flex-direction: row;
      width: 100%;
      align-items: flex-start;
    }
  }
  .footer-links div:first-child {
    margin-bottom: 2rem;
    @media (min-width: 770px) {
      width: 60%;
    }
    img[alt='logo'],
    p {
      margin-bottom: 1rem;
    }
    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
      width: 50%;
      @media (min-width: 770px) {
        width: 10%;
      }
      a {
        border-radius: 4px;
        width: 30px;
        height: 25px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 5px;
        background: var(--lightGrayClr);
        img {
          width: 95%;
        }
      }
    }
  }

  .footer-links div:last-child {
    @media (min-width: 770px) {
      width: 40%;
    }
    p {
      margin-bottom: 1rem;
      color: var(--redTxtClr);
      font-size: 24px;
    }
    li {
      list-style: none;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }

  .copy-right {
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    background: #000000;
  }
  
  .logo {
    width: 120px;
    img {
      display: block;
      width: 15%;
    }
  }
`;
