import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import CostRoute from "./routes/CostRoute.js";
import QualityRoute from "./routes/QualityRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(CostRoute);
app.use(QualityRoute);

app.listen(5000, () => console.log("Server up and running...in 5000"));
