"use client";

import { useState, useEffect } from "react";
import { Breadcrumb } from "./breadcrumb";
import { FileList } from "./file-list";
import { UploadButton } from "./upload-button";
import { motion } from "framer-motion";
import { mockFiles } from "~/constants";

export default function Drive() {
  const [currentFolder, setCurrentFolder] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.body.classList.add("dark", "bg-dark-bg", "text-dark-text");
  }, []);

  const files = mockFiles.filter(
    (file) =>
      file.parent === currentFolder &&
      file.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleFolderClick = (folderId: string) => {
    setCurrentFolder(folderId);
  };

  const handleBreadcrumbClick = (folderId: string | null) => {
    setCurrentFolder(folderId);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto min-h-screen max-w-full p-4"
    >
      <h1 className="mb-6 text-3xl font-bold text-dark-accent">My Drive</h1>
      <div className="mb-6 flex w-full flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
        <Breadcrumb
          currentFolder={currentFolder}
          onFolderClick={handleBreadcrumbClick}
        />
        <div className="flex w-full space-x-4 md:w-auto">
          <input
            type="text"
            placeholder="Search files..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-md bg-dark-surface px-4 py-2 text-dark-text focus:outline-none focus:ring-2 focus:ring-dark-accent md:w-64"
          />
          <UploadButton />
        </div>
      </div>
      <FileList files={files} onFolderClick={handleFolderClick} />
    </motion.div>
  );
}
