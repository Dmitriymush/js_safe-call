'use strict'

function safeCall(func) {
  let state;
  try {
    func();
    state = true;
  } catch (err) {
    state = false;
  }

  return state;
}
