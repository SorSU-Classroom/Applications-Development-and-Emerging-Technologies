import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img.freepik.com/**',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com/**',
			},
			{
				protocol: 'https',
				hostname: 'cdn.pixabay.com/**',
			},
			{
				protocol: 'https',
				hostname: 'image.shutterstock.com/**',
			},
			{
				protocol: 'https',
				hostname: 'source.unsplash.com/**',
			},
			{
				protocol: 'https',
				hostname: 'static-cse.canva.com/**',
			},
			{
				protocol: 'https',
				hostname: 'cdn.builtin.com/**',
			},
			{
				protocol: 'https',
				hostname: 't2informatik.de/**',
			},
		],
	},
	// if used turbopack
	// transpilePackages: ["next-mdx-remote"],
};

export default nextConfig;
