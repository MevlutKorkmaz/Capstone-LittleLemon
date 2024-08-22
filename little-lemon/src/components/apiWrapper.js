// apiWrapper.js
export function fetchAvailableTimes(date) {
  if (typeof fetchAPI === 'function') {
    return fetchAPI(date);
  } else {
    console.error("fetchAPI is not defined. Make sure the external script is loaded.");
    return [];
  }
}

export function submitBooking(formData) {
  if (typeof submitAPI === 'function') {
    return submitAPI(formData);
  } else {
    console.error("submitAPI is not defined. Make sure the external script is loaded.");
    return false;
  }
}
