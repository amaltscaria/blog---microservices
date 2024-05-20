import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

const events = [];

app.post("/events", async (req, res) => {
//   try {
    const event = req.body;
    events.push(event);
    console.log('Emitted event of type', event.type);
    await axios.post("http://localhost:4000/events", event).catch(err=>console.log(err));
    await axios.post("http://localhost:4001/events", event).catch(err=>console.log(err));
    await axios.post("http://localhost:4002/events", event).catch(err=>console.log(err));
    await axios.post("http://localhost:4003/events", event).catch(err=>console.log(err));
    res.send({ status: "OK" });
//   } catch (err) {
//     console.log("the - err", err);
//   }
});

app.get('/events', (req, res) => {
    res.send(events);
})

app.listen(4005, () => {
  console.log("Event bus listening on 4005");  
});
