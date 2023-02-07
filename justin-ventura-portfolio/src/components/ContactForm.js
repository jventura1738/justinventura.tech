import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm({ theme, toggleTheme, themeStyles }) {
  const [state, handleSubmit] = useForm("xnqypqkb");
  return (
    <div className="mx-auto max-w-3xl space-y-12 md:py-24 md:grid md:grid-cols-1 md:gap-6 text-white mb-10">
      <div className="mt-5 md:col-span-2 md:mt-0">
        <form onSubmit={handleSubmit}>
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="rounded-2xl space-y-6 bg-theme/50 px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 gap-6 md:m-1 lg:m-10 xl:m-10 2xl:m-10">
                <div className="col-span-1 sm:col-span-2">
                  <label htmlFor="email" className="block text-sm">
                    Email Address
                  </label>
                  <div className="bg-theme/50 my-2 flex rounded-2xl shadow-sm text-white">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className={`${themeStyles[theme].contactFormBox} caret-orange-500 focus:border-orange-500 focus:ring-orange-500  block w-full flex-1 p-2 rounded-md rounded-r-md sm:text-sm`}
                      placeholder=" ex: recruiter@company.com"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                </div>
              </div>
              <div className="md:m-1 lg:m-10 xl:m-10 2xl:m-10">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    className={`${themeStyles[theme].contactFormBox} caret-orange-500 mt-1 block w-full p-2 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm`}
                    placeholder="ex: Hi Justin, we would like to contact you regarding a potential interview at X.  Please let me know your availability over the next few weeks.  Thanks!"
                  ></textarea>
                </div>
              </div>
              <div className="px-4 py-3 text-center sm:px-6">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className={`bg-purple-500 hover:bg-gradient-to-br ${themeStyles[theme].experienceGradient} duration-300 text-white font-bold py-2 px-4 rounded-full`}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
