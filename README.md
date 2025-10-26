# Agile Final Project - E-commerce Catalog Backend

A backend API for an e-commerce product catalog built with Node.js and Express. This project demonstrates Agile development practices with proper sprint planning, user stories, and continuous delivery.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start the server
npm start

# For development with auto-reload
npm run dev
```

The server will start on `http://localhost:3000`

## ✨ Features

- **CRUD Operations**: Create, Read, Update, and Delete products in the catalog
- **Like/Dislike System**: Allow users to like or dislike products
- **Query & Search**: Filter and search products by various criteria
- **Cloud Hosting Ready**: Prepared for deployment on cloud platforms
- **CI/CD Pipeline**: Automated deployment and testing

## 📁 Project Structure

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
├── README.md
├── USER_STORIES.md      # All 10 user stories for issues
├── GITHUB_SETUP.md      # Instructions for creating issues and labels
├── KANBAN_SETUP.md      # Kanban board setup guide
└── DEPLOYMENT.md        # Cloud deployment guide
```

## 📚 Documentation

- **[USER_STORIES.md](USER_STORIES.md)** - Contains all 10 user stories to be created as GitHub issues
- **[GITHUB_SETUP.md](GITHUB_SETUP.md)** - Step-by-step guide for setting up GitHub issues, labels, and Kanban board
- **[KANBAN_SETUP.md](KANBAN_SETUP.md)** - Detailed guide for Agile sprint planning with Kanban
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Instructions for deploying to various cloud platforms

## 🛠️ Getting Started

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

## 🌐 API Endpoints

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

## 📝 API Usage Examples

### Create a Product
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Laptop",
    "description": "High-performance laptop",
    "price": 999.99,
    "category": "Electronics"
  }'
```

### Get All Products
```bash
curl http://localhost:3000/api/products
```

### Like a Product
```bash
curl -X POST http://localhost:3000/api/likes/product/1/like
```

### Search Products
```bash
curl http://localhost:3000/api/query/products/search?q=laptop
```

## 🎯 Agile Development

This project follows Agile methodologies with:

- **User Stories**: Written in the format "As a [role], I need [feature], so that [value]"
- **Sprint Planning**: Using GitHub Projects/Kanban board
- **Labels**: Issues are categorized with labels like `enhancement` and `technical debt`
- **Continuous Integration**: Automated testing and deployment

### Setting Up Your Agile Workflow

1. **Create Issues**: Follow [GITHUB_SETUP.md](GITHUB_SETUP.md) to create all 10 issues from [USER_STORIES.md](USER_STORIES.md)
2. **Set Up Kanban Board**: Follow [KANBAN_SETUP.md](KANBAN_SETUP.md) to create your project board
3. **Plan Sprints**: Move issues from Backlog to To Do during sprint planning
4. **Track Progress**: Update issue status as work progresses

## 🚀 Deployment

The application is ready to be deployed to various cloud platforms:

- **Heroku**
- **AWS Elastic Beanstalk**
- **Google Cloud Platform (Cloud Run)**
- **DigitalOcean App Platform**

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions for each platform.

## 📊 Next Steps

1. ✅ Create the "technical debt" label in GitHub
2. ✅ Create all 10 issues from USER_STORIES.md
3. ✅ Set up Kanban board for sprint planning
4. ⏳ Implement database integration (currently uses in-memory storage)
5. ⏳ Add authentication and authorization
6. ⏳ Deploy to cloud platform
7. ⏳ Set up CI/CD pipeline
8. ⏳ Add comprehensive tests

## 🤝 Contributing

1. Pick an issue from the backlog
2. Create a feature branch
3. Make your changes
4. Submit a pull request
5. Wait for code review

## 📄 License

ISC