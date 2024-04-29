import StyledPage from './StyledPage';
import { useTranslation } from 'react-i18next';

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <StyledPage className='Pricing'>
      <h1>{t('PricingPage.title')}</h1>
    </StyledPage>
  );
};

export default Pricing;
