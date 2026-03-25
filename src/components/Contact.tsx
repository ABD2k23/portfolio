"use client";

import { useState } from "react";
import Click from "./Click";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    contactTime: "",
    reachBy: "",
    needs: "",
    budget: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({
        name: "",
        company: "",
        contactTime: "",
        reachBy: "",
        needs: "",
        budget: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      id="Contact"
      className="py-[96px] px-[16px] sm:px-[32px] flex items-start justify-center mx-auto w-full max-w-[920px] flex-col gap-8"
    >
      <div className="flex gap-2">
        <div className="py-1 xs:py-2">
          <svg
            className="w-[8px] h-[8px] xs:w-[16px] xs:h-[16px]"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.30111 6.08077C6.491 6.27692 6.80749 6.08077 6.74419 5.88462C6.491 4.64231 5.85803 3.4 5.85803 2.22308C5.85803 0.980768 6.5543 0 8.07343 0C9.52927 0 10.2888 1.04615 10.2888 2.22308C10.2888 3.33461 9.71916 4.57692 9.40267 5.68846C9.33938 5.95 9.71916 6.14615 9.90905 5.95C10.7319 5.16538 11.4915 4.25 12.4409 3.59615C12.9473 3.33461 13.4537 3.20385 13.9601 3.20385C14.6563 3.20385 15.226 3.53077 15.6691 4.25C16.3654 5.36154 15.9223 6.40769 14.7196 7.06154C13.5803 7.71539 11.9979 7.91154 10.6686 8.23846C10.3521 8.30385 10.3521 8.63077 10.6053 8.69615C12.0612 9.08846 13.7702 9.35 14.7196 9.93846C16.0489 10.6577 16.3021 11.6385 15.6691 12.75C15.226 13.4692 14.6563 13.7962 13.9601 13.7962C13.4537 13.7962 13.0106 13.6654 12.4409 13.4038C11.4915 12.75 10.6686 11.8346 9.84575 11.05C9.65586 10.8538 9.33938 10.9846 9.40267 11.2462C9.71916 12.4231 10.2888 13.6 10.2888 14.7769C10.2888 16.0192 9.46597 17 8.07343 17C6.6176 17 5.85803 16.0192 5.85803 14.7769C5.85803 13.7308 6.42771 12.4231 6.74419 11.1154C6.80749 10.9192 6.42771 10.7231 6.23781 10.9192C5.35165 11.7038 4.3389 12.8154 3.57933 13.2731C3.07295 13.6 2.56658 13.7308 2.1235 13.7308C1.42723 13.7308 0.794255 13.3385 0.351175 12.6192C-0.281797 11.5077 0.161283 10.4615 1.30063 9.80769C2.31339 9.28462 3.95912 9.02308 5.28836 8.69615C5.54154 8.63077 5.54154 8.30385 5.28836 8.23846C3.89582 7.84615 2.0602 7.58461 1.30063 7.12692C0.0979857 6.47307 -0.345095 5.49231 0.287877 4.31538C0.794255 3.59615 1.49052 3.26923 2.25009 3.26923C2.69317 3.26923 3.13625 3.33461 3.57933 3.59615C4.4022 4.11923 5.35165 5.23077 6.30111 6.08077Z"
              fill="#435F60"
            />
          </svg>
        </div>
        <h1>Contact</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center w-full flex-col gap-8"
      >
        <div className="flex items-start justify-center w-full gap-8 flex-col md:flex-row md:gap-16">
          {/* Left column */}
          <div className="w-full flex items-start gap-8 flex-col justify-center">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              type="text"
              placeholder="Name"
              className="label outline-0 border-b border-b-green w-full p-1 xs:p-2"
            />
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              type="text"
              required
              placeholder="Company Name"
              className="label outline-0 border-b border-b-green w-full p-1 xs:p-2"
            />
            <input
              name="contactTime"
              value={form.contactTime}
              onChange={handleChange}
              type="text"
              required
              placeholder="Preferred Contact Time"
              className="label outline-0 border-b border-b-green w-full p-1 xs:p-2"
            />
          </div>

          {/* Right column */}
          <div className="w-full flex items-start gap-8 flex-col justify-center">
            <input
              name="reachBy"
              value={form.reachBy}
              onChange={handleChange}
              type="text"
              required
              placeholder="What's the best way to reach you?"
              className="label outline-0 border-b border-b-green w-full p-1 xs:p-2"
            />
            <input
              name="needs"
              value={form.needs}
              onChange={handleChange}
              type="text"
              required
              placeholder="Share your specific needs."
              className="label outline-0 border-b border-b-green w-full p-1 xs:p-2"
            />
            <input
              name="budget"
              value={form.budget}
              onChange={handleChange}
              type="text"
              required
              placeholder="Project Budget"
              className="label outline-0 border-b border-b-green w-full p-1 xs:p-2"
            />
          </div>
        </div>

        <div className="w-full flex items-center justify-end gap-4">
          {status === "success" && (
            <p className="opacity-60">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="opacity-60">Something went wrong. Try again.</p>
          )}
          <Click
            target="_self"
            path="/"
            content={status === "loading" ? "Sending..." : "Submit"}
            onClick={(e) => {
              if (status === "loading") e.preventDefault();
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
