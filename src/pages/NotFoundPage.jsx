import React, { useEffect } from "react";

function NotFoundPage() {
  useEffect(() => {
    document.title = "404 Not Found";
  });
  return (
    <main>
      <div className="text-center">
        <h1>Page not found</h1>
        <h2 className="text-base sm:text-lg lg:text-2xl ">
          Sorry, we couldn’t find the page you’re looking for.
        </h2>
        <div className="flex items-center justify-center mt-12 gap-x-6">
          <a href="/">
            <button className="button">Home</button>
          </a>
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage;
