// UserList.js
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

const UserList = () => {
  const { data, status } = useQuery('users', fetchUsers);

  useEffect(() => {
    // Additional logic or side effects related to user data, if needed
  }, [data, status]);

  return (
    <div className="App">
      {status === 'error' && <p>Error fetching data</p>}
      {status === 'loading' && <p>Fetching data...</p>}
      {status === 'success' && (
        <div>
          {data.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
