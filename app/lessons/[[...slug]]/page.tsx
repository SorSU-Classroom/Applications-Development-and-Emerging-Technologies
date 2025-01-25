import LessonsBreadcrumb from '@/components/lessons-breadcrumb';
import LessonsPagination from '@/components/lessons-pagination';
import LessonWindow from '@/components/lessons/lesson-window';
import Toc from '@/components/toc';
import { Typography } from '@/components/typography';
import { getLessonsForSlug } from '@/lib/markdown';
import { page_routes } from '@/lib/routes-config';
import { notFound } from 'next/navigation';

type PageProps = {
	params: Promise<{ slug: string[] }>;
};

export default async function LessonPage(props: PageProps) {
	const params = await props.params;

	const { slug = [] } = params;

	const pathName = slug.join('/');
	const res = await getLessonsForSlug(pathName);

	if (!res) notFound();

	return (
		<div className='flex items-start gap-10'>
			<LessonWindow className='flex-[4.5] pt-4'>
				<LessonsBreadcrumb paths={slug} />
				<Typography>
					<h1 className='text-3xl !-mt-0.5'>{res.frontmatter.title}</h1>
					<p className='-mt-4 text-muted-foreground text-[16.5px]'>{res.frontmatter.description}</p>
					<div>{res.content}</div>
					<LessonsPagination pathname={pathName} />
				</Typography>
			</LessonWindow>
			<Toc path={pathName} />
		</div>
	);
}

export async function generateMetadata(props: PageProps) {
	const params = await props.params;

	const { slug = [] } = params;

	const pathName = slug.join('/');
	const res = await getLessonsForSlug(pathName);
	if (!res) return null;
	const { frontmatter } = res;
	return {
		title: frontmatter.title,
		description: frontmatter.description,
	};
}

export function generateStaticParams() {
	return page_routes.map((item) => ({
		slug: item.href.split('/').slice(1),
	}));
}
