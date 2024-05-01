import StyledPage from './StyledPage';
import { useTranslation } from 'react-i18next';

const SignIn = () => {
  const { t } = useTranslation();

  return (
    <StyledPage className='SignIn'>
      <h1>{t('SignInPage.title')}</h1>
      <button onClick={() => {window.location.href="/auth/login"}}>Login</button>
    </StyledPage>
  );
};

export default SignIn;
