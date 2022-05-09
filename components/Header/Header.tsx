import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="relative w-full aspect-square sm:aspect-video">
      <Image
        src="/header.png"
        alt="Group of people wearing t-shirts"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute w-full h-full grid items-center bg-primary-dark bg-opacity-70">
        <div className="text-center text-primary-light">
          <h1 className="heading drop-shadow-xl">Formula 1 Inspired Clothing</h1>
          <p className="text-xl drop-shadow-xl m-4 mb-8">
            Affordable merch created by fans for fans.
          </p>

          <Link href="/products">
            <span className="btn-light text-2xl">Shop all</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
