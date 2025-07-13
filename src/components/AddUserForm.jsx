import React, { Fragment } from 'react';

// Artificial delay for Suspense fallback demo
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
await sleep(2000);

const AddUserForm = () => {
  return (
    <Fragment>
      <h2>Add New User</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" />
        </div>
        <button type="submit">Add User</button>
      </form>
    </Fragment>
  );
};

export default AddUserForm;