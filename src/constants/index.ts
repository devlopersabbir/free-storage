export type FileType = "folder" | "document" | "image" | "video" | "audio";

export interface FileItem {
  id: string;
  name: string;
  type: FileType;
  size?: string;
  modified: string;
  parent: string | null;
}

export const mockFiles: FileItem[] = [
  {
    id: "1",
    name: "Documents",
    type: "folder",
    modified: "2023-05-01",
    parent: null,
  },
  {
    id: "2",
    name: "Images",
    type: "folder",
    modified: "2023-05-02",
    parent: null,
  },
  {
    id: "3",
    name: "Videos",
    type: "folder",
    modified: "2023-05-03",
    parent: null,
  },
  {
    id: "4",
    name: "Report.docx",
    type: "document",
    size: "2.5 MB",
    modified: "2023-05-04",
    parent: "1",
  },
  {
    id: "5",
    name: "Presentation.pptx",
    type: "document",
    size: "5.1 MB",
    modified: "2023-05-05",
    parent: "1",
  },
  {
    id: "6",
    name: "Vacation.jpg",
    type: "image",
    size: "3.2 MB",
    modified: "2023-05-06",
    parent: "2",
  },
  {
    id: "7",
    name: "Family.mp4",
    type: "video",
    size: "15.7 MB",
    modified: "2023-05-07",
    parent: "3",
  },
];
