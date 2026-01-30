import { useState } from "react"
import api from "../api/axios"
import Navbar from "../components/Navbar"
import "./Upload.css"

export default function Upload() {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [dragActive, setDragActive] = useState(false)

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile) {
      setFile(selectedFile)
      setPreview(URL.createObjectURL(selectedFile))
    }
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0]
      setFile(droppedFile)
      setPreview(URL.createObjectURL(droppedFile))
    }
  }

  const upload = async () => {
    if (!file) return
    
    setUploading(true)
    try {
      const form = new FormData()
      form.append("image", file)
      await api.post("/images", form)
      window.location.href = "/dashboard"
    } catch (error) {
      console.error("Upload failed:", error)
      setUploading(false)
    }
  }

  const clearFile = () => {
    setFile(null)
    setPreview(null)
  }

  return (
    <>
      <Navbar />
      <div className="upload-container">
        <div className="upload-wrapper">
          <div className="upload-header">
            <h1>Upload Your Image</h1>
            <p>Share your moments with the world</p>
          </div>

          <div 
            className={`upload-zone ${dragActive ? 'drag-active' : ''} ${file ? 'has-file' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {!preview ? (
              <>
                <div className="upload-icon">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                </div>
                <h3>Drag & drop your image here</h3>
                <p className="upload-subtitle">or click to browse</p>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleFileChange}
                  className="file-input"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="browse-btn">
                  Choose File
                </label>
                <p className="upload-info">Supports: JPG, PNG, GIF (Max 10MB)</p>
              </>
            ) : (
              <div className="preview-container">
                <img src={preview} alt="Preview" className="preview-image" />
                <div className="file-info">
                  <p className="file-name">{file.name}</p>
                  <p className="file-size">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
                <button onClick={clearFile} className="clear-btn" type="button">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  Remove
                </button>
              </div>
            )}
          </div>

          {file && (
            <button 
              onClick={upload} 
              className="upload-btn"
              disabled={uploading}
            >
              {uploading ? (
                <>
                  <span className="spinner"></span>
                  Uploading...
                </>
              ) : (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5-5-5 5M12 4v12" />
                  </svg>
                  Upload Image
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </>
  )
}