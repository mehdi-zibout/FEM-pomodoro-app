onmessage = (e) => {
  let remaining = e.data;
  setTimeout(() => {
    remaining -= 1 / 60;
    postMessage(remaining);
  }, 1000);
};
