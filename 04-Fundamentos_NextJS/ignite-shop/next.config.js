// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'files.stripe.com',
          port: '',
        },
      ],
    },
  }

  return nextConfig
}
