import StyledPage from './StyledPage';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <StyledPage className='Contact'>
      <h1>{t('ContactSalesPage.title')}</h1>
    </StyledPage>
  );
};

export default Contact;
