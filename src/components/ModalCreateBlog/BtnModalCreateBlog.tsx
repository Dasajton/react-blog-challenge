import "./BtnModalCreateBlog.scss";
import { IoIosCreate } from "react-icons/io";
import { useBlogContext } from "../../BlogContext";

export default function ModalCreateBlog() {
  const { setModalCreateOpen } = useBlogContext();

  const handleCreateBlog = () => {
    setModalCreateOpen(true);
  };

  return (
    <button className="btnCreateBlog" onClick={() => handleCreateBlog()}>
      <IoIosCreate className="btnCreateIcon" />
    </button>
  );
}
