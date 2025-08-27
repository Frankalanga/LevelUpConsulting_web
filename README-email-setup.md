# Email setup for LevelUp Consulting (development)

1) Create a file `server/.env` with these values:

PORT=5000
MAIL_USER=yourgmail@gmail.com
MAIL_PASS=your-app-password
MAIL_TO=levelupconsultinges@gmail.com

- Use a Gmail account and generate an App Password (Google Account → Security → App passwords) for MAIL_PASS.
- MAIL_TO is where messages will be delivered.

2) Install backend dependencies (first time):

npm install express cors nodemailer dotenv

3) Start the backend only:

npm run server

Or start frontend + backend together:

npm run dev

4) The frontend will POST to /api/contact (through the proxy defined in package.json).
