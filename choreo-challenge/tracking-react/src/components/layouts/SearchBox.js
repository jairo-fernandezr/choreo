import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { MdSearch } from 'react-icons/md';

const SearchBox = ({ className, openSearchBox, setOpenSearchBox }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [inputTrackNo, setInputTrackNo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenSearchBox && setOpenSearchBox(!openSearchBox);
    const availableTrackNumbers = ['6636234', '7234258', '9442984', '1094442'];
    if (inputTrackNo == '') navigate('/tracking-shipment');
    if (inputTrackNo != '' && !availableTrackNumbers.find((num) => num === inputTrackNo)) navigate('/NotFound/404');
    if (availableTrackNumbers.find((num) => num === inputTrackNo)) navigate(`/tracking-shipment/${inputTrackNo}`);
  };

  return (
    <StyledSearchBox className={className} lang={i18n.language}>
      <h2>{t('SearchBox.title')}</h2>
      <p>{t('SearchBox.text')}</p>
      <form className='search-field' onSubmit={handleSubmit}>
        <input value={inputTrackNo} onChange={(e) => setInputTrackNo(e.target.value)} type='search' placeholder={t('SearchBox.input')} />
        <button type='submit'>
          <SearchIcon />
        </button>
      </form>
    </StyledSearchBox>
  );
};

export default SearchBox;

const StyledSearchBox = styled.div`
  width: ${({ className }) => (className === 'small-box' ? '350px' : '600px')};
  background-color: ${({ className }) => (className === 'small-box' ? '#fafafa' : 'white')};
  box-shadow: ${({ className }) => (className === 'small-box' ? '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)' : '0px 4px 8px #dedede')};
  padding: ${({ className }) => (className === 'small-box' ? '1.5rem' : '2rem')};
  border-radius: ${({ className }) => (className === 'small-box' ? '0' : '10px')};
  margin: ${({ className }) => (className === 'small-box' ? '77px auto 0' : '-3rem auto 0')};
  @media (min-width: 981px) {
    position: relative;
    left: '11%';
    padding: 7rem;
  }
  h1 {
    color: var(--blackTxtClr);
    font-size: 24px;
  }
  h2 {
    color: var(--blackTxtClr);
    font-size: 42px;
  }
  
  p {
    margin: ${({ className }) => (className === 'small-box' ? '-5px 0 20px' : '10px 0 20px')};
    color: #5e5e5e;
  }
  .search-field {
    width: 302px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      width: 85%;
      padding: 10px;
      border: 1px solid var(--lightGrayClr);
      border-radius: 5px;
      font-size: 16px;
    }
    button {
      border: 0;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      border-radius: 50%;
      background: var(--redTxtClr);
    }
  }
`;

const SearchIcon = styled(MdSearch)`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
