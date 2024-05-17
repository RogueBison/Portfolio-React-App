/* import { useRef } from "react"; */
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

function ContactForm() {
  /* const form = useRef(); */
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };

  const sendEmail = async (formData) => {
    e.preventDefault();

    const { from_name, email, message } = formData;

    // Define template params
    const templateParams = {
      from_name,
      email,
      message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      );
      // Display success alert
      toggleAlert("Message was successful sent", "success");
    } catch (e) {
      console.error(e);
      // Display error alert
      toggleAlert("Sorry, something has gone wrong.", "danger");
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };

  return (
    <>
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center mt-32 lg:m-0"
      >
        <h2 className="text-4xl font-bold drop-shadow-md">
          Let's get in touch!
        </h2>
        <form
          className="pt-16 drop-shadow-md lg:mb-0 w-10/12 lg:w-full lg:max-w-6xl flex flex-col lg:block"
          id="contact-form"
          onSubmit={handleSubmit(sendEmail)}
          noValidate
        >
          <div className="mb-10">
            <label className="block mb-4 font-semibold text-xl" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              className="border border-gray-400 appearance-none rounded w-full bg-gray-700 px-4 py-4 leading-tight font-medium text-xl focus:outline-1 focus:shadow-outline"
              {...register("from_name", {
                required: {
                  value: true,
                  message: "Please enter your name",
                },
                maxLength: {
                  value: 50,
                  message: "Please use 50 characters or less",
                },
              })}
            />
            {errors.from_name && (
              <span className="text-red-600 font-bold">
                {errors.from_name.message}
              </span>
            )}
          </div>
          <div className="mb-10">
            <label className="block mb-4 font-semibold text-xl" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="border border-gray-400 appearance-none rounded w-full bg-gray-700 px-4 py-4 leading-tight font-medium text-xl focus:outline-1 focus:shadow-outline"
              {...register("email", {
                required: {
                  value: true,
                  message: "Please enter a valid email address",
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                },
              })}
            />
            {errors.email && (
              <span className="text-red-600 font-bold">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-10">
            <label
              className="block mb-4 font-semibold text-xl"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              rows={3}
              name="message"
              className="border border-gray-400 appearance-none rounded w-full bg-gray-700 px-4 py-4 h-64 leading-tight font-medium focus:outline-1 focus:shadow-outline"
              {...register("message", {
                required: {
                  value: true,
                  message: "A message must be included",
                },
              })}
            />
            {errors.message && (
              <span className="text-red-600 font-bold">
                {errors.message.message}
              </span>
            )}
          </div>
          <button
            className="bg-blue-600 py-2 px-16 rounded-md uppercase font-semibold hover:shadow-md hover:shadow-slate-950 hover:bg-blue-500 transition ease-in-out delay-80"
            type="submit"
            disabled={disabled}
          >
            Submit
          </button>
        </form>
        {alertInfo.display && (
          <div
            className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
            role="alert"
          >
            {alertInfo.message}
            <button
              type="button"
              className="bg-blue-600 py-2 px-16 rounded-md uppercase font-semibold hover:shadow-md hover:shadow-slate-950 hover:bg-blue-500 transition ease-in-out delay-80"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() =>
                setAlertInfo({ display: false, message: "", type: "" })
              } // Clear the alert when close button is clicked
            ></button>
          </div>
        )}
      </section>
    </>
  );
}

export default ContactForm;
