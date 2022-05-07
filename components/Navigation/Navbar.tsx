import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SideNav from './SideNav';

import { MenuIcon, ShoppingCartIcon } from '@heroicons/react/outline';

const Navbar: React.FC = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);

  const handleSideNavOpen = () => setIsSideNavOpen(true);

  return (
    <>
      <SideNav isOpen={isSideNavOpen} setIsOpen={setIsSideNavOpen} />
      <nav className="px-4 pb-2">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div>
            <MenuIcon className="h-8 w-8 cursor-pointer" onClick={handleSideNavOpen} />
          </div>

          <div>
            <Link href="/">
              <span className="cursor-pointer">
                <Image src="/Logo.svg" alt="Formula Lifestyle Logo" width="100" height="100" />
              </span>
            </Link>
          </div>

          <div>
            <ShoppingCartIcon className="w-8 h-8 cursor-pointer" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
