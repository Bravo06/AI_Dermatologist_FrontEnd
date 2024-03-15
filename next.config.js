/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/infer',
            destination: 'http://ai-derm-api-lb-394270268.ap-south-1.elb.amazonaws.com/infer',
            permanent: true,
          }
        ]
      }
}

module.exports = nextConfig
