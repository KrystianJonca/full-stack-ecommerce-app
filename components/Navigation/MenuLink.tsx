import React from 'react';
import Link from 'next/link';

interface IMenuLinkProps {
  href: string;
  className?: string;
  readonly children: React.ReactNode;
}

const MenuLink: React.FC<IMenuLinkProps> = ({ href, className, children }) => {
  return (
    <p className={`${className} font-extralight py-1`}>
      <Link href={href}>
        <span className="hover:border-b-2">{children}</span>
      </Link>
    </p>
  );
};

export default MenuLink;
