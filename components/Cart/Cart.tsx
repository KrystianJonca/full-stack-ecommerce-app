import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import CartItems from './CartItems';
import useCart from '../../hooks/useCart';
import useCheckout from '../../hooks/useCheckout';

const Cart: React.FC = () => {
  const {
    state: { products, totalPrice, isOpen },
    dispatch,
  } = useCart();

  const { mutate } = useCheckout();

  const handleClose = () => dispatch({ type: 'closeCart' });
  const handleCheckout = () => mutate(products);

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
            <Dialog.Panel className="absolute h-screen bg-white top-0 right-0 shadow-xl w-80 p-4">
              <div className="flex justify-between items-center mb-4">
                <Dialog.Title className="font-semibold text-lg">Your cart</Dialog.Title>
                <XIcon className="w-8 h-8" onClick={handleClose} />
              </div>

              <div className="w-full">
                {products.length !== 0 ? (
                  <CartItems products={products} />
                ) : (
                  <p>No products in your cart.</p>
                )}
                {products.length !== 0 && (
                  <button
                    onClick={handleCheckout}
                    className="mt-6 btn-dark w-full text-center outline-none"
                  >
                    Checkout
                  </button>
                )}
              </div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Cart;
