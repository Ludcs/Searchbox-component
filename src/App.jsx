import React, {useState, useEffect} from 'react';
import {SearchBox} from './components/SearchBox';
import {User} from './components/User';

export const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [changeIcon, setChangeIcon] = useState(false);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
        setFilteredUsers(data.results);
      });
  }, []);

  const filterUsers = (searchString) => {
    const filtered = users.filter((user) =>
      user.name.first.includes(searchString)
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="m-auto w-64 h-full flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl text-center text-slate-700 mb-2">
        Searchbox Users
      </h1>
      <div className="w-full border border-slate-300 ">
        <div>
          <div className="input_container">
            <SearchBox
              changeIcon={changeIcon}
              filterUsers={filterUsers}
              setChangeIcon={setChangeIcon}
            />
          </div>
          {users.length === 0 ? (
            <div className="h-[338px]">
              <p className="text-center">Loading...</p>
            </div>
          ) : (
            <div className="h-[338px]">
              {filteredUsers.length === 0 ? (
                <p className="text-center">No matches</p>
              ) : (
                filteredUsers.map((user, index) => (
                  <User key={index} name={user.name.first} />
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
