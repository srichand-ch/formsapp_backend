import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;
const dbPath = path.join(__dirname, 'db.json');

app.use(bodyParser.json());

// Define the Submission type
interface Submission {
  name: string;
  email: string;
  phone: string;
  githubLink: string;
  stopwatchTime: string;
}


// Helper function to read database
const readDatabase = () => {
  if (fs.existsSync(dbPath)) {
      const rawData = fs.readFileSync(dbPath, 'utf-8');
      return JSON.parse(rawData);
  }
  return { submissions: [] };
};

// Helper function to write to database
const writeDatabase = (data: any) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf-8');
};

// Endpoint to check server status
app.get('/ping', (req: Request, res: Response) => {
  res.json({ success: true });
});

// Endpoint to submit a new form entry
app.post('/submit', (req: Request, res: Response) => {
  const newSubmission: Submission = req.body;
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
  db.submissions.push(newSubmission);
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
  res.json({ success: true, message: 'Submission saved' });
});

// Endpoint to read 
app.get('/read', (req: Request, res: Response) => {
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
    res.json(db.submissions);
});


//extra features
// Endpoint to update
app.put('/update/:index', (req: Request, res: Response) => {
  const { index } = req.params;
  const updatedSubmission: Submission = req.body;
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
  const submissionIndex = parseInt(index);

  if (!isNaN(submissionIndex) && submissionIndex >= 0 && submissionIndex < db.submissions.length) {
      db.submissions[submissionIndex] = updatedSubmission;
      fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
      res.status(200).json({ message: 'Update successful!' });
  } else {
      res.status(400).json({ message: 'Invalid index' });
  }
});

// Endpoint to delete
app.delete('/delete/:index', (req: Request, res: Response) => {
  const { index } = req.params;
  const db = readDatabase();
  const submissionIndex = parseInt(index);

  if (!isNaN(submissionIndex) && submissionIndex >= 0 && submissionIndex < db.submissions.length) {
      db.submissions.splice(submissionIndex, 1);
      writeDatabase(db);
      res.status(200).json({ message: 'Deletion successful!' });
  } else {
      res.status(400).json({ message: 'Invalid index' });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
