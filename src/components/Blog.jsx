import React from "react";

const Blog = () => {
  return (
    <div className="flex flex-col gap-6 mt-6 mb-20">
      <div className=" w-full pt-10 pb-6">
        <h1 className="text-3xl text-center bg-base-100">Our Blogs</h1>
      </div>
      <div className=" w-70 container mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">When should you use context API?</h2>
          <p>
            Context API is a React feature that provides a way to pass data
            through the component without doing props drilling manually at every
            level. We should use Context API when you have data or state that
            needs to be shared multiple components that are not directly
            connected in the any other component.
          </p>
        </div>
      </div>
      <div className=" w-70 w-70 container mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">What is a custom hook?</h2>
          <p>
            A custom hook is a reusable function that extracts component logic
            into a separate function. It starts with the prefix "use" and uses
            existing React hooks and other JavaScript functions. Custom hooks
            can be used to simplify and reuse code across multiple components,
            making it easier to maintain and test.
          </p>
        </div>
      </div>
      <div className=" w-70 w-70 container mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">What is useRef?</h2>
          <p>
            useRef is a powerful tool in React that allows you to store mutable
            data without triggering re-renders, making it useful for working
            with the DOM or other mutable data that needs to persist between
            renders.
          </p>
        </div>
      </div>
      <div className=" w-70 w-70 container mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">What is useMemo?</h2>
          <p>
            useMemo is a React hook that allows you to optimize expensive
            computations or prevent unnecessary re-renders by memoizing a
            function's return value. It takes a function and an array of
            dependencies, and only re-executes the function when a dependency
            has changed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
