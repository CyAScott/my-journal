import express, { Express } from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app: Express = express();

// Uses the static content located in ./dist/frontend/browser
const frontend = path.join(path.join(path.join(__dirname, '..'), 'frontend'), 'browser');
app.use(express.static(frontend));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
