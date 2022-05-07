import React from 'react';
import Link from 'next/link';

interface IMenuLinkProps {
  href: string;
  className?: string;
  readonly children: React.ReactNode;
}

const MenuLink: React.FC<IMenuLinkProps> = ({ href, className, children }) => {
  return (
    <p className={`font-extralight py-1`}>
      <Link href={href}>
        <span className={`${className} hover:border-b-2 cursor-pointer`}>{children}</span>
      </Link>
    </p>
  );
};

export default MenuLink;
