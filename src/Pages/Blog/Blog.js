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
                        <h1><span className='text-3xl  font-bold'>Question(03):</span>What is a unit test? Why should we write unit tests? </h1>
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <h1 className='mx-auto'>
                            <span className='text-2xl text-yellow-100 font-bold'>Answer:</span>Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.

                            In SDLC, STLC, V Model, Unit testing is first level of testing done before integration testing. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing.
                        </h1>
                    </div>
                </div>
                <div className="collapse w-80 mx-auto rounded-2xl mb-10">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-gray-600 text-primary-content peer-checked:bg-lime-500 peer-checked:text-secondary-content text-2xl">
                        <h1><span className='text-3xl  font-bold'>Question(04):</span>React vs. Angular vs. Vue?</h1>
                    </div>
                    <div className="collapse-content bg-orange-400 text-primary-content peer-checked:bg-indigo-800 peer-checked:text-secondary-content">
                        <h1 className='mx-auto'>
                            <span className='text-2xl text-yellow-100 font-bold'>Answer:</span>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.
                        </h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;