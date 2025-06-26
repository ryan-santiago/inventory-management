/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname:
					's3-inventorymanagement-testryan.s3.ap-southeast-1.amazonaws.com',
				port: '',
				pathname: '/**',
			},
		],
	},
}

export default nextConfig
