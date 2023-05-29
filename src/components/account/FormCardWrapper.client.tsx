import {ReactNode} from 'react';

type Props = {
  children?: ReactNode;
  title: string;
};

export default function FormCardWrapper({children, title}: Props) {
  return (
    <div className="w-full max-w-md rounded-lg border border-gray p-6">
      <h1 className="mb-4 text-center text-3xl tracking-[.1rem] lg:text-4xl lg:tracking-[.1rem] uppercase madfont ">{title}</h1>
      {children}
    </div>
  );
}
