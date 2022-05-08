import React, { Fragment } from 'react';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import MenuLink from './MenuLink';
import useAuth from '../../hooks/useAuth';

interface ISideNavProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const SideNav: React.FC<ISideNavProps> = ({ isOpen, setIsOpen }) => {
  const { session, signIn, signOut } = useAuth();

  const handleClose = () => setIsOpen(false);

  const handleSignOut = () => signOut();

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-400"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-400"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
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

                {session ? (
                  <div>
                    <p className="mt-4 text-xl text-wrap">
                      Hello,{' '}
                      <Link href={`/customers/${session.user.email}`}>
                        <span className="font-bold hover:border-b-2 border-primary-dark cursor-pointer">
                          {session.user.email?.substring(0, session.user.email.indexOf('@'))}
                        </span>
                      </Link>
                    </p>
                    <button
                      onClick={handleSignOut}
                      className="mt-6 btn-dark w-full text-center outline-none"
                    >
                      Sign out
                    </button>
                  </div>
                ) : (
                  <Link href="/auth/signin">
                    <div className="mt-6 btn-dark w-full text-center outline-none">Sign In</div>
                  </Link>
                )}
              </div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default SideNav;
