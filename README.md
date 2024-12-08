# Firebase: Accessing Document Snapshot Before Promise Resolution

This repository demonstrates a common error when using the Firebase SDK: attempting to access properties of a document snapshot before the asynchronous `get()` operation has completed.

The `bug.js` file shows how this error occurs, leading to undefined values.  The `bugSolution.js` file provides the correct solution using async/await or `.then()` to ensure the promise resolves before accessing properties.

## Steps to Reproduce

1. Clone this repository.
2. Install the Firebase SDK: `npm install firebase`
3. Configure your Firebase project (add your credentials).
4. Run `bug.js` to see the error.
5. Run `bugSolution.js` to see the corrected behavior.
