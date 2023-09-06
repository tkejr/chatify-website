import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="relative bg-black px-4 md:px-10">
          <div className="flex w-full flex-col items-start justify-between gap-y-4 pb-8 pt-10 md:flex-row md:pb-12 md:pt-16">
            <div className="flex flex-col gap-y-2">
              <h3 className="bg-gradient-to-br from-secondary to-secondary/40 bg-clip-text text-xl font-medium tracking-tighter text-transparent drop-shadow-lg md:text-2xl">
                Join our awesome community
              </h3>
              <p className="max-w-xl text-base text-secondary/60 md:text-lg">
                Share work, seek support, stay updated and network with other
                from the Shopify ecosystem.
              </p>
            </div>
            <a
              href="https://apps.shopify.com/chatify-2"
              className="button button-primary shadow-lg hover:shadow-sm"
              target="_blank"
            >
              Install On Shopify
            </a>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 gap-x-4 py-3 md:flex-row md:py-4">
            <div className="flex cursor-pointer items-center gap-x-2">
              <span className="font-mono text-sm font-semibold leading-5 text-accent  text-secondary/90">
                ©Copyright 2023 Store Chatify.
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <span className="bg-transparent font-mono font-semibold text-secondary/90">
                Built by
              </span>
              <a href="#" target="_blank" className="flex items-center gap-x-2">
                <img
                  className="h-8 w-8 rounded-full object-cover object-bottom"
                  src={process.env.PUBLIC_URL + "/assets/images/profile.jpg"}
                  alt="Youness"
                  loading="lazy"
                  width={24}
                  height={24}
                  decoding="async"
                />
                <span className="bg-transparent font-mono font-semibold text-secondary/90">
                  TK
                </span>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="section">
        <aside className="fixed bottom-4 z-20 w-full max-w-2xl rounded-full border border-transparent bg-transparent px-3 py-2 md:bottom-8 md:right-1/2 md:translate-x-1/2 md:border-accent/10 md:bg-secondary/50 md:shadow-sm md:backdrop-blur-sm">
          <div className="flex items-center justify-between gap-x-10">
            <a
              href="#"
              target="_blank"
              className="hidden items-center gap-x-4 md:flex"
            >
              <img
                src={process.env.PUBLIC_URL + "/assets/images/profile.jpg"}
                className="bg-surface w-full h-full object-cover object-center !w-16 !h-16 rounded-full aspect-square"
              />
              <div className="flex flex-col">
                <h4 className="text-base font-medium text-accent">TK</h4>
                <p className="text-sm text-accent/60">Making Shopify Apps</p>
              </div>
            </a>
            <a
              href="https://apps.shopify.com/chatify-2"
              className="button h-full max-w-xs flex-1 rounded-full bg-magic-gradient font-medium text-secondary"
            >
              Install App
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Footer;
