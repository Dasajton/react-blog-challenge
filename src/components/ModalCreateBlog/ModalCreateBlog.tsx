import "./ModalCreateBlog.scss";
import { useBlogContext } from "../../BlogContext";

export default function ModalCreateBlog() {
  const { modalCreateOpen, setModalCreateOpen } = useBlogContext();

  const handleCloseModal = () => {
    setModalCreateOpen(false);
  };

  const handleCreateBlog = () => {};

  return (
    <div className="overlay">
      <div className={`modalContainer ${modalCreateOpen ? "scaleUp" : ""}`}>
        <header className="modalHeader">
          <h2 className="modalHeadline">Create new Blog Entry</h2>
          <button className="btnCloseModal" onClick={handleCloseModal}>
            Close
          </button>
        </header>

        <form onSubmit={handleCreateBlog} className="modalForm">
          <input type="text" placeholder="Title" className="modalTitle" />
          <input type="date" placeholder="Date" className="modalDate" />
          <textarea placeholder="Description" className="modalBody"></textarea>
          <button className="modalBtnCreate">Create Blog</button>
        </form>
      </div>
    </div>
  );
}
