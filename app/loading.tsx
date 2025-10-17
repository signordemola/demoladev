import React from "react";

// return <Preloader />;

const Loading = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center fixed z-[999] bg-neutral-darker">
      <p>loading...</p>
    </div>
  );
};

export default Loading;
