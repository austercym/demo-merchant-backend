import * as express from 'express'
import * as bodyParser from "body-parser";
import * as cors from 'cors'
import * as exphbs from "express-handlebars";
import * as path from "path"


const app = express();

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  partialsDir: path.join(__dirname, './views'),
  layoutsDir: path.join(__dirname, './views/layouts')
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './views'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(cors());
import * as homeController from "./controllers/home";
import * as pispController from "./controllers/Pisp";
import * as paymentsController from "./controllers/payment";
import * as developerController from "./controllers/developer";

app.get("/create-jwt/:paymentid",developerController.createJwt)
app.get("/create-assertion",developerController.createJwtAssertion)

app.get("/providers", pispController.get);
app.post("/payments", paymentsController.create);
app.get("/redirect/:uid", paymentsController.redirect);
app.set("port", process.env.PORT || 4002);

import { createJtw,createAssertion } from './services/jwtHelper'
console.log("***********************************")
console.log(createJtw({openbanking_intent_id : "1e03c08c-cd7d-4e49-aa16-93468cbeebf9"}))
console.log("***********************************")

app.listen(app.get("port"), () => {
  console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
  console.log("  Press CTRL-C to stop\n");
});