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
                  <label htmlFor="Email address" className="block text-sm">
                    Email Address
                  </label>
                  <div className="mt-1 flex rounded-2xl shadow-sm text-white">
                    <input
                      type="text"
                      name="company-website"
                      id="company-website"
                      className={`${themeStyles[theme].contactFormBox} caret-orange-500 focus:border-orange-500 focus:ring-orange-500  block w-full flex-1 p-2 rounded-md rounded-r-md sm:text-sm`}
                      placeholder=" ex: recruiter@company.com"
                    />
                  </div>
                </div>
              </div>
              <fieldset>
                <p className="text-sm">What would you like to chat about?</p>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <input
                      id="recruit-inquiry"
                      name="Recruiting"
                      type="radio"
                      className="h-4 w-4 border-black text-orange-500 focus:ring-orange-500/0"
                    />
                    <label
                      htmlFor="Recruitment"
                      className="ml-3 block text-sm font-medium"
                    >
                      Recruitment
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="tutor-inquiry"
                      name="Tutoring"
                      type="radio"
                      className="h-4 w-4 border-black text-orange-500 focus:ring-orange-500/0"
                    />
                    <label
                      htmlFor="Tutoring"
                      className="ml-3 block text-sm font-medium"
                    >
                      Tutoring
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="music-inquiry"
                      name="Music"
                      type="radio"
                      className="h-4 w-4 border-black text-orange-500 focus:ring-orange-500/0"
                    />
                    <label
                      htmlFor="Music"
                      className="ml-3 block text-sm font-medium"
                    >
                      Music / Collaboration Inquiry
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="clash-inquiry"
                      name="Clash of Clans"
                      type="radio"
                      className={`h-4 w-4 border-black text-orange-500 focus:ring-orange-500/0`}
                    />
                    <label
                      htmlFor="Clash of Clans"
                      className="ml-3 block text-sm font-medium"
                    >
                      Clash of Clans Clan: KinetiKZ
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
