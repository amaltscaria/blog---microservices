import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

app.post("/events", async (req, res) => {
  try {
    const event = req.body;
    await axios.post("http://localhost:4000/events", event);
    await axios.post("http://localhost:4001/events", event);
    await axios.post("http://localhost:4002/events", event);
    console.log('Emitted event of type', event.type);
    res.send({ status: "OK" });
  } catch (err) {
    console.log("the - err", err);
  }
});

app.listen(4005, () => {
  console.log("Event bus listening on 4005");
});
