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
├── .editorconfig      # Editor configuration
├── .env.example       # Template for environment variables
├── .github/           # GitHub configuration files
├── .gitignore        # Git ignore configuration
├── .vscode/          # VSCode configuration
├── assets/           # Static assets
├── components/       # Vue components
├── docs/            # Documentation files
├── layouts/         # Nuxt layouts
├── middleware/      # Nuxt middleware
├── pages/           # Vue pages
├── public/          # Public static files
├── schemas/         # Data schemas
├── scripts/         # Utility scripts
├── server/          # Server-side code
├── utils/           # Utility functions
├── app.config.ts    # App configuration
├── app.vue          # Main Vue app file
├── nuxt.config.ts   # Nuxt configuration
├── package.json     # Project dependencies
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json    # TypeScript configuration
└── wrangler.toml    # Cloudflare configuration
```

### Local Development Setup

1. Clone the repository:
```bash
git clone https://github.com/maconprograms/Sink.git
cd Sink
```

2. Install dependencies:
```bash
pnpm install
```

3. Environment Variables:
- Copy `.env.example` to create your local `.env` file:
```bash
cp .env.example .env
```
- Update the `.env` file with your local development values
- The `.env` file is gitignored to keep sensitive data secure

### Development Workflow

1. Start the development server:
```bash
pnpm dev
```

2. Make your changes locally

3. Before committing, ensure:
- Code follows the project's ESLint rules
- All tests pass (if applicable)
- Changes are properly documented

4. Commit and push changes:
```bash
git add .
git commit -m "Your descriptive commit message"
git push origin master
```

### Production Deployment (Cloudflare Pages)

The project is deployed on Cloudflare Pages with the following setup:

1. Domain Configuration:
- Primary domain: 10ksb.link
- Cloudflare Pages URL: sink-e99.pages.dev

2. Environment Variables:
- Managed through Cloudflare Pages dashboard
- To add/modify production variables:
  1. Go to Cloudflare Pages dashboard
  2. Select the "Sink" project
  3. Navigate to Settings > Environment variables
  4. Add or update variables as needed

3. Deployment Process:
- Automatic deployments are triggered by pushes to the master branch
- Each deployment creates a unique preview URL
- Production deployments are served from the main domain (10ksb.link)

### Technology Stack

- Frontend: Vue.js with Nuxt.js
- Styling: Tailwind CSS
- Deployment: Cloudflare Pages
- Language: TypeScript

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
