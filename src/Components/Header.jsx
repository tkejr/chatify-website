import React from "react";

function Header() {
  return (
    <>
      <header>
        <div className="relative bg-black px-4 md:px-10">
          <div className="flex flex-row items-start justify-between gap-x-4 py-3 md:pt-4">
            <div className="flex cursor-pointer flex-col items-start gap-x-4 gap-y-2 md:flex-row md:items-center">
              <a
                href="/"
                className="inline-flex select-none items-center gap-x-2 rounded-lg border border-accent/10 bg-secondary py-[0.4rem] pl-2 pr-3 md:rounded-xl"
              >
                <svg
                  className="icon bg-magic-gradient text-secondary w-7 h-7 md:w-8 md:h-8 rounded-md md:rounded-lg shadow-sm"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 30 30"
                  aria-hidden="true"
                  role="presentation"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M13.646 21.057h-.142c-.11-.027-.15-.113-.178-.211-.137-.48-.253-.969-.418-1.44-.424-1.21-1.268-1.986-2.496-2.342-.403-.118-.808-.23-1.212-.345-.094-.027-.175-.07-.2-.176V16.4c.027-.11.113-.15.21-.178.456-.129.915-.244 1.363-.393 1.25-.417 2.05-1.272 2.413-2.54.114-.396.227-.794.34-1.192.04-.133.129-.207.25-.207.12 0 .207.074.247.208.155.519.265 1.052.46 1.557.446 1.153 1.28 1.89 2.466 2.227.4.114.8.227 1.2.343.141.04.221.135.218.252-.004.116-.079.201-.218.242-.5.146-1.01.263-1.499.441-1.185.432-1.941 1.277-2.287 2.492l-.342 1.205c-.026.094-.07.175-.175.2ZM18.62 14.224h-.084c-.067-.017-.09-.068-.107-.127-.082-.289-.152-.581-.25-.864-.255-.726-.761-1.192-1.498-1.405-.242-.07-.485-.138-.728-.207-.056-.016-.105-.042-.12-.106v-.085c.017-.067.068-.09.127-.107.273-.078.549-.147.817-.236.75-.25 1.23-.763 1.448-1.524.069-.238.136-.477.204-.715.024-.08.077-.125.15-.124.072 0 .125.044.148.124.093.311.16.631.276.934.268.692.768 1.134 1.48 1.336l.72.206c.085.025.133.082.13.152-.002.07-.046.12-.13.145-.3.087-.606.157-.9.264-.71.26-1.164.767-1.372 1.496l-.205.722c-.016.057-.042.106-.105.12Z"
                  />
                </svg>
                <h2 className="text-base font-medium capitalize tracking-tight text-accent/90 md:text-2xl">
                  Chatify
                </h2>
              </a>
              <span className="rounded-full border border-accent/10 bg-magic-gradient px-2 font-mono text-[0.7rem] font-semibold leading-5 text-secondary">
                Early Access
              </span>
            </div>
            <div className="w-fit items-center justify-center gap-x-2 rounded-lg p-1 backdrop-blur-md md:flex md:place-self-end md:rounded-xl"></div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
