// import React from 'react';
// import Navbar from './Navbar';
// import FooterNav from './FooterNav';

// const AllBlog = () => {
//   const blogs = [
//     {
//       imgSrc: 'https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80',
//       title: 'Announcing a free plan for small teams',
//       description: 'At Wake, our mission has always been focused on bringing openness.',
//       authorImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
//       authorName: 'Lauren Waller',
//     },
//     {
//       imgSrc: 'https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80',
//       title: 'How Google Assistant now helps you record stories for kids',
//       description: 'Google is constantly updating its consumer AI, Google Assistant, with new features.',
//       authorImg: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
//       authorName: 'Aaron Larsson',
//     },
//     {
//       imgSrc: 'https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80',
//       title: "Front accounts - let's work together",
//       description: 'Are you an accountant? Are you a company formation advisor?',
//       authorImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
//       authorName: 'Lauren Waller',
//     },
//   ];

//   return <>
//     <Navbar/>
//     <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
//       {/* Title */}
//       <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
//         <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-black">The Blog</h2>
//         <p className="mt-1 text-black-600">See how game-changing companies are making the most of every engagement with Preline.</p>
//       </div>
//       {/* End Title */}

//       {/* Grid */}
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {blogs.map((blog, index) => (
//           <a key={index} className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40" href="#">
//             <div className="aspect-w-16 aspect-h-11">
//               <img className="w-full object-cover rounded-xl" src={blog.imgSrc} alt="Blog Image" />
//             </div>
//             <div className="my-6">
//               <h3 className="text-xl font-semibold text-gray-800 dark:group-hover:text-gray-900">
//                 {blog.title}
//               </h3>
//               <p className="mt-5 text-gray-600">
//                 {blog.description}
//               </p>
//             </div>
//             <div className="mt-auto flex items-center gap-x-3">
//               <img className="size-8 rounded-full" src={blog.authorImg} alt="Avatar" />
//               <div>
//                 <h5 className="text-sm text-gray-800">By {blog.authorName}</h5>
//               </div>
//             </div>
//           </a>
//         ))}
//       </div>
//       {/* End Grid */}

//     </div>
//     <FooterNav/>
//     </>
// };

// export default AllBlog;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import FooterNav from './FooterNav';
import blogData from './data/blogData';

const AllBlog = () => {
  const navigate = useNavigate();
  const blogs = [
    {
      id: 'firstblog',
      imgSrc: 'https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80',
      title: 'Revenge of the Never Trumpers',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
      authorImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
      authorName: 'Ahmad Sultani',
    },
    {
      id: 'secondblog',
      imgSrc: 'https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80',
      title: 'How Google Assistant now helps you record stories for kids',
      description: 'Google is constantly updating its consumer AI, Google Assistant, with new features...',
      authorImg: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
      authorName: 'Aaron Larsson',
    }
  ];

  const handleCardClick = (id) => {
    navigate(`/singleblog/${id}`);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl text-black">The Blog</h2>
          <p className="mt-1 text-black-600">See how game-changing companies are making the most of every engagement with Preline.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map((blog) => (
            <div key={blog.id} className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition duration-300 rounded-xl p-5" onClick={() => handleCardClick(blog.id)}>
              <div className="aspect-w-16 aspect-h-11">
                <img className="w-full object-cover rounded-xl" src={blog.imgSrc} alt={blog.title} />
              </div>
              <div className="my-6">
                <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
                <p className="mt-5 text-gray-600">{blog.description}</p>
              </div>
              <div className="mt-auto flex items-center gap-x-3">
                {/* <img className="size-8 rounded-full" src={blog.authorImg} alt={blog.authorName} /> */}
                <div>
                  <h5 className="text-sm text-gray-800">By {blog.author}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterNav />
    </>
  );
};

export default AllBlog;
