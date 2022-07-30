import Lupa from '../assets/lupa.svg';
import Clear from '../assets/clear.svg';
import {useState} from 'react';

export const SearchBox = ({changeIcon, setChangeIcon, filterUsers}) => {
  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (e) => {
    filterUsers(e.target.value);
    setInputValue(e.target.value);

    if (e.target.value) {
      setChangeIcon(true);
    }

    if (e.target.value === '') {
      setChangeIcon(false);
    }
  };

  const handleClick = () => {
    setChangeIcon(false);
    setInputValue('');
    filterUsers('');
  };

  return (
    <div className="p-2 relative">
      <input
        className="block bg-white w-full border border-slate-300 rounded-md pr-9 py-2 pl-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        type="text"
        value={inputValue}
        onChange={(e) => handleOnChange(e)}
      />
      {changeIcon ? (
        <img
          className="absolute top-3 right-3 w-7 h-7 cursor-pointer"
          src={Clear}
          alt="Clear Icon"
          onClick={handleClick}
        />
      ) : (
        <img
          className="absolute top-3 right-3 w-7 h-7"
          src={Lupa}
          alt="Lupa Icon"
        />
      )}
    </div>
  );
};
