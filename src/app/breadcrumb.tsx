import { ChevronRight, Home } from "lucide-react";
import { mockFiles } from "~/constants";
import { motion } from "framer-motion";

interface BreadcrumbProps {
  currentFolder: string | null;
  onFolderClick: (folderId: string | null) => void;
}

export function Breadcrumb({ currentFolder, onFolderClick }: BreadcrumbProps) {
  const breadcrumbs = [];
  let folder = currentFolder
    ? mockFiles.find((f) => f.id === currentFolder)
    : null;

  while (folder) {
    breadcrumbs.unshift(folder);
    folder = folder.parent
      ? mockFiles.find((f) => f.id === folder?.parent)
      : null;
  }

  return (
    <motion.div
      className="flex items-center space-x-2 overflow-x-auto pb-2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={() => onFolderClick(null)}
        className="text-dark-accent transition-colors hover:text-dark-text"
      >
        <Home size={18} />
      </button>
      {breadcrumbs.map((item, index) => (
        <motion.div
          key={item.id}
          className="flex items-center"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <ChevronRight size={18} className="text-dark-text" />
          <button
            onClick={() => onFolderClick(item.id)}
            className="text-dark-accent transition-colors hover:text-dark-text"
          >
            {item.name}
          </button>
        </motion.div>
      ))}
    </motion.div>
  );
}
