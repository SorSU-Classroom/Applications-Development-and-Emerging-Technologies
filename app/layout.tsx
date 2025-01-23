import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/contexts/theme-provider';
import { Navbar } from '@/components/navbar';
import { Space_Mono, Poppins } from 'next/font/google';
import { Footer } from '@/components/footer';
import '@/styles/globals.css';

const sansFont = Poppins({
	subsets: ['latin'],
	variable: '--font-poppins',
	display: 'swap',
	weight: '400',
});

const monoFont = Space_Mono({
	subsets: ['latin'],
	variable: '--font-geist-mono',
	display: 'swap',
	weight: '400',
});

export const metadata: Metadata = {
	title: 'CS 321 Applications Development and Emerging Technologies',
	description:
		'This course provides an overview of the technologies, methodologies, and principles involved in developing applications using emerging technologies. The course covers fundamental concepts, techniques, and tools for developing modern applications that are scalable, secure, and responsive.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body
				className={`${sansFont.variable} ${monoFont.variable} font-regular antialiased tracking-wide`}
				suppressHydrationWarning
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					<main className='sm:container mx-auto w-[90vw] h-auto scroll-smooth'>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
