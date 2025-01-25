import { getPreviousNext } from '@/lib/markdown';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import { Button, buttonVariants } from './ui/button';

export default function LessonPagination({ pathname }: { pathname: string }) {
	const res = getPreviousNext(pathname);

	return (
		<div className='grid grid-cols-2 flex-grow sm:py-10 py-7 gap-3'>
			<div>
				{res.prev && (
					<Link
						href={`/lessons${res.prev.href}`}
						className='!no-underline'
					>
						<Button
							color='mode'
							variant={'outline'}
							className='border-foreground/20 w-full flex flex-col pl-3 !py-8 !items-start'
						>
							<span className='flex items-center text-muted-foreground text-xs'>
								<ChevronLeftIcon className='w-[1rem] h-[1rem] mr-1' />
								Previous
							</span>
							<span className='mt-1 ml-1'>{res.prev.title}</span>
						</Button>
					</Link>
				)}
			</div>
			<div>
				{res.next && (
					<Link
						href={`/lessons${res.next.href}`}
						className='!no-underline'
					>
						<Button
							color='mode'
							variant={'outline'}
							className='border-foreground/20 w-full flex flex-col pr-3 !py-8 !items-end'
						>
							<span className='flex items-center text-muted-foreground text-xs'>
								Next
								<ChevronRightIcon className='w-[1rem] h-[1rem] ml-1' />
							</span>
							<span className='mt-1 mr-1'>{res.next.title}</span>
						</Button>
					</Link>
				)}
			</div>
		</div>
	);
}
