import clsx from "clsx";
import Modal from "../../Modal/Modal";
import { FiEye } from "react-icons/fi";

function ChangeVisibleProduct({ product, onSubmit }) {
  const changeVisibleButton = {
    type: "button",
    ariaLable: "Change visible product button",
    className: "text-blue-500 cursor-pointer",
    Icon: <FiEye className="size-4" />,
  };
  return (
    <>
      <Modal
        title="تغییر وضعیت نمایش محصول"
        trigger={changeVisibleButton}
        onSubmit={() => onSubmit(product.id)}
      >
        <p className="text-center">
          آیا از{" "}
          <span
            className={clsx(
              product.isPublished ? "text-blue-500" : "text-green-500",
            )}
          >
            <strong>{product.isPublished ? "خصوصی" : "منتشر"}</strong>
          </span>{" "}
          کردن این محصول اطمینان دارید؟
        </p>
      </Modal>
    </>
  );
}

export default ChangeVisibleProduct;
