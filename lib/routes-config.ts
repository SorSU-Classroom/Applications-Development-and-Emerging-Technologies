// for page navigation & to sort on leftbar

export type EachRoute = {
	title: string;
	href: string;
	noLink?: true; // noLink will create a route segment (section) but cannot be navigated
	items?: EachRoute[];
};

// export const ROUTES: EachRoute[] = [
//   {
//     title: "Getting Started",
//     href: "/getting-started",
//     noLink: true,
//     items: [
//       { title: "Introduction", href: "/introduction" },
//       {
//         title: "Installation",
//         href: "/installation",
//       },
//       { title: "Quick Start Guide", href: "/quick-start-guide" },
//       {
//         title: "Project Structure",
//         href: "/project-structure",
//       },
//       {
//         title: "Components",
//         href: "/components",
//         items: [
//           { title: "Stepper", href: "/stepper" },
//           { title: "Tabs", href: "/tabs" },
//           { title: "Note", href: "/note" },
//           { title: "Code Block", href: "/code-block" },
//           { title: "Image & Link", href: "/image-link" },
//           { title: "Custom", href: "/custom" },
//         ],
//       },
//       { title: "Themes", href: "/themes" },
//       {
//         title: "Customize",
//         href: "/customize",
//       },
//     ],
//   },
// ];

export const ROUTES: EachRoute[] = [
	{
		title: 'Introduction to AppDev and EmTech',
		href: '/intro-to-app-dev-and-em-tech',
		noLink: true,
		items: [
			{ title: 'Introduction', href: '/introduction' },
			{
				title: 'Different Types of Application Development',
				href: '/different-types-of-application-development',
				items: [
					{ title: 'Web Development', href: '/web-development' },
					{ title: 'Mobile Application Development', href: '/mobile-application-development' },
					{ title: 'Desktop Application Development', href: '/desktop-application-development' },
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
