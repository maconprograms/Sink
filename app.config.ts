export default defineAppConfig({
  title: '10ksb.link',
  email: '',
  github: 'https://github.com/maconprograms/Sink',
  twitter: '',
  telegram: '',
  mastodon: '',
  blog: '',
  description: 'A Simple Link Shortener for 10,000 Small Businesses',
  image: '/banner.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
