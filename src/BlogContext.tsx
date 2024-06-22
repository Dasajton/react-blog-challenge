import { createContext, useContext, useState } from "react";
import { BlogEntry } from "./types";
import _initialBlogEntries from "./data/blogEntries.json";

type BlogContext = {
  blogEntries: BlogEntry[];
  setBlogEntries: React.Dispatch<React.SetStateAction<BlogEntry[]>>;
  modalCreateOpen: boolean;
  setModalCreateOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type BlogProvider = {
  children: React.ReactNode;
};

const BlogContext = createContext<BlogContext>({} as BlogContext);

export const BlogProvider = ({ children }: BlogProvider) => {
  const initialBlogEntries = _initialBlogEntries.sort((a, b) =>
    a.date > b.date ? -1 : 1
  );
  const [blogEntries, setBlogEntries] =
    useState<BlogEntry[]>(initialBlogEntries);

  const [modalCreateOpen, setModalCreateOpen] = useState(false);

  return (
    <BlogContext.Provider
      value={{
        blogEntries,
        setBlogEntries,
        modalCreateOpen,
        setModalCreateOpen,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => useContext(BlogContext);
