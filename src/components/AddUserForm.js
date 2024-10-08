import React, { Fragment } from 'react';

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
