import React, { useState, useEffect } from 'react';
import getBrowserLocales from './getBrowserLocales';

function View() {
  const [password, setPassword] = useState(null);

  const myArrayOfObjects = JSON.parse(
    localStorage.getItem('password'),
  );

  useEffect(() => {
    const storedPassword = localStorage.getItem('password');
    setPassword(storedPassword);
  }, []);

  return (
    <div>
      {password ? (
        <div className="mb-4">
          <label className="dark: text-white block font-medium mb-2">
            Password:
          </label>
          <table className="table-auto w-full dark: border-white dark:text-white bg-stone-200 dark:bg-slate-700 rounded-lg border-solid ">
            <thead>
              <tr>
                <th className="px-4 py-2">Value</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {myArrayOfObjects.map(item => {
                const date = new Date(item.date);
                const options = {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: 'numeric'
                };
                const readableDate = date.toLocaleDateString(getBrowserLocales(), options);

                return (
                  <tr key={item.id}>
                    <td>{item.value}</td>
                    <td>{readableDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className='dark: text-white'>No password saved yet.</div>
      )}
    </div>
  );
}

export default View;