import React from 'react';
import NewsCard from '../components/NewsCard';

const newsData = [
  {
    title: 'Breaking News: Market Hits All-Time High',
    date: 'August 25, 2024',
    source: 'BBC News',
    description: 'The stock market reached an all-time high today, with major indices soaring due to investor optimism.',
  },
  {
    title: 'Local Elections: The Results Are In',
    date: 'August 24, 2024',
    source: 'The New York Times',
    description: 'The local elections concluded yesterday, with surprising results across several key districts.',
  },
  {
    title: 'Tech Giants Announce New Collaboration',
    date: 'August 23, 2024',
    source: 'TechCrunch',
    description: 'Several leading tech companies have announced a new collaboration to work on AI development.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusamus est quidem consequuntur, itaque similique accusantium impedit vitae, numquam magni rem aspernatur voluptates delectus ipsa doloribus, totam sint modi dicta. Expedita praesentium nemo porro placeat vitae tempora mollitia quis officiis impedit! Assumenda soluta ipsam repudiandae in mollitia illo, dolorum suscipit'
,
  },
  // Add more news items as needed
];

function News() {
  return (
    <div className="flex flex-col items-center  mx-auto w-full lg:w-3/4 h-full p-2 lg:p-4">
      <header className="border-b-2 text-blue-900 enter p-2">
        <h1 className="text-2xl font-bold text-center">Read the latest news with MY-ChITTI</h1>
      </header>
      <main className="flex flex-col justify-center items-center p-4 h-screen mx-auto">
      <div className=" overflow-scroll ">
      {newsData.map((news, index) => (
        <NewsCard
          key={index}
          title={news.title}
          date={news.date}
          source={news.source}
          description={news.description}
        />
      ))}
    </div>
      </main>
    </div>
  );
}

export default News;
