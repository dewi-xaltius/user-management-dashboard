// Portal component for User Details modal
import ReactDOM from 'react-dom';
import React from 'react';

const UserDetails = ({ user }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <button onClick={() => alert(`More details about ${user.name} coming soon!`)}>More Info</button>
    </div>,
    document.getElementById('modal-root')
  );
};

export default UserDetails;
