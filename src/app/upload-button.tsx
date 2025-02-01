import { Upload } from "lucide-react"
import { motion } from "framer-motion"

export function UploadButton() {
  const handleUpload = () => {
    console.log("Upload button clicked")
    alert("Upload functionality would be implemented here")
  }

  return (
    <motion.button
      onClick={handleUpload}
      className="bg-dark-accent hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Upload size={18} className="mr-2" />
      <span>Upload</span>
    </motion.button>
  )
}

