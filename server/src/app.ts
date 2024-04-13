import "express-async-errors";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandlerMiddleware, notFoundMiddleware } from "./middlewares";

const app = express();

// constant
const CLIENT_URL = process.env.CLIENT_URL;
const PORT = Number(process.env.PORT) || 4000

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("tiny"));
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(cookieParser());

// routes

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const start = async () => {
	try {
		app.listen(PORT, () =>
			console.log(`Server is listening on port ${PORT}...`)
		);
	} catch (error) {
		console.error(error);
	}
};
start();
