import React from 'react';
import '../CSS/Body.css';
import image from "../assets/Book.png";
import screen from '../assets/Screen.png';
import LogoMarquee from './Logos';

const Body = () => {
  return (
    <div>
      <section className="bg-black text-white py-8 relative">
        <div className="container mx-auto text-center">
          <h1 className="text-[6rem] md:text-[8rem] lg:text-[12rem] font-extrabold bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent leading-none animate__animated animate__fadeInUpBig">
            Creating
          </h1>
          <h1 className="h-[276px] flex-1 relative text-inherit leading-[110%] font-bold font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[32px] mq1125:text-19xl mq1125:leading-[42px]">
            Discerning Digital Works and Communication Collaterals
          </h1>
        </div>
      </section>
      <section className="bg-black py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 px-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent leading-none mb-4 animate__animated animate__fadeIn">
              We are Creative Designers, Insightful Strategists, and Exceptional Engineers
            </h2>
            <p className="text-lg text-white mb-4 md:text-xl animate__animated animate__fadeIn">
              The organization is focused on foregrounding expertise in its services, staying updated on global trends, refining domain knowledge, and adapting to evolving content creation arenas to effectively serve client brands.
            </p>
          </div>
          <div className="md:w-1/2 px-4">
            <img src={image} alt="BOOK" className="w-full rounded-lg animate__animated animate__fadeInUp animate__wavy" />
          </div>
        </div>
      </section>
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/4 text-center md:text-left bg-gray-800 p-8">
              <h3 className="text-4xl text-white font-bold mb-2">35,000</h3>
              <p className="text-sm text-gray-400">Websites Already Thriving with Us!</p>
            </div>
            <div className="w-[3rem] bg-black h-8"></div>
            <div className="w-full md:w-3/4 text-right bg-gray-800 p-4 md:pl-12">
              <p className="text-2xl text-white">
                Experience the <span className="text-green-400">power of speed</span> with our {' '}
                <span className="text-purple-400">cutting-edge hosting infrastructure</span>
              </p>
              <button className="mt-4 text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-800">Read Our Story</button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <img src={screen} alt="screen" className="w-full rounded-lg" />
          </div>
        </div>
      </section>
      <section className="py-20 bg-black text-white">
        <div className="flex flex-col items-start justify-start gap-8 ">
          <div className="flex items-start text-align-left pl-4 pr-8">
            <h1 className="text-white font-bold  text-6xl md:text-[7rem] leading-tight ">
              Let's unite <br /> for innovation
            </h1>
          </div>
          <div className="w-full ">
            <p className="font-bold text-4xl text-transparent bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text">Join 400+</p>
            <p className="text-white text-xl">companies already growing</p>
          </div>
        </div>
      </section>
      <section className='bg-black'>
        <LogoMarquee/>
      </section>
    </div>
  );
};

export default Body;
