import svgPaths from "./svg-1cztk30jkf";
import { imgValaWild } from "./svg-ndzmq";

function SocialInstagram() {
  return (
    <div className="absolute left-[1997px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2151px_-97px] mask-size-[2192.97px_2413.672px] size-[15px] top-[85px]" style={{ maskImage: `url("${imgValaWild}")` }} data-name="SocialInstagram">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g clipPath="url(#clip0_14_24)" id="SocialInstagram">
          <path d={svgPaths.pf8e4980} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_14_24">
            <rect fill="white" height="15" width="15" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SocialPhone() {
  return (
    <div className="absolute left-[1960px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2114px_-97px] mask-size-[2192.97px_2413.672px] size-[14px] top-[85px]" style={{ maskImage: `url("${imgValaWild}")` }} data-name="SocialPhone">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_14_21)" id="SocialPhone">
          <path d={svgPaths.p2a4356c0} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_14_21">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute inset-[-3.67%_-0.94%_-641.97%_-0.95%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2234.47 2438.25">
          <path d={svgPaths.p3d89d000} fill="url(#paint0_linear_14_30)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_14_30" x1="1110.72" x2="1121.57" y1="-5.06185" y2="2372.08">
              <stop stopColor="#59706D" />
              <stop offset="0.67" stopColor="#D0B89C" />
              <stop offset="1" stopColor="#F2CEAB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Italiana:Regular',sans-serif] inset-[14.68%_42.73%_61.16%_42.73%] leading-[normal] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1091px_-60px] mask-size-[2192.97px_2413.672px] not-italic text-[66.711px] text-white whitespace-nowrap" style={{ maskImage: `url("${imgValaWild}")` }}>
        VALA WILD
      </p>
      <p className="[word-break:break-word] absolute font-['Kufam:Regular',sans-serif] font-normal inset-[57.19%_42.68%_29.66%_41.54%] leading-[normal] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1065px_-199px] mask-size-[2192.97px_2413.672px] text-[33.251px] text-white uppercase whitespace-nowrap" style={{ maskImage: `url("${imgValaWild}")` }}>
        Mount Kilimanjaro
      </p>
      <p className="[word-break:break-word] absolute font-['Kufam:Regular',sans-serif] font-normal inset-[57.19%_63.98%_29.66%_30.87%] leading-[normal] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-831px_-199px] mask-size-[2192.97px_2413.672px] text-[33.251px] text-white whitespace-nowrap" style={{ maskImage: `url("${imgValaWild}")` }}>
        SAFARI
      </p>
      <p className="[word-break:break-word] absolute font-['Kufam:Regular',sans-serif] font-normal inset-[57.19%_30.73%_29.66%_61.92%] leading-[normal] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1512px_-199px] mask-size-[2192.97px_2413.672px] text-[33.251px] text-white uppercase whitespace-nowrap" style={{ maskImage: `url("${imgValaWild}")` }}>{`Zanzibar `}</p>
      <div className="absolute bg-[#d9d9d9] h-[46px] left-[850px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1004px_-193px] mask-size-[2192.97px_2413.672px] top-[181px] w-px" style={{ maskImage: `url("${imgValaWild}")` }} />
      <div className="absolute bg-[#d9d9d9] h-[46px] left-[1331px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1485px_-195px] mask-size-[2192.97px_2413.672px] top-[183px] w-px" style={{ maskImage: `url("${imgValaWild}")` }} />
      <div className="absolute flex h-px items-center justify-center left-[886px] top-[139px] w-[390px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#d9d9d9] h-px mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1040px_-151px] mask-size-[2192.97px_2413.672px] relative w-[390px]" style={{ maskImage: `url("${imgValaWild}")` }} />
        </div>
      </div>
      <SocialInstagram />
      <SocialPhone />
    </div>
  );
}