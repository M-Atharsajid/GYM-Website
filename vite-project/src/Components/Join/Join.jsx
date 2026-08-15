import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./join.css";

// Optional: fill these in .env to route mail through your own EmailJS account.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const useEmailJS = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

// Fallback that needs no account or API key — delivers straight to the owner.
const OWNER_EMAIL = "m.atharsajid45@gmail.com";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${OWNER_EMAIL}`;

function Join({ selectedProgram = "", onClearProgram }) {
  const form = useRef();
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);

  const program = selectedProgram || "General Membership";

  const sendViaEmailJS = () =>
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
      publicKey: PUBLIC_KEY,
    });

  const sendViaFormSubmit = async (email) => {
    const response = await fetch(FORMSUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        program,
        _subject: `New join request — ${program}`,
        _template: "table",
        _captcha: "false",
      }),
    });

    if (!response.ok) {
      throw new Error(`FormSubmit responded with ${response.status}`);
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const email = new FormData(form.current).get("user_email")?.trim();
    if (!email) return;

    setSending(true);
    setStatus({ type: "", message: "" });

    try {
      if (useEmailJS) {
        await sendViaEmailJS();
      } else {
        await sendViaFormSubmit(email);
      }
      setStatus({
        type: "success",
        message: `Thanks for joining ${program}! We'll get back to you shortly.`,
      });
      form.current.reset();
      onClearProgram?.();
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
      console.error("Join form failed:", error?.text || error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span> YOUR BODY</span>
          <span className="stroke-text"> WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        {selectedProgram && (
          <span className="selected-program">
            Joining: <strong>{selectedProgram}</strong>
            <button
              type="button"
              className="clear-program"
              onClick={onClearProgram}
              aria-label="Clear selected program"
            >
              &times;
            </button>
          </span>
        )}
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input type="hidden" name="program" value={program} readOnly />
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email Address"
            required
            disabled={sending}
          />
          <button className="btn btn-j" type="submit" disabled={sending}>
            {sending ? "Sending..." : "Join Now"}
          </button>
        </form>
        {status.message && (
          <span className={`form-status ${status.type}`}>{status.message}</span>
        )}
      </div>
    </div>
  );
}
export default Join;
