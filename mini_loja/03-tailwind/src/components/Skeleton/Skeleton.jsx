import React from 'react';

const Skeleton = () => {
  return (
    <div className="rounded-lg bg-surface p-4 shadow-md">
      <div className="mb-4 w-full animate-pulse rounded bg-skeleton aspect-[2/3]"></div>
      <div className="mb-2 h-5 w-full animate-pulse rounded bg-skeleton"></div>
      <div className="h-5 w-3/5 animate-pulse rounded bg-skeleton"></div>
    </div>
  );
};

export default Skeleton;