function debounce(fn, time) {
  let timeout = null;

  function debounced(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(fn.bind(this, ...args), time);
  }

  debounced.clear = () => clearTimeout(timeout);

  return debounced;
}
