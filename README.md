# Sink Project

## Overview
This project is deployed at [10ksb.link](https://10ksb.link) using Cloudflare Pages.

## Project Setup

### Local Development Setup

1. Clone the repository:
```bash
git clone https://github.com/maconprograms/Sink.git
cd Sink
```

2. Environment Variables:
- Copy `.env.example` to create your local `.env` file:
```bash
cp .env.example .env
```
- Update the `.env` file with your local development values
- The `.env` file is gitignored to keep sensitive data secure

### Environment Variables Management

#### Local Development
- All environment variables are stored in the `.env` file
- The `.env.example` file serves as a template and documents required variables
- Never commit the actual `.env` file to the repository

#### Production (Cloudflare)
- Environment variables for production are managed through the Cloudflare Pages dashboard
- To add/modify production variables:
  1. Go to Cloudflare Pages dashboard
  2. Select the "Sink" project
  3. Navigate to Settings > Environment variables
  4. Add or update variables as needed

### Deployment

The project is deployed on Cloudflare Pages with the following setup:

1. Domain Configuration:
- Primary domain: 10ksb.link
- Cloudflare Pages URL: sink-e99.pages.dev

2. Deployment Process:
- Automatic deployments are triggered by pushes to the master branch
- Each deployment creates a unique preview URL
- Production deployments are served from the main domain (10ksb.link)

### Development Workflow

1. Pull latest changes:
```bash
git pull origin master
```

2. Make your changes locally

3. Commit and push changes:
```bash
git add .
git commit -m "Your descriptive commit message"
git push origin master
```

4. Cloudflare will automatically deploy your changes

### Project Structure

```
Sink/
├── .env.example        # Template for environment variables
├── .gitignore         # Git ignore configuration
├── README.md          # Project documentation
└── [other project files]
```

## Troubleshooting

### Common Issues

1. Missing environment variables:
- Check if all required variables in `.env.example` are set in your `.env` file
- For production, verify variables in Cloudflare Pages dashboard

2. Deployment issues:
- Check Cloudflare Pages build logs
- Verify that all required environment variables are set in Cloudflare
- Ensure the build command and settings are correct in Cloudflare Pages configuration

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request to the master branch

## License

[Add your license information here]
