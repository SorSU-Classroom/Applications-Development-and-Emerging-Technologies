import { notFound } from "next/navigation";

import DocsBreadcrumb from "@/components/docs-breadcrumb";
import DocsPagination from "@/components/docs-pagination";
import Toc from "@/components/toc";
import { Typography } from "@/components/typography";
import { getDocsForSlug } from "@/lib/markdown";
import { page_routes } from "@/lib/routes-config";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function DocPage(props: PageProps) {
  const params = await props.params;

  const { slug = [] } = params;

  const pathName = slug.join("/");
  const res = await getDocsForSlug(pathName);

  if (!res) notFound();
  return (
    <div className="flex items-start gap-10">
      <div className="flex-[4.5] pt-10">
        <DocsBreadcrumb paths={slug} />
        <Typography>
          <h1 className="!-mt-0.5 text-3xl">{res.frontmatter.title}</h1>
          <p className="-mt-4 text-[16.5px] text-muted-foreground">
            {res.frontmatter.description}
          </p>
          <div>{res.content}</div>
          <DocsPagination pathname={pathName} />
        </Typography>
      </div>
      <Toc path={pathName} />
    </div>
  );
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params;

  const { slug = [] } = params;

  const pathName = slug.join("/");
  const res = await getDocsForSlug(pathName);
  if (!res) return null;
  const { frontmatter } = res;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export function generateStaticParams() {
  return page_routes.map((item) => ({
    slug: item.href.split("/").slice(1),
  }));
}
