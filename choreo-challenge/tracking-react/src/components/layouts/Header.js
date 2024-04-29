import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdOutlineMenu } from 'react-icons/md';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useResize from '../hooks/useResize';
import { useTranslation } from 'react-i18next';
import enlogo from '../../assets/images/logo_en_red.svg';


const Header = ({ openSearchBox, setOpenSearchBox }) => {
  const { t, i18n } = useTranslation();
  const { windowWidth } = useResize();
  const [openMenu, setOpenMenu] = useState(false);
  const allListItems = document.querySelectorAll('.nav-menu li');

  useEffect(() => {
  document.body.dir = 'ltr';

    /* detect the active link on first load for desktop */
    const pathName = window.location.pathname.slice(1);
    const homeLink = document.querySelector('.home-link');
    const allListItems = document.querySelectorAll('.nav-menu li');
    /* if home page */
    if (window.innerWidth >= 981 || windowWidth >= 981) {
      if (window.location.pathname === '/') {
        if (homeLink) {
          allListItems.forEach((listItem) => (listItem.style.borderTop = '5px solid transparent'));
          homeLink.style.borderTop = '5px solid var(--redTxtClr)';
        }
      }
      /* any other page */
      const setStatusOfActiveLinks = () => {
        allListItems.forEach((listItem) => {
          if (pathName !== '' && listItem.className.startsWith(pathName.substring(0, 5))) {
            listItem.style.borderTop = '5px solid var(--redTxtClr)';
          }
        });
      };
      /* if page not found */
      if (pathName === 'NotFound/404') allListItems.forEach((listItem) => (listItem.style.borderTop = '5px solid transparent'));
      setStatusOfActiveLinks();
    }
  });

  const handleClick = (e) => {
    window.scrollTo(0, 0);
    openMenu && setOpenMenu(!openMenu);

    const allListItems = document.querySelectorAll('.nav-menu li');
    const homeLink = document.querySelector('.home-link');
    const clickedElement = e.target.closest('li');
    /* activate the home link */
    if (e.target.alt === 'logo') {
      if (homeLink) {
        homeLink.style.borderTop = '5px solid var(--redTxtClr)';
        allListItems?.forEach((listItem) => {
          if (listItem !== homeLink) {
            listItem.style.borderTop = '5px solid transparent';
          }
        });
      }
    }
    /* activate the clicked link */
    if (clickedElement) {
      clickedElement.style.borderTop = '5px solid var(--redTxtClr)';
      allListItems.forEach((listItem) => {
        if (listItem !== clickedElement) {
          listItem.style.borderTop = '5px solid transparent';
        }
      });
    }
  };

  /* permanently remove active links on mobile menu */
  if (window.innerWidth < 981 || windowWidth < 981) {
    allListItems.forEach((listItem) => {
      listItem.style.borderTop = '5px solid transparent';
    });
  }

  const handleLanguage = (e) => {
    openMenu && setOpenMenu(!openMenu);
    i18n.changeLanguage('en-US');
      document.body.dir = 'ltr';
   
   /* if (e.target.textContent === 'عربي') {
      i18n.changeLanguage('ar');
      document.body.dir = 'rtl';
    } else {
      i18n.changeLanguage('en-US');
      document.body.dir = 'ltr';
    }
    */
  };

  const navMenu = (
    <div className='nav-menu'>
      <nav>
        <ul>
          <li onClick={handleClick} className='home-link'>
            <Link to='/'>{t('Navigation.Home')}</Link>
          </li>

        </ul>
        <ul>
          <li onClick={handleClick} className='home-link'>
            <Link to='/tracking-shipment'>{t('Navigation.TrackingShipment')}</Link>
          </li>

        </ul>
        <ul>
 
          <li className='column-rule'></li>
          <li onClick={handleClick} className='sign-in'>
            <Link to='/sign-in'>{t('Navigation.SignIn')}</Link>
          </li>
        </ul>
        <ul onClick={handleLanguage}>
          <span>{t('Navigation.lang')}</span>
        </ul>
      </nav>
    </div>
  );



  return (

    <StyledHeader>

      <div className='navbar'>

        <Link className='logo' to='/'>

          <img onClick={handleClick} src={enlogo} alt='logo' />
        </Link>
        <MenuIcon onClick={() => setOpenMenu(!openMenu)} />
      </div>
      {!openMenu && (window.innerWidth >= 981 || windowWidth >= 981) && navMenu}
      {openMenu && navMenu}
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background: white;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 2;
  @media (min-width: 981px) {
    flex-direction: row;
    justify-content: space-around;
  }

  .navbar {
    padding: 1.2rem 1.5rem;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 981px) {
      width: 15%;
    }
  }

  .logo {
    width: 120px;
    img {
      display: block;
      width: 100%;
    }
  }

  .nav-menu {
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    background-color: white;
    border-top: 4px solid var(--redTxtClr);
    z-index: 1;
    padding: 3rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    @media (min-width: 981px) {
      justify-content: flex-end;
      padding: 0rem;
      border-top: 0;
      box-shadow: none;
    }
  }


  .nav-menu ul > li:not(.column-rule) {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    list-style: none;
    padding: 0.3rem 0;
    border-bottom: 1px solid var(--borderBottomClr);
    font-size: 14px;
    @media (min-width: 981px) {
      border-top: 5px solid transparent;
      border-bottom: 0;
      font-size: 16px;
      transition: all 0.4s ease;
      &:hover {
        border-top: 5px solid var(--redTxtClr);
      }

    }
  }

  .nav-menu ul:last-child > li {
    width: 100%;
    border-bottom: 0;

  }

  .nav-menu nav ul {
    @media (min-width: 981px) {
      width: 30%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:nth-child(2) {
        width: 33%;
        @media (min-width: 1280px) {
          width: 28%;
        }
      }
    }

    a,
    ul:not(:last-child) li {
      color: var(--mediumGrayClr);
      text-decoration: none;
      font-weight: bold;
      width: 100%;
    }

    &:last-child {
      font-weight: bold;
      color: var(--redTxtClr);
      cursor: pointer;
      @media (min-width: 981px) {
        width: 6%;
      }
    }
  }

  .tracking-shipment {

    color: var(--mediumGrayClr);
    font-weight: bold;
    cursor: pointer;
    div {
      width: 100%;
      display: flex;
      align-items: center;
    }
  }

  nav {
    height: 100%;
    width: 100%;
    @media (min-width: 981px) {
      width: 90%;
      display: flex;
      justify-content: space-between;
    }
  }

  .column-rule {
    display: none;
    width: 1px;
    height: 16px;
    background-color: var(--lightGrayClr);
    @media (min-width: 981px) {
      display: block;

    }
  }
`;

const ArrowDownIcon = styled(MdKeyboardArrowDown, MdKeyboardArrowUp)`
  color: var(--redTxtClr);
  font-size: 30px;
`;
const ArrowUpIcon = styled(MdKeyboardArrowUp)`
  color: var(--redTxtClr);
  font-size: 30px;
`;

const MenuIcon = styled(MdOutlineMenu)`
  color: var(--redTxtClr);
  font-size: 30px;
  cursor: pointer;
  @media (min-width: 981px) {
    display: none;
  }
`;
