import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';
import { TOKEN, DATABASE_ID } from '@/config';
import ProjectItem from '@/components/projects/ProjectItem';

export default function Projects({ projects }) {
  console.log(projects);

  return (
    <Layout>
      <div className='flex flex-col items-center justify-center min-h-screen px-6 mb-10'>
        <Head>
          <title>송원석 포트폴리오</title>
          <meta name='description' content='오늘도 빡코딩' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <h1 className='text-4xl font-bold sm:text-6xl'>
          총 프로젝트 :
          <span className='pl-4 text-blue-500'>{projects.results.length}</span>
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 m-6 py-10 gap-8 w-full'>
          {projects.results.map((aProject) => (
            <ProjectItem key={aProject.id} data={aProject} />
          ))}
        </div>
      </div>
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
