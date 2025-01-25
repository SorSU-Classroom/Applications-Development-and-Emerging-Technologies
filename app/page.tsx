'use client';

import { Button } from '@/components/ui/button';
import { page_routes } from '@/lib/routes-config';
import { BookOpenIcon, DownloadIcon, FileTextIcon, MegaphoneIcon, MoveUpRightIcon } from 'lucide-react'; // Import DownloadIcon
import Link from 'next/link';

export default function Home() {
	return (
		<div className='flex sm:min-h-[85.5vh] min-h-[85vh] flex-col items-center justify-center text-center px-2 sm:py-8 py-12'>
			<Link
				href='https://github.com/SorSU-Classroom/CS-321-Applications-Development-and-Emerging-Technologies'
				target='_blank'
				className='mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4 sm:-mt-12'
			>
				Follow along on GitHub <MoveUpRightIcon className='w-4 h-4 font-extrabold' />
			</Link>
			<h1 className='text-3xl font-bold mb-4 sm:text-6xl'>
				CS 321 - Applications Development and Emerging Technologies
			</h1>
			<p className='mb-8 sm:text-lg max-w-[800px] text-muted-foreground'>
				This course provides an overview of the technologies, methodologies, and principles involved in
				developing applications using emerging technologies. The course covers fundamental concepts, techniques,
				and tools for developing modern applications that are scalable, secure, and responsive.
			</p>
			<div className='flex flex-row items-center gap-4 mb-4'>
				<Link href={`/lessons${page_routes[0].href}`}>
					<Button
						size='lg'
						variant='solid'
					>
						<BookOpenIcon className='mr-2 h-4 w-4' />
						Start Learning
					</Button>
				</Link>

				<Link href='/announcements'>
					<Button
						size='lg'
						variant='outline'
					>
						<MegaphoneIcon className='mr-2 h-4 w-4' />
						Read Announcements
					</Button>
				</Link>
			</div>
			<div className='flex flex-row items-center gap-4'>
				<Link
					target='_blank'
					href={
						'https://github.com/SorSU-Classroom/CS-321-Applications-Development-and-Emerging-Technologies/blob/42eb06ed634f9944bde5d7dec20ef3ee83be6878/Module/Applications%20Development%20and%20Emerging%20Technologies.pdf'
					}
				>
					<Button
						size='lg'
						variant={'soft'}
					>
						<FileTextIcon className='mr-2 h-4 w-4' /> Download Module{' '}
						<DownloadIcon className='w-4 h-4 ml-2' />
					</Button>
				</Link>
			</div>

			{/* <ButtonShowcase /> */}

			{/* <span className='flex flex-row items-start sm:gap-2 gap-0.5 text-muted-foreground text-md mt-7 -mb-12 max-[800px]:mb-12 font-code sm:text-base text-sm font-medium'>
				<TerminalSquareIcon className='w-5 h-5 sm:mr-1 mt-0.5' />
				{'npx create-aria-lesson <project-directory>'}
			</span> */}
		</div>
	);
}
