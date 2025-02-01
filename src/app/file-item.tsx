import type { FileItem as FileItemType } from "~/constants";
import { Folder, FileText, Image, Video, Music } from "lucide-react";
import { motion } from "framer-motion";

interface FileItemProps {
  file: FileItemType;
  onFolderClick: (folderId: string) => void;
  index: number;
}

export function FileItem({ file, onFolderClick, index }: FileItemProps) {
  const handleClick = () => {
    if (file.type === "folder") {
      onFolderClick(file.id);
    } else {
      console.log(`Opening file: ${file.name}`);
    }
  };

  const getIcon = () => {
    switch (file.type) {
      case "folder":
        return <Folder className="text-yellow-400" />;
      case "document":
        return <FileText className="text-blue-400" />;
      case "image":
        return <Image className="text-green-400" />;
      case "video":
        return <Video className="text-red-400" />;
      case "audio":
        return <Music className="text-purple-400" />;
      default:
        return <FileText className="text-gray-400" />;
    }
  };

  return (
    <motion.tr
      className="cursor-pointer transition-colors hover:bg-dark-hover"
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <td className="flex items-center space-x-2 px-4 py-2">
        <motion.div
          whileHover={{ rotate: 15 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {getIcon()}
        </motion.div>
        <span className="truncate">{file.name}</span>
      </td>
      <td className="hidden px-4 py-2 md:table-cell">{file.type}</td>
      <td className="hidden px-4 py-2 md:table-cell">{file.size || "-"}</td>
      <td className="hidden px-4 py-2 md:table-cell">{file.modified}</td>
    </motion.tr>
  );
}
