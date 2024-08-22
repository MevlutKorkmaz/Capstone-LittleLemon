import React, { useReducer, useEffect } from 'react';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { fetchAvailableTimes, submitBooking } from './apiWrapper'; // assuming we are using apiWrapper.js

function initializeTimes() {
  const today = new Date();
  return fetchAvailableTimes(today) || [];
}

function updateTimes(state, action) {
  if (action.type === 'UPDATE_TIMES') {
    const availableTimes = fetchAvailableTimes(new Date(action.date));
    return availableTimes || [];
  }
  return state;
}

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const isSuccessful = submitBooking(formData);
    if (isSuccessful) {
      navigate('/confirmed');
    } else {
      alert('There was an error with your booking. Please try again.');
    }
  };

  useEffect(() => {
    dispatch({ type: 'UPDATE_TIMES', date: new Date().toISOString().split('T')[0] });
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />}
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;
