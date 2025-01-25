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
	{
		title: 'Web Development',
		href: '/web-development',
		noLink: true,
		items: [
			{ title: 'Introduction', href: '/introduction' },
			{
				title: 'HTML',
				href: '/html',
				items: [
					{
						title: 'HTML Tags',
						href: '/html-tags',
						items: [
							{
								// HTML
								title: 'HTML <html>',
								href: '/html',
							},
							{
								// Head
								title: 'Head <head>',
								href: '/head',
							},
							{
								// title
								title: 'Title <title>',
								href: '/title',
							},
							{
								// body
								title: 'Body <body>',
								href: '/body',
							},
							{
								// h1-h6
								title: 'Headings <h1> to <h6>',
								href: '/headings',
							},
							{
								// p
								title: 'Paragraph <p>',
								href: '/paragraph',
							},
							{
								// div
								title: 'Division <div>',
								href: '/division',
							},
							{
								// section
								title: 'Section <section>',
								href: '/section',
							},
							{
								// span
								title: 'Span <span>',
								href: '/span',
							},
							{
								// br
								title: 'Line Break <br>',
								href: '/line-break',
							},
							{
								// hr
								title: 'Horizontal Rule <hr>',
								href: '/horizontal-rule',
							},
							{
								// img
								title: 'Image <img>',
								href: '/image',
							},
							{
								// a
								title: 'Anchor <a>',
								href: '/anchor',
							},
							{
								// ul
								title: 'Unordered List <ul>',
								href: '/unordered-list',
							},
							{
								// ol
								title: 'Ordered List <ol>',
								href: '/ordered-list',
							},
							{
								// li
								title: 'List Item <li>',
								href: '/list-item',
							},
							{
								// strong
								title: 'Strong <strong>',
								href: '/strong',
							},
							{
								// b
								title: 'Bold <b>',
								href: '/bold',
							},
							{
								// em
								title: 'Emphasis <em>',
								href: '/emphasis',
							},
							{
								// i
								title: 'Italic <i>',
								href: '/italic',
							},
							{
								// table
								title: 'Table <table>',
								href: '/table',
							},
							{
								// tr
								title: 'Table Row <tr>',
								href: '/table-row',
							},
							{
								// th
								title: 'Table Header <th> and Table Data <td>',
								href: '/table-header-and-data',
							},
							{
								// form
								title: 'Form <form>',
								href: '/form',
							},
							{
								// input
								title: 'Input <input>',
								href: '/input',
							},
							{
								// textarea
								title: 'Textarea <textarea>',
								href: '/textarea',
							},
							{
								// button
								title: 'Button <button>',
								href: '/button',
							},
							{
								// label
								title: 'Label <label>',
								href: '/label',
							},
							{
								// select
								title: 'Select <select>',
								href: '/select',
							},
							{
								// iframe
								title: 'Inline Frame <iframe>',
								href: '/iframe',
							},
						],
					},
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
