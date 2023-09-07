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
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/logo.svg"}
                  alt="Description of your icon"
                  width={30}
                />

                <h4 className="text-base font-medium capitalize tracking-tight text-accent/90 md:text-2xl">
                  Chatify
                </h4>
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
