import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import Aos from "aos";

export default function Contact() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),

    onSubmit: async (value, { resetForm }) => {
      try {
        toast.loading("Sending message...");

        await emailjs.send(
          "service_d890nic",
          "template_w774j5v",
          {
            name: value.name,
            email: value.email,
            message: value.message,
          },
          "pe1CaYFWpfYAfXbCr",
        );

        toast.dismiss();
        toast.success("Message sent successfully");
        resetForm();
      } catch (error) {
        toast.dismiss();
        toast.error("Failed to send message ");
        console.error(error);
      }
    },
  });

  return (
    <section
      id="Contact"
      data-aos="zoom-in-right"
      data-aos-delay="800"
      data-aos-duration="1000"
      className="py-16 px-4"
    >
      <h1 className="text-4xl font-bold text-center text-gray-900">Contact</h1>
      <div className="bg-white sm:max-w-5xl mt-8 mx-auto rounded-lg shadow-md p-7 border-2 border-dashed border-zinc-500 ">
        <form onSubmit={formik.handleSubmit} className="space-y-6 mx-auto">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="input border-2 border-zinc-500 w-full text-gray-950 bg-white"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="input border-2 border-zinc-500 w-full text-gray-950 bg-white"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              placeholder="Message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className="textarea border-2 border-zinc-500 w-full text-gray-800 bg-white"
            />
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.message}
              </p>
            )}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-success text-zinc-800"
              disabled={formik.isSubmitting}
            >
              Send
            </button>
          </div>

          <div className="divider divider-neutral text-zinc-800">Or</div>

          <div className="flex justify-center gap-6 text-3xl">
            <a
              href="https://wa.me/201026973414"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with me on WhatsApp"
              className="text-green-500 "
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>

            <a
              href="mailto:adham.hamdy.eldiasty@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send me an email"
              className="text-red-500"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
