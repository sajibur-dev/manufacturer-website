import React from "react";

const Blogs = () => {
  return (
    <div className="space-y-28">
      <div className="w-full lg:w-4/5 mx-auto space-y-5 p-7 shadow-xl rounded-lg ">
        <h1 className="text-3xl">How will you improve the performance of a React Application?</h1>
        <div className="p-5 space-y-5">
          <h2 className="text-2xl">Here 3 ways to improve performance of react app?</h2>
          <ul className="space-y-5 text-lg">
            <li>1. Keeping component state local where necessary : We’ve learned that a state update in a parent component re-renders the parent and its child components.So, to ensure re-rendering a component only happens when necessary, we can extract the part of code that cares about the component state, making it local to that part of the code</li>
            <li>2. Memoizing React components to prevent unnecessary re-renders.emoization is an optimization strategy that caches a component-renderedoperation, saves the result in memory, and returns the cached result for the same input.</li>
            <li>3. Code-splitting in React using dynamic  <span className="text-orange-600">import()</span> : Code-splitting is another important optimization technique for a React application. By default, when a React application renders in a browser, a “bundle” file containing the entire application code loads and serves to users at once. This file generates by merging all the code files needed to make a web application work The idea of bundling is useful because it reduces the number of HTTP requests a page can handle. However, as an application grows, the file sizes increase, thus increasing the bundle file. At a certain point, this continuous file increase slows the initial page load, reducing the user’s satisfaction.</li>
          </ul>
        </div>
      </div>

      <div className="w-full lg:w-4/5 mx-auto space-y-5 p-7 shadow-xl rounded-lg ">
      <h1 className="text-3xl">What are the different ways to manage a state in a React application?</h1>
      <div className="p-5 space-y-5">
        <h2 className="text-2xl">There 4 way to manage state in our react app</h2>
        <div className="space-y-5 text-xl">
          <p> 1.<span className="text-orange-500">Loacal state </span>: Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook. For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs</p>

          <p>2.<span className="text-orange-500">Global state</span> : Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our 
          application. Sometimes state we think should be local might become global.
          </p>

          <p>3 . <span className="text-orange-500"> Server state</span> : Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state. Fortunately there are tools such as SWR and React Query that make managing server state much easier. </p>



          <p>4. <span className="text-orange-500">URL state</span>  : Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL! There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build</p>
        </div>
      </div>
      </div>


      <div className="w-full lg:w-4/5 mx-auto space-y-5 p-7 shadow-xl rounded-lg"  >
        <h1 className="text-3xl">How does prototypical inheritance work</h1>
        <p className="text-lg">prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function</p>
      </div>
    </div>
  );
};

export default Blogs;
