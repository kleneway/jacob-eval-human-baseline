"use client";
import Image from "next/image";
import { QuoteProps } from "@/types";

export default function Quote({
  name,
  imageUrl,
  quote,
  rating,
  website,
}: QuoteProps) {
  return (
    <div className="flex gap-10 items-center md:flex-row flex-col">
      <Image priority src={imageUrl} alt={name} width={239} height={239} />
      <div>
        <div className="flex gap-1.5 mb-[30px]">
          <svg style={{ display: "none" }}>
            <symbol id="star" viewBox="0 0 19 19">
              <g id="Review">
                <g id="star">
                  <g id="Group">
                    <path
                      id="Vector"
                      d="M9.82368 0.231874L12.5214 5.71603L18.5518 6.59566C18.6283 6.60704 18.7002 6.63957 18.7592 6.68957C18.8183 6.73957 18.8622 6.80506 18.886 6.87868C18.9099 6.95229 18.9127 7.0311 18.8942 7.10622C18.8756 7.18135 18.8365 7.24981 18.7812 7.30389L14.4183 11.5718L15.4484 17.5993C15.4617 17.6755 15.4534 17.7539 15.4243 17.8256C15.3953 17.8973 15.3468 17.9594 15.2843 18.005C15.2218 18.0505 15.1478 18.0776 15.0706 18.0832C14.9935 18.0888 14.9163 18.0727 14.8479 18.0367L9.45374 15.1914L4.05961 18.0375C3.99121 18.0736 3.91405 18.0899 3.83688 18.0844C3.75972 18.0788 3.68565 18.0518 3.62309 18.0063C3.56054 17.9608 3.51201 17.8986 3.48301 17.8269C3.45401 17.7552 3.44572 17.6768 3.45907 17.6006L4.48915 11.5718L0.125087 7.30389C0.0697532 7.24981 0.0306183 7.18135 0.01209 7.10622C-0.00643837 7.0311 -0.00362419 6.95229 0.0202156 6.87868C0.0440554 6.80506 0.0879739 6.73957 0.147025 6.68957C0.206076 6.63957 0.277915 6.60704 0.35445 6.59566L6.38488 5.71603L9.0838 0.231874C9.11746 0.162379 9.17001 0.103769 9.23544 0.0627598C9.30087 0.0217505 9.37652 0 9.45374 0C9.53096 0 9.60662 0.0217505 9.67204 0.0627598C9.73747 0.103769 9.79002 0.162379 9.82368 0.231874Z"
                    />
                  </g>
                </g>
              </g>
            </symbol>
          </svg>

          {Array.from({ length: 5 }).map((_, index) => {
            if (index < rating) {
              return (
                <svg key={index} width="19" height="19" fill="#2563EB">
                  <use href="#star" />
                </svg>
              );
            } else {
              return (
                <svg key={index} width="19" height="19" fill="#000000">
                  <use href="#star" />
                </svg>
              );
            }
          })}
        </div>
        <p className="text-left mb-5 max-w-[346px] text-lg font-medium leading-[1.75rem] text-[#090914]">{`"${quote}"`}</p>
        <div className="flex items-center gap-2.5">
          <h5 className="text-[#090914] font-semibold leading-[1.75rem] tracking-[-0.0125rem]">
            {name}
          </h5>
          <p className="text-[#64748B] font-medium">{website}</p>
        </div>
      </div>
    </div>
  );
}
