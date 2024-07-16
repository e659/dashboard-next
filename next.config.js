// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     // output: "export",  // <=== enables static exports
//     // reactStrictMode: true,
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
          port: '',
          pathname: '/photos/**',
        },
        {
          protocol: 'https',
          hostname: 'store.sony.com.au',
          port: '',
          pathname: '/on/**',
        },
        {
          protocol: 'https',
          hostname: 'www.pngmart.com',
          port: '',
          pathname: '/files//**',
        },
        {
          protocol: 'https',
          hostname: 'www.pngmart.com',
          port: '',
          pathname: '/files//**',
        },
      ],
    },
  }
  
  module.exports = nextConfig