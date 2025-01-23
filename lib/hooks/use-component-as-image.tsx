import html2canvas, { Options as HTML2CanvasOptions } from 'html2canvas';
import React from 'react';
import { concatenate } from '../utils';

export type useComponentAsImageProps = undefined;

const useComponentAsImage = (props?: useComponentAsImageProps) => {
	const downloadComponentAsImage = React.useCallback(
		async (
			ref: React.RefObject<any>,
			options: Partial<HTML2CanvasOptions> & {
				prefix?: string;
				suffix?: string;
				name?: string;
			} = {
				prefix: undefined,
				name: undefined,
				suffix: undefined,
			}
		) => {
			if (ref.current) {
				const { prefix, name, suffix, ...canvasOptions } = options;
				const element = ref.current;
				const canvas = await html2canvas(element, {
					backgroundColor: '#fff0',
					...canvasOptions,
				});

				const data = canvas.toDataURL('image/png');
				const link = document.createElement('a');

				if (typeof link.download === 'string') {
					link.href = data;
					const defaults = {
						name: new Date().getTime().toString(),
						extension: 'png',
					};
					link.download = concatenate('', prefix, name ?? defaults.name, suffix, '.', defaults.extension);

					document.body.appendChild(link);
					link.click();
					document.body.removeChild(link);
				} else {
					window.open(data);
				}
			}
		},
		[]
	);

	return {
		downloadComponentAsImage,
	};
};

export { useComponentAsImage };
