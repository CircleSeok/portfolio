import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';
import { TOKEN, DATABASE_ID } from '@/config';

export default function Projects({ projects }) {
  console.log(projects);

  return (
    <Layout>
      <Head>
        <title>송원석 포트폴리오</title>
        <meta name='description' content='오늘도 빡코딩' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>총 프로젝트 : {projects.results.length}</h1>

      {projects.results.map((aProject) => (
        <h1>{aProject.properties.Name.title[0].plain_text}</h1>
      ))}
    </Layout>
  );
}

//빌드 타임에 호출

export async function getStaticProps() {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-02-22',
      'content-type': 'application/json',
      authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: 'Name',
          direction: 'ascending',
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  const projectNames = projects.results.map(
    (aProject) => aProject.properties.Name.title[0]?.plain_text
  );

  console.log(`projectNames': ${projectNames}`);

  return {
    props: { projects },
  };
}
