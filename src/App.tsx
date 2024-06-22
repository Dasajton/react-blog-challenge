import Menubar from "./components/Menubar/Menubar";
import BlogEntries from "./components/BlogEntries/BlogEntries";
import { useBlogContext } from "./BlogContext";
import ModalCreateBlog from "./components/ModalCreateBlog/ModalCreateBlog";

export default function App() {
  const { modalCreateOpen } = useBlogContext();
  return (
    <div>
      <Menubar />
      <BlogEntries />
      {modalCreateOpen && <ModalCreateBlog />}
    </div>
  );
}
