import React from 'react';
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';


const FooterWithSocialMediaIcons: React.FC = () => {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              alt="Flowbite Logo"
              href="https://flowbite.com"
              name="Flowbite"
              src="https://flowbite.com/docs/images/logo.svg"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Flowbite
                </Footer.Link>
                <Footer.Link href="#">
                  Tailwind CSS
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

