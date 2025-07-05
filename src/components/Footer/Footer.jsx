import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa';

const Footer = () => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [resultMsg, setResultMsg] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const form = formRef.current;
    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      title: form.subject.value.trim(),
      message: form.message.value.trim(),
      time: new Date().toLocaleString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    emailjs.send(
      'service_2ade1al',
      'template_xi0pm2g',
      formData,
      'zpdkaVLyM23ZWAk2c'
    )
      .then(() => {
        setResultMsg('Pesan berhasil dikirim!');
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        setResultMsg('Gagal mengirim pesan.');
      })
      .finally(() => setSending(false));
  };

  return (
    <footer className="w-full bg-[#121212] text-white px-6 sm:px-12 pt-20 pb-10" id='footer'>
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-mono font-bold mb-8 font-sans">Contact</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">

          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="w-full bg-transparent border-b border-gray-400 py-2 px-1 focus:outline-none focus:border-white"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="w-full bg-transparent border-b border-gray-400 py-2 px-1 focus:outline-none focus:border-white"
          />

          <input
            type="text"
            name="subject"
            required
            placeholder="Subject"
            className="w-full bg-transparent border-b border-gray-400 py-2 px-1 focus:outline-none focus:border-white"
          />

          <textarea
            name="message"
            rows="4"
            required
            placeholder="Your Message"
            className="w-full bg-transparent border-b border-gray-400 py-2 px-1 focus:outline-none focus:border-white resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={sending}
            className={`flex items-center gap-2 ${
              sending ? 'bg-gray-600 cursor-not-allowed' : 'bg-white text-black hover:scale-105'
            } font-semibold px-6 py-3 rounded-md transition w-fit mt-4`}
          >
            <FaEnvelope />
            {sending ? 'Sending...' : 'Send'}
          </button>

          {resultMsg && (
            <p className="mt-2 text-sm text-green-400">{resultMsg}</p>
          )}
        </form>
      </div>

      <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Tegar Asayahanda. All rights reserved.</p>
        <div className="flex gap-5 text-xl">
          <a href="https://github.com/asayahandatgr" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition"><FaGithub /></a>
          <a href="https://linkedin.com/in/tegarasayahandafirdaus" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"><FaLinkedin /></a>
          <a href="https://instagram.com/tegarasayahanda" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
