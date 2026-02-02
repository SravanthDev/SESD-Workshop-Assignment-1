import App from "./app";
import ComplaintRoutes from "./routes/complaint.routes";
import "dotenv/config";

const app = new App([new ComplaintRoutes()]);
app.startServer();
