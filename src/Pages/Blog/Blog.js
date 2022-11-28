import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold my-15 py-10'>There are some question and Answer here-------</h1>

            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>

                <div className="collapse w-80 mx-auto rounded-2xl">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-2xl">
                        <h1><span className='text-3xl text-black  font-bold'>Question(01):</span>What are the different ways to manage a state in a React application?</h1>
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <h1 className='mx-auto'>
                            <span className='text-2xl text-yellow-100 font-bold'>Answer:</span> The Four Kinds of React State to Manage
                            Local state. Global state. Server state. URL state.
                            We can use URL to store some data e.g.

                            The id of the current item, being viewed
                            Filter parameters
                            Pagination offset and limit
                            Sorting data
                            Keeping such data in the URL allows users to share deep links with others.

                            It is recommended to avoid storing such information in the app’s state to avoid the URL in our app getting out of sync. The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc. Update the URL as required when the settings change

                            React Router is a great tool to handle routes and manage the params.
                        </h1>
                    </div>
                </div>
                <div className="collapse w-80 mx-auto rounded-2xl mt-5">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-pink-700 text-primary-content peer-checked:bg-orange-500 peer-checked:text-secondary-content text-2xl">
                        <h1><span className='text-3xl  font-bold'>Question(02):</span>	How does prototypical inheritance work?</h1>
                    </div>
                    <div className="collapse-content bg-gray-300 text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <h1 className='mx-auto'>
                            <span className='text-2xl text-yellow-100 font-bold'>Answer:</span>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object. </h1>
                    </div>
                </div>
                <div className="collapse w-80 mx-auto my-6 rounded-2xl">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-2xl">
                        <h1><span className='text-3xl  font-bold'>Question(03):</span>o	What is the difference between javascript and NodeJS? </h1>
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <h1 className='mx-auto'>
                            <span className='text-2xl text-yellow-100 font-bold'>Answer:</span>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                        </h1>
                    </div>
                </div>
                <div className="collapse w-80 mx-auto rounded-2xl mb-10">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-gray-600 text-primary-content peer-checked:bg-lime-500 peer-checked:text-secondary-content text-2xl">
                        <h1><span className='text-3xl  font-bold'>Question(04):</span>How does NodeJS handle multiple requests at the same time?</h1>
                    </div>
                    <div className="collapse-content bg-orange-400 text-primary-content peer-checked:bg-indigo-800 peer-checked:text-secondary-content">
                        <h1 className='mx-auto'>
                            <span className='text-2xl text-yellow-100 font-bold'>Answer:</span>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.

                        </h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;