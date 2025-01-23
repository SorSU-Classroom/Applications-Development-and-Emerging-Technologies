import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { EachRoute, ROUTES } from './routes-config';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function helperSearch(query: string, node: EachRoute, prefix: string, currenLevel: number, maxLevel?: number) {
	const res: EachRoute[] = [];
	let parentHas = false;

	const nextLink = `${prefix}${node.href}`;
	if (!node.noLink && node.title.toLowerCase().includes(query.toLowerCase())) {
		res.push({ ...node, items: undefined, href: nextLink });
		parentHas = true;
	}
	const goNext = maxLevel ? currenLevel < maxLevel : true;
	if (goNext)
		node.items?.forEach((item) => {
			const innerRes = helperSearch(query, item, nextLink, currenLevel + 1, maxLevel);
			if (!!innerRes.length && !parentHas && !node.noLink) {
				res.push({ ...node, items: undefined, href: nextLink });
				parentHas = true;
			}
			res.push(...innerRes);
		});
	return res;
}

export function advanceSearch(query: string) {
	return ROUTES.map((node) => helperSearch(query, node, '', 1, query.length == 0 ? 2 : undefined)).flat();
}

// Thursday, May 23, 2024
export function formatDate(dateStr: string): string {
	const [day, month, year] = dateStr.split('-').map(Number);
	const date = new Date(year, month - 1, day);

	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	return date.toLocaleDateString('en-US', options);
}

//  May 23, 2024
export function formatDate2(dateStr: string): string {
	const [day, month, year] = dateStr.split('-').map(Number);
	const date = new Date(year, month - 1, day);

	const options: Intl.DateTimeFormatOptions = {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	};
	return date.toLocaleDateString('en-US', options);
}

export function stringToDate(date: string) {
	const [day, month, year] = date.split('-').map(Number);
	return new Date(year, month - 1, day);
}

/**
 * Check if values are considered empty
 *
 * @param {string | number | boolean | undefined | null | Array | Object} args - The values to check
 * @return {boolean} - Returns true if the values are empty
 */
export const isEmpty = (...args: any[]): boolean => {
	return args.every((value) => {
		if (typeof value === 'string') return value.trim().length === 0;
		if (value instanceof Array) return value.length === 0;
		if (value instanceof Object) return Object.keys(value).length === 0;
		return value === undefined || value === null;
	});
};

/**
 * Check if values is considered not empty
 *
 * @param {string | number | boolean | undefined | null | Array | Object} args - The values to check
 * @return {boolean} - Returns true if the values are not empty
 */
export const isNotEmpty = (...args: any[]): boolean => {
	return !isEmpty(...args);
};

/**
 * Check if value is a number
 *
 * @param {any} value - The value to check
 * @return {boolean} - Returns true if the value is a number
 */
export const isNumber = (value: any): boolean => {
	return !isNaN(value);
};

/**
 * Do something n times
 *
 * @param {number} time - The times to loop
 * @param {Function} callback - The callback function
 */
export const times = (n: number, callback: Function, delay: number = 0) => {
	for (let i = 0; i < n; i++) {
		setTimeout(() => {
			callback();
		}, i * delay);
	}
};

/**
 * Wait for a specified amount of time to complete before continuing to process
 *
 * @param {number} ms - The time to wait in milliseconds
 */
export const wait = async (ms: number = 1000, callback?: Function) => {
	await new Promise((resolve) => setTimeout(resolve, ms));
	if (callback) callback();
};

/**
 * Concatenate values together joined by spaces or any
 *
 * @param {string} join - The string to join the values together
 * @param {(string | number | boolean | undefined | null)[]} args - The values to concatenate
 */
export const concatenate = (join: string = ' ', ...args: (string | number | boolean | undefined | null)[]): string => {
	return args.filter((arg) => isNotEmpty(arg)).join(join);
};

/**
 * Check if value is in an array
 *
 * @param {any} value - The value to check
 * @param {any[]} array - The array to check against
 * @return {boolean} - Returns true if the value is in the array
 */
export const isIn = (value: any, array: any[]): boolean => {
	return array.includes(value);
};

/**
 * Check if value is not in an array
 *
 * @param {any} value - The value to check
 * @param {any[]} array - The array to check against
 * @return {boolean} - Returns true if the value is not in the array
 */
export const isNotIn = (value: any, array: any[]): boolean => {
	return !isIn(value, array);
};

/**
 * Check if value is empty and return a fallback value
 *
 * @param {T} value - The value to check
 * @param {U} fallback - The fallback value
 * @param {V} value2 - The value to return if not empty
 * @return {T | U} - Returns the value if not empty, otherwise the fallback value
 */
export const fallbackValueIfEmpty = <T extends unknown, U extends unknown, V extends unknown | T = T | undefined>(
	value: T,
	fallback: U,
	value2: V = value as unknown as V
): T | U | V => {
	return isEmpty(value) ? fallback : value2;
};

/**
 * Perform action after delay. If another action is performed before the
 * previous action is completed, the previous action will be cancelled.
 *
 * @param {Function} callback - The callback function
 * @param {number} delay - The delay in milliseconds
 */
export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(callback: T, delay: number) {
	let timer: ReturnType<typeof setTimeout>;
	return (...args: Parameters<T>) => {
		const p = new Promise<ReturnType<T> | Error>((resolve, reject) => {
			clearTimeout(timer);
			timer = setTimeout(() => {
				try {
					let output = callback(...args);
					resolve(output);
				} catch (err) {
					if (err instanceof Error) {
						reject(err);
					}
					reject(new Error(`An error has occurred:${err}`));
				}
			}, delay);
		});
		return p;
	};
}

/**
 * Convert an array of objects to a CSV string
 *
 * @param {Object[]} data - The array of objects to convert
 * @param {string[]} [columns] - Optional array of column names to include in the CSV
 * @return {string} - The CSV string
 */
export const arrayToCSV = (data: object[], columns?: string[]): string => {
	if (!data.length) return '';

	const keys = columns || Object.keys(data[0]);
	const csvRows = data.map((row) =>
		keys
			.map((key) => {
				const csvKey = key as keyof typeof row;

				return `"${row[csvKey] !== undefined ? row[csvKey] : ''}"`;
			})
			.join(',')
	);

	return [keys.join(','), ...csvRows].join('\n');
};

export const isStaging = () => {
	return process.env.NEXT_PUBLIC_API_URL === 'https://odi.xsponse.com';
};

/**
 * Get document extension from filename string
 *
 * @param {string} filename - The filename string
 * @return {string} - The document extension
 */
export const getDocumentExtension = (filename: string): string => {
	return (filename ?? '').split('.').pop() || '';
};
