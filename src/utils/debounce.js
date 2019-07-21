export default function debounce(func, wait) {
    let timeout;
    return function debounced(...args) {
      const _this = this;
  
      // if event is a React SyntheticEvent, call persist()
      // https://facebook.github.io/react/docs/events.html#event-pooling
      if (args[0] && args[0].persist && typeof args[0].persist === 'function') {
        args[0].persist();
      }
      const later = function later() {
        timeout = null;
        func.apply(_this, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }