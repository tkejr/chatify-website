import React, { useState } from "react";
import axios from "axios";
import "./../App.css";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ncsbbldpasvmvaskuuty.supabase.com"; // Replace with your Supabase URL
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jc2JibGRwYXN2bXZhc2t1dXR5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5Mzk3NjAzOCwiZXhwIjoyMDA5NTUyMDM4fQ.MXUHsLthkS6ubyqpLBddOILgTO_b-sHVO5WXealT8RE"; // Replace with your Supabase API key

const supabase = createClient(supabaseUrl, supabaseKey);

function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.from("emails").insert([
        {
          email: email,
        },
      ]);

      if (error) {
        console.log(error);
        alert("Error adding email");
      } else {
        console.log(data);
        alert("Email added successfully");
        setEmail(""); // Clear the email input
      }
    } catch (error) {
      console.log(error);
      alert("Error adding email");
    }
  };
  return (
    <>
      <div>
        <section className="relative bg-gradient-to-b from-surface to-secondary">
          <div className="flex flex-col bg-gradient-to-b from-black to-accent pt-4 md:pt-6">
            <div className="flex flex-col items-start justify-center gap-y-2 px-4 pb-8 pt-4 md:items-center md:gap-y-6 md:px-10 md:pb-8 md:pt-8 md:text-center lg:py-12">
              <p className="mb-1 flex items-center gap-x-1 rounded-full border border-[#2e610c] bg-[#daff96] px-2 py-1 md:mb-2 md:gap-x-2 md:px-4 md:py-2">
                <svg
                  className="icon w-4 h-4 md:w-5 md:h-5 inline -mr-1 -mt-[0.15rem]"
                  viewBox="0 0 92 100"
                  width={24}
                  height={24}
                  fill="none"
                  aria-hidden="true"
                  role="presentation"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#a)">
                    <path
                      fill="#95BF47"
                      d="M75.7822 19.2557c-.068-.505-.5002-.7852-.8595-.8157-.3564-.0305-7.3362-.1387-7.3362-.1387s-5.8373-5.7817-6.4137-6.3699c-.5769-.5882-1.703-.4106-2.1409-.2774-.0054.0027-1.096.3468-2.9325.9266-.3074-1.0154-.7585-2.2639-1.4034-3.5179-2.0782-4.045-5.1219-6.184-8.7997-6.1895h-.0136c-.2555 0-.5085.025-.7643.0472a11.4905 11.4905 0 0 0-.3317-.3912C43.1847.7814 41.1308-.0704 38.6691.0045c-4.7493.1388-9.4796 3.6372-13.3149 9.8517-2.6984 4.3724-4.7521 9.8656-5.3342 14.1186-5.4538 1.7229-9.2674 2.9269-9.3517 2.9547-2.7528.8822-2.8398.9682-3.1989 3.615C7.203 32.5447 0 89.3521 0 89.3521L60.3619 100l26.162-6.6333s-10.6737-73.6061-10.7417-74.111ZM53.0776 13.535c-1.3902.4383-2.9704.9377-4.684 1.4787-.0354-2.4525-.321-5.865-1.4417-8.814 3.604.6963 5.3774 4.855 6.1257 7.3353Zm-7.8422 2.4775c-3.1636.9987-6.6153 2.089-10.0779 3.1821.9738-3.8036 2.8207-7.5906 5.0893-10.0736.8432-.9238 2.0236-1.9531 3.422-2.5413 1.3136 2.7966 1.5991 6.7555 1.5666 9.4328ZM38.7643 3.2283c1.1153-.025 2.0537.2248 2.8563.763-1.284.6797-2.5244 1.6562-3.6886 2.9297-3.0166 3.3014-5.3287 8.4256-6.2508 13.3695-2.8752.9072-5.6878 1.7978-8.2774 2.6134 1.6348-7.782 8.0298-19.4592 15.3605-19.6756Z"
                    />
                    <path
                      fill="#FCFCFC"
                      d="m45.8652 32.1617-3.0387 11.5938s-3.3891-1.5729-7.4067-1.315c-5.8918.38-5.9543 4.17-5.8945 5.1217.321 5.185 13.6959 6.3171 14.4466 18.4629.5901 9.555-4.9697 16.0912-12.9804 16.6075-9.6156.6183-14.909-5.1658-14.909-5.1658l2.0374-8.8392s5.3287 4.1004 9.5938 3.8258c2.7854-.1804 3.781-2.4912 3.6803-4.1254-.4189-6.7637-11.3102-6.3642-11.9984-17.4783-.5793-9.3524 5.443-18.8295 18.7307-19.684 5.1192-.3357 7.7389.996 7.7389.996Z"
                    />
                    <path
                      fill="#5E8E3E"
                      d="M74.9241 18.4427c-.3564-.0305-7.3363-.1387-7.3363-.1387s-5.8372-5.7817-6.4141-6.3698c-.2146-.2192-.5059-.333-.8104-.3801l.0029 88.4432 26.1591-6.6308S75.8516 19.7633 75.7836 19.2584c-.068-.5049-.5031-.7851-.8595-.8157Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h91.5789v100H0z" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="bg-transparent py-0 font-mono text-[0.6rem] font-semibold leading-snug text-[#2e610c] md:text-sm">
                  <a href="https://apps.shopify.com/chatify-2">Install App</a>
                </span>
              </p>
              <h1 className="leading-tighter bg-gradient-to-br from-secondary to-secondary/40 bg-clip-text font-heading text-4xl font-medium tracking-tighter text-transparent drop-shadow-lg md:max-w-4xl md:text-6xl lg:max-w-[60vw] lg:text-[6vw]/[7.1vw] xl:max-w-[70vw] xl:text-[6.5vw]">
                <span>AI-powered</span>

                <svg
                  className="mx-3 icon w-8 h-8 md:w-12 md:h-12 lg:-mt-2 lg:w-[6.2vw] lg:h-[6.2vw] inline rounded text-secondary/80 drop-shadow-sm"
                  width={24}
                  height={24}
                  viewBox="0 0 41 41"
                  fill="none"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  role="presentation"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z"
                    fill="currentColor"
                  />
                </svg>

                <span className="md:-m-2">
                  shopping assistant for your brand.
                </span>
              </h1>
              <p className="max-w-4xl text-lg font-normal text-secondary/50 md:text-2xl lg:text-[1.8vw]/[2.8vw]">
                Create a branded AI-Shopping assistant that only speaks your
                brand's language for even more personalized customer experience.
              </p>
              <div className="my-6 flex w-full max-w-md flex-col">
                <form
                  id="contact_form"
                  className="flex flex-col gap-y-3 w-full"
                  onSubmit={handleSubmit}
                >
                  {/* Other hidden input fields */}
                  <input type="hidden" name="form_type" value="customer" />
                  <input type="hidden" name="utf8" value="✓" />
                  <input type="hidden" name="contact[tags]" value="landing" />
                  <div className="grid gap-2 md:flex-grow">
                    <label className="sr-only" htmlFor="NewsletterForm">
                      Email
                    </label>
                    <input
                      id="NewsletterForm"
                      type="email"
                      name="contact[email]"
                      className="h-[60px] appearance-none rounded-full border-4 border-accent/90 bg-secondary bg-transparent px-6 py-4 font-mono text-[1.1rem] font-medium tracking-tight text-secondary outline-none ring-4 ring-transparent ring-offset-2 transition-all duration-300 placeholder:font-mono focus:ring-primary/90 md:h-[75px] md:text-[1.4rem]"
                      placeholder="Your email address*"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="sparkle-button w-full">
                    <button
                      id="#join-waitlist"
                      className="h-[60px] gap-0 text-[1.1rem] md:h-[75px] md:text-[1.4rem]"
                      type="submit"
                      name="commit"
                    >
                      <span className="spark" />
                      <span className="backdrop" />
                      <svg
                        className="sparkle"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"
                          fill="black"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"
                          fill="black"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"
                          fill="black"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text font-mono font-semibold">
                        Join Email List for Updates
                      </span>
                    </button>
                    <div className="bodydrop"></div>
                  </div>
                </form>
              </div>
            </div>
            <div className="mx-auto w-full max-w-screen-lg px-6 pb-10 md:pb-16">
              <div className="drop-shadow-down overflow-hidden !rounded-[1rem] border-2 border-secondary/80 md:!rounded-[2rem]">
                <video
                  className="pointer-events-none mx-auto block aspect-square h-auto w-full select-none !rounded-[1rem] object-cover md:aspect-video md:!rounded-[2rem]"
                  autoPlay
                  muted
                  loop
                  alt="Store Copilot demo video"
                  playsInline=""
                  loading="lazy"
                  src={process.env.PUBLIC_URL + "/assets/video/video.mp4"}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
