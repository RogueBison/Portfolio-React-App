function ContactForm() {
  return (
    <>
      <h2 className="text-4xl font-bold">Let's get in touch!</h2>
      <div className="w-full max-w-6xl">
        <form className="pt-16" action="">
          <div className="mb-10">
            <label className="block mb-4 font-semibold text-xl" htmlFor="name">
              Name
            </label>
            <input
              name="name"
              className="border border-gray-400 appearance-none rounded w-full bg-gray-700 px-4 py-4 leading-tight font-medium text-xl focus:outline-1 focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-10">
            <label className="block mb-4 font-semibold text-xl" htmlFor="email">
              Email Address
            </label>
            <input
              name="email"
              className="border border-gray-400 appearance-none rounded w-full bg-gray-700 px-4 py-4 leading-tight font-medium text-xl focus:outline-1 focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-10">
            <label
              className="block mb-4 font-semibold text-xl"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              className="border border-gray-400 appearance-none rounded w-full bg-gray-700 px-4 py-4 h-64 leading-tight font-medium focus:outline-1 focus:shadow-outline"
              required
            />
          </div>
          <button
            className="bg-blue-600 py-2 px-16 rounded-md uppercase font-semibold hover:shadow-md hover:shadow-slate-950 hover:bg-blue-500 transition ease-in-out delay-80"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
