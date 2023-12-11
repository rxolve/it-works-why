import Head from "next/head";

export default function Seo({ title }: { title?: string }) {
  return (
    <Head>
      <title>{title} | It works why?</title>
    </Head>
  );
}
