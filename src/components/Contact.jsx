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
    onSubmit: async (values, { resetForm }) => {
      const toastId = toast.loading("Sending message...");
      try {
        await emailjs.send(
          "service_d890nic",
          "template_w774j5v",
          {
            name: values.name,
            email: values.email,
            message: values.message,
          },
          "pe1CaYFWpfYAfXbCr",
        );

        toast.update(toastId, {
          render: "Message sent successfully!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        resetForm();
      } catch (error) {
        toast.update(toastId, {
          render: "Failed to send message",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
        console.error(error);
      }
    },
  });

  return (
    <section
      id="Contact"
      data-aos="zoom-in-right"
      data-aos-delay="200"
      data-aos-duration="1000"
      className="py-16 px-4 max-w-6xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Contact Me
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Form Side */}
        <div className="card bg-base-100 shadow-xl border border-zinc-200 grow p-6 sm:p-10 border-2 border-dashed border-zinc-500">
          <form onSubmit={formik.handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                {...formik.getFieldProps("name")}
                className={`input input-bordered w-full bg-white text-gray-900 ${
                  formik.touched.name && formik.errors.name ? "input-error" : ""
                }`}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-xs mt-1 ml-1">
                  {formik.errors.name}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                {...formik.getFieldProps("email")}
                className={`input input-bordered w-full bg-white text-gray-900 ${
                  formik.touched.email && formik.errors.email
                    ? "input-error"
                    : ""
                }`}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs mt-1 ml-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="How can I help you?"
                rows="4"
                {...formik.getFieldProps("message")}
                className={`textarea textarea-bordered w-full bg-white text-gray-900 ${
                  formik.touched.message && formik.errors.message
                    ? "textarea-error"
                    : ""
                }`}
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-xs mt-1 ml-1">
                  {formik.errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="btn btn-success w-full text-white font-bold tracking-wide"
            >
              {formik.isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="divider lg:divider-horizontal text-gray-400">OR</div>

        <div className="flex flex-col justify-center card bg-zinc-50 border-2 border-dashed border-zinc-500 grow place-items-center p-10">
          <p className="text-gray-600 mb-6 font-bold ">
            Reach out directly via:
          </p>
          <div className="flex flex-row lg:flex-col gap-8 text-5xl">
            <a
              href="https://wa.me/201026973414"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:scale-110 transition-transform"
              title="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>

            <a
              href="mailto:adham.hamdy.eldiasty@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:scale-110 transition-transform"
              title="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
