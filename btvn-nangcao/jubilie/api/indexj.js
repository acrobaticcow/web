const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(PORT);

app.get("/bean", (req, res) => {
  res.status(200).send({
    akio: {
      name: "ethio",
      roast: "light",
    },
  });
});

app.post("/bean/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;
  if (!logo) {
    res.status(418).send({ message: "we need a logo!" });
  }

  res.send({
    tshirt: `with your ${logo} and ID of ${id}`,
  });
});
