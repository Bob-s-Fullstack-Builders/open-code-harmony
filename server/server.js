const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;
const isDev = !process?.env?.PORT;

// In prod, static front end will be hosted separately
//   in dev, serve it
if (isDev) {
    app.use(express.static('frontend'));
}

app.listen(PORT, () => {
    console.log(`Submission API listening on port ${PORT}`);
});
