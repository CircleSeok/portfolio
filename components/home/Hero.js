import React from 'react';
import Animation from './Animation';

export default function Hero() {
  return (
    <>
      <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
        <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
          안녕하세요 송원석입니다!
          <br className='hidden lg:inline-block' />
          오늘도 빡코딩
        </h1>
        <p className='mb-8 leading-relaxed'>
          때에, 피가 청춘의 교향악이다. 충분히 갑 영원히 끓는 간에 트고,
          봄바람이다. 내는 뛰노는 자신과 넣는 이상의 것이다. 꽃이 인간의 얼마나
          든 수 그들은 방황하여도, 말이다. 창공에 이상의 구하지 있다. 길을
          인생에 많이 것이다. 싹이 피어나는 얼마나 튼튼하며, 우리 품에 길지
          커다란 바이며, 것이다. 우리는 무엇을 가는 구하지 이것은 바로 방지하는
          꽃이 피다. 곳으로 얼마나 현저하게 평화스러운 쓸쓸하랴? 가치를 너의
          우리 뿐이다.
        </p>
        <div className='flex justify-center'>
          <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
            프로젝트 보러가기
          </button>
        </div>
      </div>
      <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
        <Animation />
      </div>
    </>
  );
}
