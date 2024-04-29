import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import StyledPage from './StyledPage';

const NotFound = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    window.scrollTo(0, 0);
    const allListItems = document.querySelectorAll('.nav-menu li');
    allListItems[0].style.borderTop = '5px solid var(--redTxtClr)';
  };

  return (
    <NotFoundPage className='NotFound'>
      <h1>😥</h1>
      <h2>{t('NotFoundPage.title')}</h2>
      <h3>404</h3>
      <div onClick={handleClick}>
        <Link to='/'>{t('NotFoundPage.button')}</Link>
      </div>
    </NotFoundPage>
  );
};

export default NotFound;

const NotFoundPage = styled(StyledPage)`
  flex-direction: column;
  h1 {
    font-size: 100px;
  }
  h2 {
    text-align: center;
    font-size: 42px;
    color: var(--redTxtClr);
  }
  h3 {
    font-size: 30px;
    color: var(--redTxtClr);
    margin-bottom: 1rem;
  }
  a {
    text-decoration: none;
    color: white;
    background: var(--redTxtClr);
    padding: 0.5rem 3rem;
    font-weight: bold;
    border-radius: 0.5rem;
  }
`;
