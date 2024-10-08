import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';
import UserList from './components/UserList';

const AddUserForm = lazy(() => import('./components/AddUserForm'));

function App() {
  return (
    <Router>
      <div className="App">
        <h1>User Management Dashboard</h1>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/add-user" element={<AddUserForm />} />
            <Route path="/" element={<UserList />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
