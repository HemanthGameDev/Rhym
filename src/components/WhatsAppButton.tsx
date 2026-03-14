const whatsappLink = 'https://wa.me/918096122601';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7 fill-current">
      <path d="M19.11 17.29c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.85 1.06-.16.18-.31.2-.58.07-.27-.14-1.12-.41-2.13-1.3-.79-.71-1.33-1.58-1.49-1.85-.16-.27-.02-.41.12-.54.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.47-.83-2.02-.22-.52-.45-.45-.61-.46h-.52c-.18 0-.47.07-.72.34s-.95.93-.95 2.28 1 2.65 1.14 2.84c.14.18 1.96 2.99 4.75 4.19.66.29 1.18.46 1.58.59.66.21 1.27.18 1.74.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.06-.11-.25-.18-.52-.31Z" />
      <path d="M16.03 4.8c-6.16 0-11.17 5.01-11.17 11.17 0 1.97.52 3.9 1.5 5.59L4.8 27.2l5.78-1.52a11.09 11.09 0 0 0 5.45 1.43h.01c6.16 0 11.17-5.01 11.17-11.17 0-2.99-1.16-5.8-3.28-7.91A11.08 11.08 0 0 0 16.03 4.8Zm0 20.42h-.01a9.25 9.25 0 0 1-4.72-1.3l-.34-.2-3.43.9.92-3.35-.22-.35a9.28 9.28 0 1 1 7.8 4.3Z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Rhythm n Rhymez on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_20px_45px_-20px_rgba(37,211,102,0.85)] transition hover:scale-105 hover:bg-[#1fb85a] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366]/25"></span>
      <span className="relative">
        <WhatsAppIcon />
      </span>
    </a>
  );
}
