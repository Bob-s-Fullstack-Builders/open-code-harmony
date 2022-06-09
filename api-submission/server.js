const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Submission API listening on port ${PORT}`);
});
