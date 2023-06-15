import { frontendServices, fullStackServices } from "./ServicesData";

function Services() {
  return (
    <section id="services" className="pb-32 lg:pb-64">
      <h2 className="text-[#0D4373] dark:text-[#7AB9F0] text-md mb-2">
        Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {frontendServices.map((service) => (
          <div
            key={service.title}
            className="bg-[#0D4373] dark:bg-[#7AB9F0] px-6 pb-6"
          >
            <h3 className="text-[#f8f9fa] font-semibold text-center mt-2">
              {service.title}
            </h3>
            <ul className="flex flex-col gap-3">
              {service.features.map((item) => (
                <li
                  key={item}
                  className="text-[#f8f9fa] text-center first-of-type:mt-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {fullStackServices.map((service) => (
          <div key={service.title} className="bg-[#0D4373] dark:bg-[#7AB9F0] px-6 pb-6">
            <h3 className="text-[#f8f9fa] font-semibold text-center mt-2">
              {service.title}
            </h3>
            <ul className="flex flex-col gap-3">
              {service.features.map((item) => (
                <li
                  key={item}
                  className="text-[#f8f9fa] text-center first-of-type:mt-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
