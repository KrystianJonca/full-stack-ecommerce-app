import React from 'react';
import MenuLink from './MenuLink';
import Image from 'next/image';
import NewsletterSignUp from './NewsletterSignUp';

import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <>
      <div className="p-8 text-center bg-primary text-primary-light">
        <h2 className="heading">Get 10% off your first order</h2>
        <p className="text-base md:text-lg p-2">
          Join our email list for exclusive offers and the latest news.
        </p>
        <NewsletterSignUp />
      </div>
      <footer className="bg-primary-dark text-white p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-evenly items-center sm:items-start text-left p-4">
            <div className="w-full xs:w-4/5 md:w-1/4 pb-4">
              <h3 className="text-2xl font-bold py-4">Menu</h3>
              <MenuLink href="/">Home</MenuLink>
              <MenuLink href="/collections">Collections</MenuLink>
              <MenuLink href="/blog">Blog</MenuLink>
              <MenuLink href="/faq">FAQ</MenuLink>
              <MenuLink href="/privacy">Privacy Policy</MenuLink>
              <MenuLink href="/shipping">Shipping & Returns</MenuLink>
              <MenuLink href="/tos">Terms Of Service</MenuLink>
            </div>

            <div className="w-full xs:w-4/5 sm:w-1/4  pb-4">
              <h3 className="text-2xl font-bold py-4">Contact</h3>
              <p>
                <span className="font-bold">Address:</span> 63 Street, 00-000 Warsaw, Poland
              </p>
              <p>
                <span className="font-bold">Email:</span> contact@formulalifestyle.co
              </p>
              <p>
                <span className="font-bold">Phone</span> +48 123 456 789
              </p>
            </div>

            <div className="w-full xs:w-4/5 sm:w-1/4 py-4">
              <div className="grid items-center px-2">
                <Image
                  src="/CircleWhiteLogo.svg"
                  alt="White Formula Lifestyle Logo in a circle"
                  width="125"
                  height="125"
                />
              </div>
            </div>

            <div className="w-full xs:w-4/5 sm:w-1/4 pb-4">
              <h3 className="text-2xl font-bold py-4">About us</h3>
              <p>
                <span className="font-bold">Formula Lifestyle </span>is a fan-based company that
                makes Formula 1 merchandise affordable and stylish.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center text-2xl">
            <a href="#" className="mx-2 hover:scale-125 transition-all">
              <FaFacebook />
            </a>
            <a href="#" className="mx-2 hover:scale-125 transition-all">
              <FaInstagram />
            </a>
            <a href="#" className="mx-2 hover:scale-125 transition-all">
              <FaTiktok />
            </a>
            <a href="#" className="mx-2 hover:scale-125 transition-all">
              <FaYoutube />
            </a>
          </div>

          <p className="pt-4 text-center text-sm">
            Formula Lifestyle ?? 2022, Created & Designed by Krystian
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
