"use client";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const sendEmail = (event) => {
    event.preventDefault();

    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const message = event.target.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting the form.");
      return;
    }

    emailjs
      .sendForm(
        "service_s0mbhp3",
        "template_8t0jktk",
        event.target,
        "5zcrp91gYgA6Yv-_f"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Email sent successfully!");
          event.target.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send email. Check console for details.");
        }
      );
  };

  return (
    <div className="bg-slate-900 px-4 py-16 sm:py-20 bg-opacity-20 lg:px-6 rounded-2xl sm:mt-10">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-8rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-16rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[28rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[60rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Leave Me A Message
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600">
          For: Collaborations, Freelance, Questions
        </p>
      </div>
      <form
        onSubmit={sendEmail}
        action="/"
        method="POST"
        className="mx-auto mt-10 max-w-lg sm:mt-12"
      >
        <div className="grid gap-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-900"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-900"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400"
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="block w-full rounded-md bg-blue-700 px-4 py-2 font-semibold text-white shadow-sm hover:bg-blue/800 focus:bg-blue-800 focus:outline-none"
          >
            Let's Talk
          </button>
        </div>
      </form>
    </div>
  );
}
