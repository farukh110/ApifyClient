const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const instagramRoutes = require("./routes/instagram");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/instagram", instagramRoutes);

// Export for Vercel
module.exports = app;

// Run locally only
if (require.main === module) {
  const PORT = process.env.PORT || 7000;
  app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
  });
}
