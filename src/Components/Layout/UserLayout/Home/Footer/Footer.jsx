import { memo } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    {
      title: "Company",
      items: [
        { name: "About", to: "/about" },
        { name: "Careers", to: "/careers" },
        { name: "Brand Center", to: "/brand-center" },
        { name: "Blog", to: "/blog" },
      ],
    },
    {
      title: "Help center",
      items: [
        { name: "Discord Server", to: "/discord" },
        { name: "Twitter", to: "/twitter" },
        { name: "Facebook", to: "/facebook" },
        { name: "Contact Us", to: "/contact" },
      ],
    },
    {
      title: "Legal",
      items: [
        { name: "Privacy Policy", to: "/privacy-policy" },
        { name: "Licensing", to: "/licensing" },
        { name: "Terms & Conditions", to: "/terms-conditions" },
      ],
    },
    {
      title: "Download",
      items: [
        { name: "iOS", to: "/download/ios" },
        { name: "Android", to: "/download/android" },
        { name: "Windows", to: "/download/windows" },
        { name: "MacOS", to: "/download/macos" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Facebook", to: "#", icon: <FacebookIcon /> },
    { name: "Discord", to: "#", icon: <DiscordIcon /> },
    { name: "Twitter", to: "#", icon: <TwitterIcon /> },
    { name: "GitHub", to: "#", icon: <GitHubIcon /> },
  ];

  return (
    <footer className='bg-root-bg dark:bg-semi-dark mt-5'>
      <div className='mx-auto w-full max-w-screen-xl px-4 py-6 lg:py-8'>
        <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
          {links.map((section, index) => (
            <div key={index}>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                {section.title}
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                {section.items.map((item, idx) => (
                  <li className='mb-4' key={idx}>
                    <Link to={item.to} className='hover:underline'>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='flex flex-col items-center justify-between py-6 bg-gray-100 dark:bg-gray-700 md:flex-row'>
          <span className='text-sm text-gray-500 dark:text-gray-300'>
            &copy; 2023 <Link to='/'>React™</Link>. All Rights Reserved.
          </span>
          <div className='flex mt-4 space-x-5 rtl:space-x-reverse md:mt-0'>
            {socialLinks.map((link, idx) => (
              <Link
                to={link.to}
                className='text-gray-400 hover:text-gray-900 dark:hover:text-white'
                key={idx}
              >
                {link.icon}
                <span className='sr-only'>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const FacebookIcon = () => (
  <svg
    className='w-4 h-4'
    aria-hidden='true'
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    viewBox='0 0 8 19'
  >
    <path
      fillRule='evenodd'
      d='M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z'
      clipRule='evenodd'
    />
  </svg>
);

const DiscordIcon = () => (
  <svg
    className='w-4 h-4'
    aria-hidden='true'
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    viewBox='0 0 21 16'
  >
    <path d='M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z' />
  </svg>
);

const TwitterIcon = () => (
  <svg
    className='w-4 h-4'
    aria-hidden='true'
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    viewBox='0 0 20 17'
  >
    <path d='M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z' />
  </svg>
);

const GitHubIcon = () => (
  <svg
    className='w-4 h-4'
    aria-hidden='true'
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    viewBox='0 0 20 20'
  >
    <path
      fillRule='evenodd'
      d='M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.166 6.839 9.489.5.091.683-.217.683-.483 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.152-1.109-1.46-1.109-1.46-.906-.617.069-.604.069-.604 1.004.07 1.532 1.027 1.532 1.027.891 1.517 2.341 1.08 2.91.826.091-.645.35-1.08.636-1.328-2.22-.252-4.555-1.11-4.555-4.943 0-1.09.39-1.983 1.03-2.682-.104-.253-.446-1.266.098-2.64 0 0 .84-.268 2.75 1.025A9.563 9.563 0 0 1 10 5.66a9.52 9.52 0 0 1 2.5.336c1.91-1.293 2.75-1.025 2.75-1.025.546 1.374.203 2.387.1 2.64.64.7 1.03 1.592 1.03 2.682 0 3.842-2.338 4.688-4.565 4.937.36.31.68.923.68 1.86 0 1.344-.012 2.428-.012 2.756 0 .269.18.58.688.482C17.138 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10Z'
      clipRule='evenodd'
    />
  </svg>
);

export default memo(Footer);
