export default function Contact() {
  return (
    <section
      id="contact"
      className=" bg-primary px-5 py-10 text-white"
    >
      <div className="">
        <h1 className="text-3xl text-white mb-6 text-center font-bold ">
          Contact
        </h1>
        <p className="pb-5 text-gray-50 text-lg text-center font-heroine-font">
          If you want to connect with me? Please fill the form details Let us
          Connect!
        </p>

        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label
              for="email"
              className="block mb-2 font-heroine-font text-sm font-medium text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              for="password"
              className="block mb-2 font-heroine-font text-sm font-medium text-white "
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="password@123"
              required
            />
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                required
              />
            </div>
            <label
              for="remember"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-green-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
