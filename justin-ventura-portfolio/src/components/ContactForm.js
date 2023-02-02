import React from "react";

function ContactForm({ theme, toggleTheme, themeStyles }) {
  return (
    <div className="mx-auto max-w-3xl space-y-12 md:py-24 md:grid md:grid-cols-1 md:gap-6 text-white mb-10">
      <div className="mt-5 md:col-span-2 md:mt-0">
        <form action="#" method="POST">
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="rounded-2xl space-y-6 bg-theme/50 px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="col-span-1 sm:col-span-2">
                  <label htmlFor="Name" className="block text-sm">
                    Name
                  </label>
                  <div className="my-2 flex rounded-2xl shadow-sm text-white">
                    <input
                      type="text"
                      name="company-website"
                      id="company-website"
                      className={`${themeStyles[theme].contactFormBox} caret-orange-500 focus:border-orange-500 focus:ring-orange-500  block w-full flex-1 p-2 rounded-md rounded-r-md sm:text-sm`}
                      placeholder=" ex: John Smith/Jane Doe"
                    />
                  </div>
                  <label htmlFor="Email address" className="block text-sm">
                    Email Address
                  </label>
                  <div className="my-2 flex rounded-2xl shadow-sm text-white">
                    <input
                      type="text"
                      name="email-address"
                      id="email-address"
                      className={`${themeStyles[theme].contactFormBox} caret-orange-500 focus:border-orange-500 focus:ring-orange-500  block w-full flex-1 p-2 rounded-md rounded-r-md sm:text-sm`}
                      placeholder=" ex: recruiter@company.com"
                    />
                  </div>
                </div>
              </div>
              <fieldset>
                <p className="text-sm">What would you like to chat about?</p>
                <div className="mt-4 space-y-4">
                  <div class="flex items-center">
                    <input
                      id="push-everything"
                      name="push-notifications"
                      type="radio"
                      class="h-4 w-4 border-gray-300 text-orange-600 focus:ring-orange-500"
                    />
                    <label
                      for="push-everything"
                      class="ml-3 block text-sm font-medium text-white"
                    >
                      Recruiting
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      id="push-email"
                      name="push-notifications"
                      type="radio"
                      class="h-4 w-4 border-gray-300 text-orange-600 focus:ring-orange-500"
                    />
                    <label
                      for="push-email"
                      class="ml-3 block text-sm font-medium text-white"
                    >
                      Tutoring
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      id="push-nothing"
                      name="push-notifications"
                      type="radio"
                      class="h-4 w-4 border-gray-300 text-orange-600 focus:ring-orange-500"
                    />
                    <label
                      for="push-nothing"
                      class="ml-3 block text-sm font-medium text-white"
                    >
                      Music
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      id="push-nothing"
                      name="push-notifications"
                      type="radio"
                      class="h-4 w-4 border-gray-300 text-orange-600 focus:ring-orange-500"
                    />
                    <label
                      for="push-nothing"
                      class="ml-3 block text-sm font-medium text-white"
                    >
                      KinetiKZ
                    </label>
                  </div>
                </div>
              </fieldset>

              <div>
                <label htmlFor="Message" className="block text-sm font-medium">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows="3"
                    className={`${themeStyles[theme].contactFormBox} caret-orange-500 mt-1 block w-full p-2 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm`}
                    placeholder="ex: Hi Justin, we would like to contact you regarding a potential interview at X.  Please let me know your availability over the next few weeks.  Thanks!"
                  ></textarea>
                </div>
              </div>
              <div className="px-4 py-3 text-center sm:px-6">
                <button
                  type="submit"
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
