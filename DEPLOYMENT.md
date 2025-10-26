# Deployment Guide

## Cloud Hosting Options

This application can be deployed to various cloud platforms. Below are guides for popular options:

## Option 1: Heroku

### Prerequisites
- Heroku account
- Heroku CLI installed

### Deployment Steps

1. **Login to Heroku**
```bash
heroku login
```

2. **Create Heroku App**
```bash
heroku create your-app-name
```

3. **Deploy**
```bash
git push heroku main
```

4. **Open App**
```bash
heroku open
```

### Environment Variables
```bash
heroku config:set NODE_ENV=production
heroku config:set PORT=3000
```

## Option 2: AWS Elastic Beanstalk

### Prerequisites
- AWS account
- EB CLI installed

### Deployment Steps

1. **Initialize EB**
```bash
eb init -p node.js -r us-east-1
```

2. **Create Environment**
```bash
eb create production-env
```

3. **Deploy**
```bash
eb deploy
```

## Option 3: Google Cloud Platform (Cloud Run)

### Prerequisites
- GCP account
- gcloud CLI installed

### Deployment Steps

1. **Create Dockerfile**
```dockerfile
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

2. **Build and Deploy**
```bash
gcloud builds submit --tag gcr.io/PROJECT-ID/ecommerce-api
gcloud run deploy --image gcr.io/PROJECT-ID/ecommerce-api --platform managed
```

## Option 4: DigitalOcean App Platform

### Deployment Steps

1. Connect GitHub repository to DigitalOcean
2. Select repository and branch
3. DigitalOcean auto-detects Node.js
4. Configure build command: `npm install`
5. Configure run command: `npm start`
6. Deploy

## CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
      - name: Deploy
        run: |
          # Add deployment commands here
```

## Environment Variables

Create a `.env.example` file:

```
PORT=3000
NODE_ENV=development
DATABASE_URL=your_database_url
API_KEY=your_api_key
```

## Health Check

The application includes a health check endpoint at `/health` that returns:

```json
{
  "status": "ok",
  "message": "E-commerce Catalog API is running"
}
```

Use this endpoint for:
- Cloud platform health checks
- Load balancer configuration
- Monitoring and alerting

## Database Integration

When ready for production, integrate a database:

1. **PostgreSQL** - Heroku Postgres, AWS RDS
2. **MongoDB** - MongoDB Atlas
3. **MySQL** - AWS RDS, Google Cloud SQL

Update controllers to use database instead of in-memory storage.

## Monitoring

Recommended monitoring tools:
- **New Relic** - Application performance
- **Datadog** - Infrastructure monitoring
- **Sentry** - Error tracking
- **LogDNA** - Log management

## Security Considerations

1. Use HTTPS in production
2. Implement rate limiting
3. Add authentication/authorization
4. Sanitize user inputs
5. Keep dependencies updated
6. Use environment variables for secrets
