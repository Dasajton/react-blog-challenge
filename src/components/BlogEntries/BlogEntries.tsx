import "./BlogEntries.scss";
import { BlogEntry } from "../../types";
import _initialBlogEntries from "../../data/blogEntries.json";
import { FaTrashAlt } from "react-icons/fa";
import { useBlogContext } from "../../BlogContext";

export default function BlogEntries() {
  const { blogEntries, setBlogEntries } = useBlogContext();

  const handleDeleteBlogEntry = (blogEntry: BlogEntry) => {
    setBlogEntries((prevBlogEntries) =>
      prevBlogEntries.filter((entry) => entry.id !== blogEntry.id)
    );
  };

  return (
    <div className="blogsContainer">
      {blogEntries.map((blogEntry) => (
        <div key={blogEntry.id} className="blogEntry">
          <h2 className="blogTitle">{blogEntry.title}</h2>
          <p className="blogDate">{blogEntry.date}</p>
          <p className="blogBody">{blogEntry.body}</p>
          <div className="tagsContainer">
            <div className="blogTag">
              {blogEntry.tags.map((blogTag) => (
                <span>{blogTag}</span>
              ))}
            </div>
            <button
              className="btnDeleteBlog"
              onClick={() => handleDeleteBlogEntry(blogEntry)}
            >
              <FaTrashAlt />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
