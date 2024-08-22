import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
  return (
    <main>
      <h1>Book a Table</h1>
      <p>Fill in the form below to reserve your table.</p>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </main>
  );
};

export default BookingPage;
