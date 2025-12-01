// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Introduction to AppDev and EmTech",
    href: "/intro-to-app-dev-and-em-tech",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      {
        title: "Different Types of Application Development",
        href: "/diff-types-of-app-dev",
        items: [
          { title: "Web Development", href: "/web-development" },
          { title: "Mobile Application Development", href: "/mobile-app-dev" },
          {
            title: "Desktop Application Development",
            href: "/desktop-app-dev",
          },
          { title: "Game Development", href: "/game-development" },
          { title: "Cloud Development", href: "/cloud-development" },
        ],
      },
    ],
  },
  {
    title: "Web Development",
    href: "/web-development",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      {
        title: "HTML",
        href: "/html",
        items: [
          {
            title: "HTML Tags",
            href: "/html-tags",
            items: [
              {
                // HTML
                title: "HTML <html>",
                href: "/html-tag",
              },
              {
                // Head
                title: "Head <head>",
                href: "/head-tag",
              },
              {
                // title
                title: "Title <title>",
                href: "/title-tag",
              },
              {
                // body
                title: "Body <body>",
                href: "/body-tag",
              },
              {
                // h1-h6
                title: "Headings <h1> to <h6>",
                href: "/headings-tag",
              },
              {
                // p
                title: "Paragraph <p>",
                href: "/paragraph-tag",
              },
              {
                // div
                title: "Division <div>",
                href: "/division-tag",
              },
              {
                // section
                title: "Section <section>",
                href: "/section-tag",
              },
              {
                // span
                title: "Span <span>",
                href: "/span-tag",
              },
              {
                // br
                title: "Line Break <br>",
                href: "/line-break-tag",
              },
              {
                // hr
                title: "Horizontal Rule <hr>",
                href: "/horizontal-rule-tag",
              },
              {
                // img
                title: "Image <img>",
                href: "/image-tag",
              },
              {
                // a
                title: "Anchor <a>",
                href: "/anchor-tag",
              },
              {
                // ul
                title: "Unordered List <ul>",
                href: "/unordered-list-tag",
              },
              {
                // ol
                title: "Ordered List <ol>",
                href: "/ordered-list-tag",
              },
              {
                // li
                title: "List Item <li>",
                href: "/list-item-tag",
              },
              {
                // strong
                title: "Strong <strong>",
                href: "/strong-tag",
              },
              {
                // b
                title: "Bold <b>",
                href: "/bold-tag",
              },
              {
                // em
                title: "Emphasis <em>",
                href: "/emphasis-tag",
              },
              {
                // i
                title: "Italic <i>",
                href: "/italic-tag",
              },
              {
                // table
                title: "Table <table>",
                href: "/table-tag",
              },
              {
                // tr
                title: "Table Row <tr>",
                href: "/table-row-tag",
              },
              {
                // th
                title: "Table Header <th> and Table Data <td>",
                href: "/table-header-and-data-tag",
              },
              {
                // form
                title: "Form <form>",
                href: "/form-tag",
              },
              {
                // input
                title: "Input <input>",
                href: "/input-tag",
              },
              {
                // textarea
                title: "Textarea <textarea>",
                href: "/textarea-tag",
              },
              {
                // button
                title: "Button <button>",
                href: "/button-tag",
              },
              {
                // label
                title: "Label <label>",
                href: "/label-tag",
              },
              {
                // select
                title: "Select <select>",
                href: "/select-tag",
              },
              {
                // iframe
                title: "Inline Frame <iframe>",
                href: "/iframe-tag",
              },
            ],
          },
          {
            title: "More About HTML",
            href: "/more-about-html",
          },
        ],
      },
      {
        title: "CSS",
        href: "/css",
        items: [
          {
            title: "Core Concepts",
            href: "/core-concepts",
            noLink: true,
            items: [
              {
                title: "Cascading and Specificity",
                href: "/cascading-and-specificity",
              },
              {
                title: "Selectors",
                href: "/selectors",
              },
              {
                title: "The Box Model",
                href: "/box-model",
              },
              {
                title: "Units",
                href: "/units",
              },
            ],
          },
          {
            title: "Properties",
            href: "/properties",
            noLink: true,
            items: [
              // Colors
              {
                title: "Colors",
                href: "/colors",
              },
              // Box
              {
                title: "Box",
                href: "/box",
              },
              // Text
              {
                title: "Text",
                href: "/text",
              },
              // Layout
              {
                title: "Layout",
                href: "/layout",
                // items: [
                // 	{
                // 		title: 'Flexbox',
                // 		href: '/flexbox',
                // 	},
                // 	{
                // 		title: 'Grid',
                // 		href: '/grid',
                // 	},
                // ],
              },
              // Positioning
              {
                title: "Positioning",
                href: "/positioning",
              },
              // Transforms
              {
                title: "Transforms",
                href: "/transforms",
              },
              // Interactivity
              {
                title: "Interactivity",
                href: "/interactivity",
                items: [
                  {
                    title: "Transitions",
                    href: "/transitions",
                  },
                  {
                    title: "Animations",
                    href: "/animations",
                  },
                ],
              },
              // Filters
              {
                title: "Filters",
                href: "/filters",
              },
              // Responsive Design
              {
                title: "Responsive Design",
                href: "/responsive-design",
                noLink: true,
                items: [
                  {
                    title: "Media Queries",
                    href: "/media-queries",
                  },
                  // {
                  // 	title: 'Viewport',
                  // 	href: '/viewport',
                  // },
                  {
                    title: "Responsive Images",
                    href: "/responsive-images",
                  },
                ],
              },
            ],
          },
          {
            title: "Frameworks",
            href: "/frameworks",
          },
        ],
      },
    ],
  },
  {
    title: "Version Control",
    href: "/version-control",
    noLink: true,
    items: [
      {
        title: "Introduction",
        href: "/introduction-to-version-control",
      },
      {
        title: "Git Basics",
        href: "/git-basics",
      },
      {
        title: "Branching and Merging",
        href: "/branching-and-merging",
      },
      {
        title: "GitHub",
        href: "/github",
      },
      {
        title: "Best Practices",
        href: "/best-practices-for-version-control",
      },
      {
        title: "More About Version Control, Git, and GitHub",
        href: "/more-about-version-control-git-and-github",
      },
    ],
  },
  {
    title: "NextJS",
    href: "/nextjs",
    noLink: true,
    items: [
      {
        title: "Introduction",
        href: "/introduction-to-nextjs",
      },
      {
        title: "Installation",
        href: "/installation",
      },
      {
        title: "Core Features of NextJS",
        href: "/core-features-of-nextjs",
      },
      {
        title: "Components",
        href: "/components-in-nextjs",
      },
      {
        title: "Styling",
        href: "/styling-in-nextjs",
      },
      {
        title: "Routing",
        href: "/routing-in-nextjs",
      },
      {
        title: "State Management",
        href: "/state-management-in-nextjs",
      },
      {
        title: "Hooks",
        href: "/hooks-in-nextjs",
      },
      {
        title: "More about NextJS",
        href: "/more-about-nextjs",
      },
    ],
  },
  {
    title: "NextJS Libraries",
    href: "/nextjs-libraries",
    noLink: true,
    items: [
      {
        title: "Introduction",
        href: "/introduction",
      },
      {
        title: "UI Libraries",
        href: "/ui-libraries",
        noLink: true,
        items: [
          {
            title: "Introduction",
            href: "/introduction",
          },
          {
            title: "Tailwind CSS",
            href: "/tailwind-css",
          },
          {
            title: "Material UI",
            href: "/material-ui",
          },
          {
            title: "More UI Libraries",
            href: "/more-ui-libraries",
          }
        ]
      },
      {
        title: "Animation and Effects Libraries",
        href: "/animation-and-effects",
        noLink: true,
        items: [
          {
            title: "Introduction",
            href: "/introduction",
          },
          {
            title: "GSAP (GreenSock Animation Platform)",
            href: "/gsap",
          },
          {
            title: "Framer Motion",
            href: "/framer-motion",
          },
          {
            title: "More Animation and Effects Libraries",
            href: "/more-animation-and-effects-libraries",
          }
        ]
      }
    ],
  }
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
