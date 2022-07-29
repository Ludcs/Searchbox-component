import React from 'react';

export const User = ({name}) => {
  return (
    <div className="w-full text-center p-1 border-l-0 border-r-0 border-t border-b border-slate-300">
      {name}
    </div>
  );
};
