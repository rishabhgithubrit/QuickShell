import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
// import Card from './components/Card/Card';
import DashBoard from './components/DashBoard/DashBoard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllData } from './Actions/DataAction';
import Loading from './components/Loading/Loading';

const App = () => {
  const dispatch = useDispatch();
  const { allTickets, loading, error } = useSelector((state) => state.DataReducer);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div style={{ color: 'red', textAlign: 'center' }}>Error: {error.message || "Failed to load data"}</div>;
  }

  return (
    <div style={{ paddingTop: '10px' }}>
      <NavBar />
      <hr style={{ marginTop: '10px' }} />
      <DashBoard allTickets={allTickets} />
    </div>
  );
};

export default App;
