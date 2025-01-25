'use client';

import { useComponentAsImage } from '@/lib/hooks/use-component-as-image';
import React, { useRef } from 'react';

type LessonWindowProps = React.HTMLAttributes<HTMLDivElement>;

const LessonWindow = ({ children, ...props }: LessonWindowProps) => {
	const contentRef = useRef<HTMLDivElement>(null);
	const { downloadComponentAsImage } = useComponentAsImage();

	const handleDownloadPDF = async () => {
		await downloadComponentAsImage(contentRef, {
			name: 'lesson',
		});
	};

	return (
		<div {...props}>
			{/* <div className='mb-2'>
				<Button
					size='sm'
					onClick={handleDownloadPDF}
				>
					<FileTextIcon className='mr-2 h-4 w-4' />
					Download PDF
				</Button>
			</div> */}
			<div
				id='lesson-content'
				ref={contentRef}
				className='pt-4 -mx-8 px-8'
			>
				{children}
			</div>
		</div>
	);
};

export default LessonWindow;
