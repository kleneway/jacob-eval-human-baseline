"use client";

import Quote from "./Quote";
const quotes = [
  {
    imageUrl: "/user1.png",
    rating: 3,
    quote:
      "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
    name: "Jenny Wilson",
    website: "Grower.io",
  },
  {
    imageUrl: "/user2.png",
    rating: 5,
    quote:
      "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
    name: "Devon Lane",
    website: "DLDesign.co",
  },
];

export default function Testimonial({
  landingFolioUsers = 3940,
}: {
  landingFolioUsers?: number;
}) {
  return (
    <section className="container mx-auto my-[97px] font-poppins px-8">
      <h4 className="text-[#2563EB] font-semibold leading-[1.75rem] tracking-[-0.0125rem] mb-6 text-center">
        {landingFolioUsers}+ Happy Landingfolio Users
      </h4>
      <h2 className="mb-[92px] text-[#090914] text-[3.25rem] font-semibold leading-[3.875rem] tracking-[-0.125rem] text-center">
        Don’t just take our words
      </h2>
      <div className="flex gap-[35px] lg:flex-row flex-col lg:justify-between max-w-[1285px] mx-auto">
        {quotes.map((quote, index) => (
          <Quote key={quote.name + index + quote.quote} {...quote} />
        ))}
      </div>
    </section>
  );
}
