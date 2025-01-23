// for page navigation & to sort on leftbar

export type EachRoute = {
	title: string;
	href: string;
	noLink?: true; // noLink will create a route segment (section) but cannot be navigated
	items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
	{
		title: 'Introduction to AppDev and EmTech',
		href: '/intro-to-app-dev-and-em-tech',
		noLink: true,
		items: [
			{ title: 'Introduction', href: '/introduction' },
			{
				title: 'Different Types of Application Development',
				href: '/diff-types-of-app-dev',
				items: [
					{ title: 'Web Development', href: '/web-development' },
					{ title: 'Mobile Application Development', href: '/mobile-app-dev' },
					{ title: 'Desktop Application Development', href: '/desktop-app-dev' },
					{ title: 'Game Development', href: '/game-development' },
					{ title: 'Cloud Development', href: '/cloud-development' },
				],
			},
		],
	},
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
	const ans: Page[] = [];
	if (!node.noLink) {
		ans.push({ title: node.title, href: node.href });
	}
	node.items?.forEach((subNode) => {
		const temp = { ...subNode, href: `${node.href}${subNode.href}` };
		ans.push(...getRecurrsiveAllLinks(temp));
	});
	return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
