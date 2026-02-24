import Modal from "../../Modal/Modal";
import { FiTrash2 } from "react-icons/fi";

function RemoveProduct({ productId, productTitle, onSubmit }) {
  const removeButton = {
    type: "button",
    ariaLable: "Remove product button",
    className: "text-primary cursor-pointer",
    Icon: <FiTrash2 className="size-4" />,
  };
  return (
    <>
      <Modal
        title="حذف محصول"
        trigger={removeButton}
        onSubmit={() => onSubmit(productId)}
      >
        <p className="text-center">
          آیا از حذف محصول{" "}
          <span className="px-2 bg-tertiary text-primary rounded-xl">
            {productTitle}
          </span>{" "}
          اطمینان دارید؟
        </p>
      </Modal>
    </>
  );
}

export default RemoveProduct;
