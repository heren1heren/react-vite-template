import { FC, ReactNode } from 'react';

type LayOutProps = {
  children: ReactNode;
};
export const LayOut: FC<LayOutProps> = ({ children }) => {
  return (
    <div>
      <p>layout stuff...</p>
      <div> {children}</div>
    </div>
  );
};
