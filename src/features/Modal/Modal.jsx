import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { clsx } from "clsx";
import FooterModal from "./components/FooterModal";

function Modal({ title, trigger, onSubmit, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button
        type={trigger.type}
        aria-label={trigger.ariaLable}
        className={trigger.className}
        onClick={openModal}
      >
        {trigger.Icon}
      </button>

      <div
        className={clsx(
          "modal-screen absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-xs",
          isOpen ? "block" : "hidden",
        )}
      >
        <div className="w-100 p-4 space-y-4 bg-card rounded-2xl">
          <section className="header-modal pt-1 pb-4 flex items-center justify-between border-b border-solid border-gray-200">
            <h4 className="font-kalameh-bold">{title}</h4>

            <button
              type="button"
              className="text-primary cursor-pointer"
              onClick={closeModal}
            >
              <CgClose className="size-5" />
            </button>
          </section>

          <section className="content-modal">{children}</section>

          <FooterModal onClose={closeModal} onSubmit={onSubmit} />
        </div>
      </div>
    </>
  );
}

export default Modal;
