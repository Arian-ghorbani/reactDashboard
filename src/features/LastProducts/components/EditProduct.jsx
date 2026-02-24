import Modal from "../../Modal/Modal";
import { FiEdit } from "react-icons/fi";

function EditProduct() {
  const editButton = {
    type: "button",
    ariaLable: "Edit product button",
    className: "text-yellow-500 cursor-pointer",
    Icon: <FiEdit className="size-4" />,
  };
  return (
    <>
      <Modal title="ویرایش محصول" trigger={editButton}></Modal>
    </>
  );
}

export default EditProduct;
