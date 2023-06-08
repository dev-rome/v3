import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

interface InputsProps {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<InputsProps>();

  const onSubmit = async (e: { preventDefault: () => void }) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="pb-10">
      <div className="text-center">
        <h2 className="text-[#0D4373] dark:text-[#7AB9F0] text-md mb-2">
          Contact
        </h2>
        <form
          action="https://formsubmit.co/593e40b10c51f855cece9725d655b1dd"
          method="POST"
          target="_blank"
          onSubmit={onSubmit}
        >
          <div className="max-w-xl mx-auto flex flex-col">
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
                className="w-full bg-transparent border-b border-[#0D4373] dark:border-[#7AB9F0] placeholder:text-[#212529] placeholder:dark:text-[#f8f9fa] text-[#212529] dark:text-[#f8f9fa] p-3 outline-none"
              />
              {errors.name && (
                <span className="text-[#e03131] mt-1">
                  {errors.name.type === "required" && "Name is required"}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters"}
                </span>
              )}
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                className="w-full bg-transparent border-b border-[#0D4373] dark:border-[#7AB9F0] placeholder:text-[#212529] placeholder:dark:text-[#f8f9fa] text-[#212529] dark:text-[#f8f9fa] p-3 focus:outline-none"
              />
              {errors.email && (
                <span className="text-[#e03131] mt-1">
                  {errors.email.type === "required" && "Email is required"}
                  {errors.email.type === "pattern" &&
                    "Please enter a valid email address"}
                </span>
              )}
            </div>
            <div>
              <textarea
                typeof="text"
                placeholder="Message"
                cols={30}
                rows={3}
                {...register("message", {
                  required: true,
                  maxLength: 1000,
                })}
                className="w-full bg-transparent border-b border-[#0D4373] dark:border-[#7AB9F0] placeholder:text-[#212529] placeholder:dark:text-[#f8f9fa] text-[#212529] dark:text-[#f8f9fa] focus:outline-none resize-none mt-8"
              />
              {errors.message && (
                <span className="text-[#e03131] mt-1">
                  {errors.message.type === "required" && "Email is required"}
                  {errors.message.type === "maxLength" &&
                    "Max length is 1000 characters"}
                </span>
              )}
            </div>
            <div className="flex justify-end">
              <motion.button
                type="submit"
                className="text-white bg-[#0D4373] dark:bg-[#7AB9F0] py-1 px-3"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Sumbit
              </motion.button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
