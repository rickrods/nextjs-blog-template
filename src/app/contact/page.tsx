'use client';

import * as React from 'react';
import { useFormState } from 'react-dom';
import { sendContactEmail } from './actions';

const initialState = {
  success: false,
  error: '',
};

export default function ContactFormPage() {
  const [state, formAction] = useFormState(sendContactEmail, initialState);
  const formRef = React.useRef<HTMLFormElement>(null);

  React.useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state?.success]);

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-center mb-4">Contact Form</h1>
      </div>
      {state?.success && <p style={{ color: 'green' }}>Message sent successfully!</p>}
      {state?.error && <p style={{ color: 'red' }}>{state.error}</p>}
      
      <form ref={formRef} action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows={5} required />

        <button
          type="submit"
          className="w-1/2 self-center bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 hover:ring-2 hover:ring-blue-400 transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}