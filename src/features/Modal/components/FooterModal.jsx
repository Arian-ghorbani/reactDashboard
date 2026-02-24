function FooterModal({ onClose, onSubmit }) {
  const submitHandler = () => {
    onClose();
    onSubmit();
  };

  return (
    <section className="footer-modal pt-4 flex items-center justify-end gap-x-3 border-t border-solid border-gray-200 [&_button]:h-9 [&_button]:px-4 [&_button]:rounded-xl [&_button]:cursor-pointer [&_button]:transition-colors [&_button]:duration-200">
      <button
        className="bg-tertiary text-primary-text hover:bg-primary hover:text-white"
        onClick={onClose}
      >
        انصراف
      </button>
      <button
        className="bg-green-400 text-primary-text hover:bg-green-500 hover:text-white"
        onClick={submitHandler}
      >
        تایید
      </button>
    </section>
  );
}

export default FooterModal;
