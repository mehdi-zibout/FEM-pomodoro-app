onmessage = (e) => {
  console.log("Message received from main script");
  let remaining = e.data;
  setTimeout(() => {
    remaining -= 1 / 60;
    postMessage(remaining);
  }, 1000);
};
