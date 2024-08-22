import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test('Submit button is disabled if required fields are empty', () => {
  render(<BookingForm availableTimes={[]} dispatch={jest.fn()} submitForm={jest.fn()} />);

  const submitButton = screen.getByText(/submit reservation/i);
  expect(submitButton).toBeDisabled();
});

test('Submit button is enabled when all fields are valid', () => {
  render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={jest.fn()} submitForm={jest.fn()} />);

  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2023-09-01' } });
  fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '17:00' } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '2' } });
  fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

  const submitButton = screen.getByText(/submit reservation/i);
  expect(submitButton).toBeEnabled();
});

test('Form submits when all fields are valid', () => {
  const mockSubmitForm = jest.fn();

  render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={jest.fn()} submitForm={mockSubmitForm} />);

  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2023-09-01' } });
  fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '17:00' } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '2' } });
  fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

  fireEvent.click(screen.getByText(/submit reservation/i));

  expect(mockSubmitForm).toHaveBeenCalledTimes(1);
});
