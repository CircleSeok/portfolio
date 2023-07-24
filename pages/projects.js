import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>송원석 포트폴리오</title>
        <meta name='description' content='오늘도 빡코딩' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>프로젝트</h1>
    </Layout>
  );
}
