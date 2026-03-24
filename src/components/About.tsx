import Image from "next/image";
import Click from "./Click";

const About = () => {
  return (
    <div className="flex items-center justify-center gap-8 flex-col w-full max-w-[920px] py-[192px] mx-auto px-[32px]">
      <h1 className="w-full">Muhammad Abdullah</h1>

      <div className="flex items-start justify-between w-full flex-col-reverse gap-12 md:flex-row md:gap-0">
        {/* Left: text + socials */}
        <div className="flex items-start justify-between flex-col w-full md:max-w-[350px] md:aspect-[3/4] md:h-full pb-0 md:pb-8 gap-8 md:gap-0">
          <div className="flex items-start justify-center gap-8 flex-col">
            <p className="w-full max-w-[420px]">
              Full-stack developer and web designer focused on building clean,
              fast, and user-driven digital experiences that actually solve real
              problems.
            </p>

            <div className="flex items-start justify-center gap-2 flex-col">
              <h2>Frontend & Styling</h2>
              <div className="flex items-start justify-start gap-4 flex-wrap">
                <p>Next js</p>
                <p>Typescript</p>
                <p>Tailwind CSS</p>
              </div>
            </div>

            <div className="flex items-start justify-center gap-2 flex-col">
              <h2>Backend & Deployment</h2>
              <div className="flex items-start justify-start gap-4 flex-wrap">
                <p>Neon Postgres</p>
                <p>Drizzle ORM</p>
                <p>Auth js</p>
                <p>Vercel</p>
              </div>
            </div>

            <div className="flex items-start justify-center gap-2 flex-col">
              <h2>Motion & Animations</h2>
              <div className="flex items-start justify-start gap-4 flex-wrap">
                <p>GSAP</p>
                <p>Framer Motion</p>
                <p>Lenis</p>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-center gap-4 mt-8 md:mt-0">
            <Click
              target="_self"
              path="/"
              content={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.64 0H11.36C13.92 0 16 2.08 16 4.64V11.36C16 12.5906 15.5111 13.7708 14.641 14.641C13.7708 15.5111 12.5906 16 11.36 16H4.64C2.08 16 0 13.92 0 11.36V4.64C0 3.4094 0.488856 2.22919 1.35902 1.35902C2.22919 0.488856 3.4094 0 4.64 0ZM4.48 1.6C3.71618 1.6 2.98364 1.90343 2.44353 2.44353C1.90343 2.98364 1.6 3.71618 1.6 4.48V11.52C1.6 13.112 2.888 14.4 4.48 14.4H11.52C12.2838 14.4 13.0164 14.0966 13.5565 13.5565C14.0966 13.0164 14.4 12.2838 14.4 11.52V4.48C14.4 2.888 13.112 1.6 11.52 1.6H4.48ZM12.2 2.8C12.4652 2.8 12.7196 2.90536 12.9071 3.09289C13.0946 3.28043 13.2 3.53478 13.2 3.8C13.2 4.06522 13.0946 4.31957 12.9071 4.50711C12.7196 4.69464 12.4652 4.8 12.2 4.8C11.9348 4.8 11.6804 4.69464 11.4929 4.50711C11.3054 4.31957 11.2 4.06522 11.2 3.8C11.2 3.53478 11.3054 3.28043 11.4929 3.09289C11.6804 2.90536 11.9348 2.8 12.2 2.8ZM8 4C9.06087 4 10.0783 4.42143 10.8284 5.17157C11.5786 5.92172 12 6.93913 12 8C12 9.06087 11.5786 10.0783 10.8284 10.8284C10.0783 11.5786 9.06087 12 8 12C6.93913 12 5.92172 11.5786 5.17157 10.8284C4.42143 10.0783 4 9.06087 4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4ZM8 5.6C7.36348 5.6 6.75303 5.85286 6.30294 6.30294C5.85286 6.75303 5.6 7.36348 5.6 8C5.6 8.63652 5.85286 9.24697 6.30294 9.69706C6.75303 10.1471 7.36348 10.4 8 10.4C8.63652 10.4 9.24697 10.1471 9.69706 9.69706C10.1471 9.24697 10.4 8.63652 10.4 8C10.4 7.36348 10.1471 6.75303 9.69706 6.30294C9.24697 5.85286 8.63652 5.6 8 5.6Z"
                    fill="#EBE8D5"
                  />
                </svg>
              }
            />
            <Click
              target="_self"
              path="/"
              content={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_70_30"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="16"
                    height="16"
                  >
                    <path d="M0 0H16V16H0V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_70_30)">
                    <path
                      d="M12.6 0.749722H15.0537L9.69372 6.89144L16 15.2503H11.0629L7.19314 10.1817L2.77029 15.2503H0.314286L6.04686 8.67886L0 0.750864H5.06286L8.55543 5.38286L12.6 0.749722ZM11.7371 13.7783H13.0971L4.32 2.14515H2.86171L11.7371 13.7783Z"
                      fill="#EBE8D5"
                    />
                  </g>
                </svg>
              }
            />
          </div>
        </div>

        {/* Right: image */}
        <div className="relative w-full md:max-w-[350px] aspect-[3/4]">
          <Image
            src="/p.png"
            alt="My Profile Picture"
            fill
            sizes="(max-width: 768px) 100vw, 350px"
            className="object-cover rounded-2xl squircle"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
