import type { FileItem as FileItemType } from "~/constants";
import { FileItem } from "./file-item";
import { motion } from "framer-motion";

interface FileListProps {
  files: FileItemType[];
  onFolderClick: (folderId: string) => void;
}

export function FileList({ files, onFolderClick }: FileListProps) {
  return (
    <motion.div
      className="w-full overflow-hidden rounded-lg bg-dark-surface shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <table className="w-full">
        <thead>
          <tr className="bg-dark-hover">
            <th className="px-4 py-2 text-left text-dark-text">Name</th>
            <th className="hidden px-4 py-2 text-left text-dark-text md:table-cell">
              Type
            </th>
            <th className="hidden px-4 py-2 text-left text-dark-text md:table-cell">
              Size
            </th>
            <th className="hidden px-4 py-2 text-left text-dark-text md:table-cell">
              Modified
            </th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <FileItem
              key={file.id}
              file={file}
              onFolderClick={onFolderClick}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
