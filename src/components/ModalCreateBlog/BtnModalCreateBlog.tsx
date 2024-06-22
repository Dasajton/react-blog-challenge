import "./BtnModalCreateBlog.scss";
import { useBlogContext } from "../../BlogContext";

export default function ModalCreateBlog() {
  const { setModalCreateOpen } = useBlogContext();

  const handleCreateBlog = () => {
    setModalCreateOpen(true);
  };

  return (
    <button className="btnCreateBlog" onClick={() => handleCreateBlog()}>
      +
    </button>
  );
}
