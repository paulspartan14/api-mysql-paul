require('dotenv').config();
const app = require("./app")
const { PORT = 3300 } = process.env

// Start Server
app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}/api/v1`)
})