import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import StyledPage from './StyledPage';

const Home = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    window.scrollTo(0, 0);
    const allListItems = document.querySelectorAll('.nav-menu li');
    allListItems[0].style.borderTop = '5px solid transparent';
    allListItems[3].style.borderTop = '5px solid var(--redTxtClr)';
  };

  return (
    <HomePage className='Home'>
      <h1>{t('HomePage.title')}</h1>
      <h3>{t('HomePage.subTitle')} 👋</h3>
      <section>
        <header>{t('HomePage.sectionHeader')} ✔️</header>
        <div>
          <GoToLink onClick={handleClick}>
            <Link to={`/tracking-shipment/6636234`}>6636234</Link>
          </GoToLink>
          <GoToLink onClick={handleClick}>
            <Link to={`/tracking-shipment/7234258`}>7234258</Link>
          </GoToLink>
          <GoToLink onClick={handleClick}>
            <Link to={`/tracking-shipment/9442984`}>9442984</Link>
          </GoToLink>
          <GoToLink onClick={handleClick}>
            <Link to={`/tracking-shipment/1094442`}>1094442</Link>
          </GoToLink>
        </div>
      </section>
    </HomePage>
  );
};

export default Home;

const HomePage = styled(StyledPage)`
  flex-direction: column;
  h1 {
    margin: 6rem auto 1rem;
    @media (min-width: 768px) {
      margin: 0;
    }
  }
  h3 {
    font-size: 16px;
    margin: 0 auto 2rem;
    text-align: center;
    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
  section {
    width: 80%;
    text-align: center;
    header {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 1rem;
      color: var(--mediumGrayClr);
    }
    a {
      color: var(--mediumGrayClr);
      text-decoration: none;
      font-weight: bold;
      :hover {
        color: var(--successClr);
      }
    }
    @media (max-width: 338px) {
      padding-bottom: 2rem;
    }
  }
`;

const GoToLink = styled.p`
  &:nth-child(3) > a:hover {
    color: var(--redTxtClr);
  }
`;
