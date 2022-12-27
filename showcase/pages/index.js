import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/Navbar";
import React from "react";
import Nav from "./components/Nav";
import requests from "../utils/requests";
const index = ({ results }) => {
  // console.log(results)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      <Nav/>
      {/* Bannner................. */}
      <section class="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
        <section class="p-5 md:p-0  2xl:grid-cols-4 gap-10">
          <article
            className="p-10 h-96  w-full rounded-xl text-gray-100 xl:col-span-2 bg-center bg-cover transform duration-500 hover:-translate-y-1 cursor-pointer"
            style={{
              backgroundImage:
                "url(https://media.istockphoto.com/photos/video-camera-camcorder-operator-working-at-live-event-broadcasting-picture-id1189780272?b=1&k=20&m=1189780272&s=170667a&w=0&h=e0sFDV16_djgzH45H45gyEhz_664z-pJH_QovAuvWts=)",
            }}
          >
            <div className="mt-16 flex justify-between ">
              <span className="p-3 pl-0 font-bold">Travel Guide</span>
              <span className="p-3 px-5 bg-gray-200  rounded-md text-base hover:bg-orange-600 cursor-pointer hover:text-white text-black ">
                Paid Membership
              </span>
            </div>
          </article>
        </section>
      </section>

      {/* Movie posts................. */}
      <h1 className=" text-4xl font-bold text-center text-red-600">
        Our Collection
      </h1>
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {results.articles.map((e) => {
            return (
              <div class="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                <img
                  src={e.urlToImage}
                  class="object-cover w-full h-64"
                  alt=""
                />
                <div class="p-5 border border-t-0">
                  <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <a
                      href="/"
                      class="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                      aria-label="Category"
                      title="traveling"
                    >
                      Published At{" "}
                    </a>
                    <span class="text-gray-600">— {e.publishedAt}</span>
                  </p>
                  <a
                    href="/"
                    aria-label="Category"
                    title="Visit the East"
                    class="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                  >
                    {e.title}
                  </a>
                  <p class="mb-2 text-gray-700">{e.description}</p>
                  <a
                    href={e.url}
                    aria-label=""
                    class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    Read more
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const genre =  context.query.genre;
  const request = await fetch(`https://newsapi.org/v2${requests[genre]?.url || requests.business.url}`);
  const results = await request.json();
  return {
    props: {results}, // will be passed to the page component as props
  }
}

// export async function getServerSideProps(context) {
//   const request = await fetch("https://newsapi.org/v2/top-headlines?category=sports&apiKey=104cfff1a98b405d81b296e9542c2332");
//   const results = await request.json();

//   return {
//     props: { results }, // will be passed to the page component as props
//   };
// }
export default index;
