import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import cors from "cors";
import path from "path"
import {pinoHttp, logger} from './utils/logging';
import mountRoutes from './api/routes';
// import cspDirectives from './config/cspConfig';
const app = express();
app.use(cors());
app.use(express.json());
// Use Helmet for security
app.use(helmet({
  contentSecurityPolicy : false
}));
// Apply gzip compression
app.use(compression());
// Use request-based logger for log correlation
app.use(pinoHttp);
app.use(express.static(path.join(__dirname , 'client' ,'build')))
// Mounting API routes
mountRoutes(app);
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'client','build','index.html'))
})
// Example endpoint
app.get('/', async (req: express.Request, res: express.Response) => {
  // Use basic logger without HTTP request info
  logger.info({
    logField: 'custom-entry',
    arbitraryField: 'custom-entry',
  }); // Example of structured logging
  // Use request-based logger with log correlation
  req.log.info('Child logger with trace Id.'); // https://cloud.google.com/run/docs/logging#correlate-logs
  res.send('LBSTECH Road Scanner API Server!!');
});
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});
export default app;