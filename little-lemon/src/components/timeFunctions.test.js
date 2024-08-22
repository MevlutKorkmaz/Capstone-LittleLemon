import { initializeTimes, updateTimes } from './Main';

import { initializeTimes, updateTimes } from './Main';

// Mock fetchAPI
jest.mock('./apiWrapper', () => ({
  fetchAvailableTimes: jest.fn(),
}));

import { fetchAvailableTimes } from './apiWrapper';

test('initializeTimes returns correct initial times', () => {
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];

  // Mock fetchAPI to return expectedTimes
  fetchAvailableTimes.mockReturnValue(expectedTimes);

  const times = initializeTimes();
  expect(times).toEqual(expectedTimes);
});


test('updateTimes returns the updated times based on the date', () => {
  const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00'];
  const expectedTimes = ['17:00', '18:30', '19:30', '20:00', '21:00'];

  // Mock fetchAPI to return expectedTimes when called with the specified date
  fetchAvailableTimes.mockReturnValue(expectedTimes);

  const action = { type: 'UPDATE_TIMES', date: '2023-09-01' };
  const updatedTimes = updateTimes(initialState, action);
  expect(updatedTimes).toEqual(expectedTimes);
});

