import { ImQuotesLeft } from "react-icons/im";
import { TestimonialData } from "./TestimonialData";

export default function Testimonial() {
  return (
    <section id="testimonial" className="pb-32 lg:pb-64">
      <h2 className="text-[#0D4373] dark:text-[#7AB9F0] text-md mb-2 font-bold">
        Testimonial
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {TestimonialData.map(({ quote, author, id }) => (
          <div className="relative bg-[#0D4373] dark:bg-[#7AB9F0] p-8" key={id}>
            <div className="absolute top-5 left-8">
              <ImQuotesLeft className="text-[#7AB9F0] dark:text-[#0D4373] opacity-20 dark:opacity-10 text-7xl" />
            </div>
            <p className="text-[#f8f9fa]">
              {quote}
            </p>
            <p className="text-[#f8f9fa]">{author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
