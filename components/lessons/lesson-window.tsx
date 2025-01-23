'use client';

import { FileTextIcon } from 'lucide-react';
import React, { useRef } from 'react';
import { Button } from '../ui/button';
import { useComponentAsImage } from '@/lib/hooks/use-component-as-image';

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
