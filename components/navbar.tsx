import { ModeToggle } from '@/components/theme-toggle';
import { SheetClose } from '@/components/ui/sheet';
import { page_routes } from '@/lib/routes-config';
import { GithubIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Anchor from './anchor';
import { SheetLeftbar } from './leftbar';
import Search from './search';
import { Button, buttonVariants } from './ui/button';

export const NAVLINKS = [
	{
		title: 'Announcements',
		href: '/announcements',
	},
	{
		title: 'Lessons',
		href: `/lessons${page_routes[0].href}`,
	},
];

export function Navbar() {
	return (
		<nav className='w-full border-b h-16 sticky top-0 z-50 bg-background'>
			<div className='sm:container mx-auto w-[95vw] h-full flex items-center justify-between md:gap-2'>
				<div className='flex items-center gap-5'>
					<SheetLeftbar />
					<div className='flex items-center gap-6'>
						<div className='sm:flex hidden'>
							<Logo />
						</div>
						<div className='lg:flex hidden items-center gap-4 text-sm font-medium text-muted-foreground'>
							<NavMenu />
						</div>
					</div>
				</div>

				<div className='flex items-center gap-3'>
					<div className='flex items-center gap-2'>
						<Search />
						<div className='flex ml-2.5 sm:ml-0'>
							<Link
								target='_blank'
								href='https://github.com/godkingjay'
							>
								<Button
									size='icon'
									variant='ghost'
									color='mode'
								>
									<GithubIcon className='h-[1.1rem] w-[1.1rem]' />
								</Button>
							</Link>
							{/* <Link
								href='#'
								className={buttonVariants({
									variant: 'ghost',
									size: 'icon',
								})}
							>
								<TwitterIcon className='h-[1.1rem] w-[1.1rem]' />
							</Link> */}
							<ModeToggle />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export function Logo() {
	return (
		<Link
			href='/'
			className='flex items-center gap-2.5'
		>
			<Image
				src='/logo/sorsu.png'
				alt='Sorsu Logo'
				width={36}
				height={36}
				className='rounded-md'
			/>
			<h2 className='text-md font-bold font-code'>CS 321</h2>
		</Link>
	);
}

export function NavMenu({ isSheet = false }) {
	return (
		<>
			{NAVLINKS.map((item) => {
				const Comp = (
					<Anchor
						key={item.title + item.href}
						activeClassName='!text-primary dark:font-medium font-semibold'
						absolute
						className='flex items-center gap-1 dark:text-stone-300/85 text-stone-800'
						href={item.href}
					>
						{item.title}
					</Anchor>
				);
				return isSheet ? (
					<SheetClose
						key={item.title + item.href}
						asChild
					>
						{Comp}
					</SheetClose>
				) : (
					Comp
				);
			})}
		</>
	);
}
