import React from 'react';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import MenuLink from './MenuLink';
interface ISideNavProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const SideNav: React.FC<ISideNavProps> = ({ isOpen, setIsOpen }) => {
  const handleClose = () => setIsOpen(false);

  return (
    <Transition
      show={isOpen}
      enter="transition duration-300 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-150 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Dialog open={isOpen} onClose={handleClose}>
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Panel className="absolute h-screen bg-white inset-0 left-0 shadow-xl w-64 p-4">
            <div className="flex justify-between items-center mb-4">
              <Dialog.Title className="font-semibold text-lg">Formula Lifestyle</Dialog.Title>
              <XIcon className="w-8 h-8" onClick={handleClose} />
            </div>

            <div className="w-full">
              <div>
                <MenuLink href="/" className="border-black">
                  Home
                </MenuLink>
                <MenuLink href="/collections" className="border-black">
                  Collections
                </MenuLink>
                <MenuLink href="/blog" className="border-black">
                  Blog
                </MenuLink>
                <MenuLink href="/faq" className="border-black">
                  FAQ
                </MenuLink>
              </div>

              <button className="mt-6 btn-dark w-full text-center outline-none">
                <Link href="/signin">Sign In</Link>
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SideNav;
