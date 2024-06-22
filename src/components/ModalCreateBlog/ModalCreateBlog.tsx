import "./ModalCreateBlog.scss";
import { useBlogContext } from "../../BlogContext";

export default function ModalCreateBlog() {
  const { modalCreateOpen, setModalCreateOpen } = useBlogContext();
  return (
    <div className="overlay">
      <div className={`modalContainer ${modalCreateOpen ? "scaleUp" : ""}`}>
        <header className="modalHeader">
          <h2 className="modalHeadline">Create new Blog Entry</h2>
          <button className="btnCloseModal">Close</button>
        </header>

        <form className="modalForm">
          <input type="text" placeholder="Title" className="modalTitle" />
          <input type="date" placeholder="Date" className="modalDate" />
          <textarea placeholder="Description" className="modalBody"></textarea>
          <button className="modalBtnCreate">Create Blog</button>
        </form>
      </div>
    </div>
  );
}
