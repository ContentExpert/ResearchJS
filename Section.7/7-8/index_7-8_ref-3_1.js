var eternalLoop = function() {
  return eternalLoop();
}

eternalLoop(); // Uncaught RangeError: Maximum call stack size exceeded
