import React, {useState, useEffect} from 'react';
import {SearchBox} from './components/SearchBox';
import {User} from './components/User';

export const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [changeIcon, setChangeIcon] = useState(false);
  //console.log(users);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
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
    <div className="m-auto w-full p-24">
      <h1 className="font-bold text-2xl text-center text-slate-700 mb-2">
        SearchBox Component
      </h1>
      <div className="w-fit m-auto h-full flex flex-col justify-center items-center border border-slate-300 ">
        <div className="main_container">
          <div className="input_container">
            <SearchBox
              changeIcon={changeIcon}
              setChangeIcon={setChangeIcon}
              handleFiltered={filterUsers}
            />
          </div>
          {users.length === 0 ? (
            <p className="text-center">Loading...</p>
          ) : (
            <div className="users_container">
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
