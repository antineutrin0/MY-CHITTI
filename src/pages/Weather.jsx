import React, { useState } from 'react';

const Weather = () => {
  const [location, setLocation] = useState('London');

  const data = {
    location: {
      name: "London",
      region: "City of London, Greater London",
      country: "United Kingdom",
      lat: 51.52,
      lon: -0.11,
      tz_id: "Europe/London",
      localtime_epoch: 1613896955,
      localtime: "2021-02-21 8:42"
    },
    current: {
      last_updated_epoch: 1613896210,
      last_updated: "2021-02-21 08:30",
      temp_c: 11,
      temp_f: 51.8,
      is_day: 1,
      condition: {
        text: "Partly cloudy",
        icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
        code: 1003
      },
      wind_mph: 3.8,
      wind_kph: 6.1,
      wind_degree: 220,
      wind_dir: "SW",
      pressure_mb: 1009,
      pressure_in: 30.3,
      precip_mm: 0.1,
      precip_in: 0,
      humidity: 82,
      cloud: 75,
      feelslike_c: 9.5,
      feelslike_f: 49.2,
      vis_km: 10,
      vis_miles: 6,
      uv: 1,
      gust_mph: 10.5,
      gust_kph: 16.9,
      air_quality: {
        co: 230.3,
        no2: 13.5,
        o3: 54.3,
        so2: 7.9,
        pm2_5: 8.6,
        pm10: 11.3,
        "us-epa-index": 1,
        "gb-defra-index": 1
      }
    }
  };
  
  const aiObservation = `It's a partly cloudy day in ${data.location.name} with a mild temperature of ${data.current.temp_c}°C. 
  The wind is gentle from the southwest at ${data.current.wind_mph} mph. 
  With a humidity level of ${data.current.humidity}%, it feels like ${data.current.feelslike_c}°C. 
  Air quality is good, making it a pleasant day to spend time <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi adipisci neque atque culpa id nihil magnam obcaecati quisquam? Harum nostrum reiciendis quae autem voluptates, sint reprehenderit excepturi praesentium sit veniam eveniet iste facilis voluptatem ea quas facere nesciunt explicabo quisquam provident necessitatibus delectus veritatis! Accusantium est laboriosam eius a! Dolores dolorum laborum nihil, voluptatum obcaecati tempore eveniet! Quibusdam est accusamus assumenda cumque quos aut veniam voluptatem aliquid fuga quidem necessitatibus odit officiis excepturi, consequuntur asperiores quis minima fugit natus dignissimos?</div>
`;

  return (
    <div className="w-full lg:w-1/2 mx-auto p-2 lg:p-4 bg-gray-900 text-gray-200 rounded-lg shadow-lg">
      {/* Input Box for Location */}
      <div>
        <p className="text-3xl text-blue-900 text-center mb-2 font-bold">
          Be updated With CHITTI
        </p>
      </div>
      <div className="flex flex-row-reverse justify-between items-center mb-4">
        <button className='w-1/2 lg:1/4 text-lg text-gray-200 font-semibold bg-sky-950 p-2 ml-2 text-center rounded-lg hover:bg-slate-500'>Set Location</button>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          className="w-1/2 lg:w-3/4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <h2 className="text-2xl font-bold mb-4">Weather in {data.location.name}, {data.location.country}</h2>
      
      <div className="grid grid-cols-2 gap-2 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Location Block */}
        <div className="p-4 bg-gray-700 rounded-lg shadow flex flex-col items-center">
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/marker.png"
            alt="Location Icon"
            className="w-8 h-8 mr-3"
          />
          <div>
            <h3 className="text-lg font-semibold mb-1">{data.location.name}</h3>
            <p>{data.location.region}</p>
            <p>{data.location.country}</p>
          </div>
        </div>

        <div className="p-4 bg-gray-700 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Temperature</h3>
          <p className="text-4xl font-bold">{data.current.temp_c}°C</p>
          <p>Feels like: {data.current.feelslike_c}°C</p>
          <img src={data.current.condition.icon} alt={data.current.condition.text} className="inline-block"/>
          <p>{data.current.condition.text}</p>
        </div>

        <div className="p-4 bg-gray-700 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Wind</h3>
          <p>Speed: {data.current.wind_mph} mph ({data.current.wind_kph} kph)</p>
          <p>Direction: {data.current.wind_dir} ({data.current.wind_degree}°)</p>
          <p>Gusts: {data.current.gust_mph} mph</p>
        </div>

        <div className="p-4 bg-gray-700 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Humidity & Pressure</h3>
          <p>Humidity: {data.current.humidity}%</p>
          <p>Pressure: {data.current.pressure_mb} mb</p>
        </div>

        <div className="p-4 bg-gray-700 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Air Quality</h3>
          <p>CO: {data.current.air_quality.co} μg/m³</p>
          <p>NO2: {data.current.air_quality.no2} μg/m³</p>
          <p>O3: {data.current.air_quality.o3} μg/m³</p>
        </div>

        <div className="p-4 bg-gray-700 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Other Information</h3>
          <p>Visibility: {data.current.vis_km} km</p>
          <p>Cloud cover: {data.current.cloud}%</p>
          <p>UV Index: {data.current.uv}</p>
          <p>Last Updated: {data.current.last_updated}</p>
        </div>
      </div>

      {/* AI Observation Block */}
      <div className="mt-4 p-4 bg-sky-900 h-64 lg:h-96 overflow-scroll text-white rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2 border-b text-center">CHITTI Ovservation</h3>
        <p>{aiObservation}</p>
      </div>
    </div>
  );
};

export default Weather;
