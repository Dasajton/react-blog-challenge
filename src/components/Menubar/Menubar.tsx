import "./Menubar.scss";
import ModalCreateBlog from "../ModalCreateBlog/BtnModalCreateBlog";

export default function Menubar() {
  return (
    <>
      <nav className="menubar">
        <h1>Blog</h1>
        <ModalCreateBlog />
      </nav>
      <div className="placeholder"></div>
    </>
  );
}
