function debounce(fn, delay) {
  let timeout = null;

  function debounced(...args) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(fn.bind(this, ...args), delay);
  }

  debounced.clear = () => clearTimeout(timeout);

  return debounced;
}
