// import React from 'react';
// import FooterNav from './FooterNav';
// import Navbar from './Navbar';

// // Data object containing all the dynamic content
// const blogData = {

//   title: 'Revenge of the Never Trumpers',
//   author: 'Ahmad Sultani',
//   categories: ['Election', 'Politics'],
//   content: `
//     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
//     standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
//     make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
//     typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
//     sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
//     PageMaker including versions of Lorem Ipsum.
//   `,
//   subheading: 'What is Lorem Ipsum?',
//   blockquote: `
//     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
//     standard dummy text ever since the 1500s.
//   `,
//   tags: ['Election', 'people', 'Election2020', 'trump', 'Joe'],
//   backgroundImage: 'https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1'
// };

// const SingleBlog = () => {
//   return <>
//     <Navbar/>
//     <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
//       <div
//         className="bg-cover bg-center text-center overflow-hidden"
//         style={{
//           minHeight: '500px',
//           backgroundImage: `url(${blogData.backgroundImage})`
//         }}
//         title="Blog background image"
//       ></div>
//       <div className="max-w-3xl mx-auto">
//         <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
//           <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
//             <h1 className="text-gray-900 font-bold text-3xl mb-2">{blogData.title}</h1>
//             <p className="text-gray-700 text-xs mt-2">
//               Written By:{' '}
//               <a href="#" className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
//                 {blogData.author}
//               </a>{' '}
//               In{' '}
//               {blogData.categories.map((category, index) => (
//                 <span key={index}>
//                   <a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
//                     {category}
//                   </a>
//                   {index < blogData.categories.length - 1 && ', '}
//                 </span>
//               ))}
//             </p>

//             <p className="text-base leading-8 my-5">{blogData.content}</p>

//             <h3 className="text-2xl font-bold my-5">#{blogData.subheading}</h3>

//             <p className="text-base leading-8 my-5">{blogData.content}</p>

//             <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
//               {blogData.blockquote}
//             </blockquote>

//             <p className="text-base leading-8 my-5">{blogData.content}</p>

//             {blogData.tags.map((tag, index) => (
//               <React.Fragment key={index}>
//                 <a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
//                   #{tag}
//                 </a>
//                 {index < blogData.tags.length - 1 && ', '}
//               </React.Fragment>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//     <FooterNav/>
//     </>
// };

// export default SingleBlog;
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import FooterNav from './FooterNav';
import blogData from '../components/data/blogData.js'; 

const SingleBlog = () => {
  const { id } = useParams();
  const blog = blogData.find(b => b.id === id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div
          className="bg-cover bg-center text-center overflow-hidden"
          style={{
            minHeight: '500px',
            backgroundImage: `url(${blog.backgroundImage})`
          }}
          title="Blog background image"
        ></div>
        <div className="max-w-3xl mx-auto">
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
              <h1 className="text-gray-900 font-bold text-3xl mb-2">{blog.title}</h1>
              <p className="text-gray-700 text-xs mt-2">
                Written By:{' '}
                <a href="#" className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                  {blog.author}
                </a>{' '}
                In{' '}
                {blog.categories.map((category, index) => (
                  <span key={index}>
                    <a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                      {category}
                    </a>
                    {index < blog.categories.length - 1 && ', '}
                  </span>
                ))}
              </p>

              <p className="text-base leading-8 my-5">{blog.content}</p>

              <h3 className="text-2xl font-bold my-5">#{blog.subheading}</h3>

              <p className="text-base leading-8 my-5">{blog.content}</p>

              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
                {blog.blockquote}
              </blockquote>

              <p className="text-base leading-8 my-5">{blog.content}</p>

              {blog.tags.map((tag, index) => (
                <React.Fragment key={index}>
                  <a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                    #{tag}
                  </a>
                  {index < blog.tags.length - 1 && ', '}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterNav />
    </>
  );
};

export default SingleBlog;