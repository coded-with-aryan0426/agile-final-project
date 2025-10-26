# Agile Final Project - E-commerce Catalog Backend

A backend API for an e-commerce product catalog built with Node.js and Express. This project demonstrates Agile development practices with proper sprint planning, user stories, and continuous delivery.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete products in the catalog
- **Like/Dislike System**: Allow users to like or dislike products
- **Query & Search**: Filter and search products by various criteria
- **Cloud Hosting Ready**: Prepared for deployment on cloud platforms
- **CI/CD Pipeline**: Automated deployment and testing

## Project Structure

```
agile-final-project/
├── src/
│   ├── controllers/     # Business logic for handling requests
│   │   ├── productController.js
│   │   ├── likeController.js
│   │   └── queryController.js
│   ├── routes/          # API route definitions
│   │   ├── productRoutes.js
│   │   ├── likeRoutes.js
│   │   └── queryRoutes.js
│   ├── models/          # Data models
│   │   └── Product.js
│   ├── middleware/      # Express middleware
│   └── server.js        # Main application entry point
├── package.json
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/coded-with-aryan0426/agile-final-project.git
cd agile-final-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Or start in production mode:
```bash
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### Products
- `POST /api/products` - Create a new product
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a product by ID
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

### Likes
- `POST /api/likes/product/:id/like` - Like a product
- `POST /api/likes/product/:id/dislike` - Dislike a product
- `GET /api/likes/product/:id/likes` - Get product likes/dislikes

### Query
- `GET /api/query/products` - Query products
- `GET /api/query/products/filter` - Filter products by criteria
- `GET /api/query/products/search` - Search products

### Health Check
- `GET /health` - Check API health status

## Agile Development

This project follows Agile methodologies with:

- **User Stories**: Written in the format "As a [role], I need [feature], so that [value]"
- **Sprint Planning**: Using GitHub Projects/Kanban board
- **Labels**: Issues are categorized with labels like `enhancement` and `technical debt`
- **Continuous Integration**: Automated testing and deployment

## Kanban Board Setup

To set up the Kanban board for sprint planning:

1. Go to your GitHub repository
2. Click on "Projects" tab
3. Create a new Project (Classic or Beta)
4. Add columns: "To Do", "In Progress", "In Review", "Done"
5. Link issues to the project board
6. Track progress during sprints

## Contributing

1. Pick an issue from the backlog
2. Create a feature branch
3. Make your changes
4. Submit a pull request
5. Wait for code review

## License

ISC