# Agile Final Project - Product Catalog Backend

## Overview
This is a backend project for managing a product catalog for an e-commerce website. The application supports creating, retrieving, updating, deleting, liking, disliking, listing, and querying products.

## Features
- **CRUD Operations**: Create, Read, Update, and Delete products
- **Product Interactions**: Like and dislike products
- **Product Discovery**: List all products and query by specific criteria
- **Cloud Hosting**: Deployed in the cloud for scalability and reliability
- **Automated Deployments**: CI/CD pipeline for seamless deployments

## Project Structure
```
agile-final-project/
├── src/                    # Backend source code
│   ├── createProduct.js    # Create product endpoint
│   ├── retrieveProduct.js  # Retrieve product endpoint
│   ├── updateProduct.js    # Update product endpoint
│   ├── deleteProduct.js    # Delete product endpoint
│   ├── likeProduct.js      # Like product endpoint
│   ├── dislikeProduct.js   # Dislike product endpoint
│   ├── listProducts.js     # List all products endpoint
│   └── queryProducts.js    # Query products endpoint
├── docs/                   # Project documentation
├── stories.md              # User stories for the project
├── README.md               # This file
└── .gitignore              # Git ignore rules
```

## Technology Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: JavaScript

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation
```bash
# Install dependencies
npm install

# Start the application
npm start
```

## User Stories
See [stories.md](./stories.md) for detailed user stories and acceptance criteria.

## Documentation
Additional project documentation can be found in the [docs/](./docs/) directory.

## Contributing
This is an educational project for the Agile Development course.

## License
This project is created for educational purposes.