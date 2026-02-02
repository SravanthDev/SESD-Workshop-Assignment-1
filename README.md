# Complaint Tracking System

This is a backend application to manage complaints or issues.

Users can create complaints, view all complaints, update complaint details, and delete complaints.  
The system also supports filtering, pagination, and sorting to retrieve complaints efficiently.

---

## Features

- Create a complaint  
- Get all complaints  
- Get a complaint by ID  
- Update a complaint  
- Delete a complaint  

### Extra Features
- Filter complaints by category  
- Pagination using page and limit  
- Sorting complaints by creation date  

---

## Tech Stack

- Node.js  
- TypeScript  
- Express  
- MongoDB  
- Mongoose  

---

## Project Structure

```
src/
├── controllers/
├── models/
├── routes/
├── utils/
├── app.ts
└── server.ts
```

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SravanthDev/SESD-Workshop-Assignment-1.git
   cd SESD-Workshop-Assignment-1
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   ```

### Running the Server

For development:
```bash
npm run dev
```

For production:
```bash
npm run build
npm start
```

## API Endpoints

### Complaints
- `POST /complaints` - Create a new complaint
- `GET /complaints` - Get all complaints
- `GET /complaints/:id` - Get a specific complaint
- `PUT /complaints/:id` - Update a complaint
- `DELETE /complaints/:id` - Delete a complaint

### Query Parameters (GET /complaints)
- `category` - Filter by category
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `sort` - Sort order ('asc' or 'desc', default: 'desc')


