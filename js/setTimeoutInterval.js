"use strict";

const timer = setTimeout(() => {
  alert("Hello from past!");
}, 5000);

clearTimeout(timer);

const interval = setInterval(() => {
  alert("Hello from past every 5s!");
}, 5000);

clearInterval(interval);
