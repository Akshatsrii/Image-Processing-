import { useEffect, useState } from "react"
import api from "../api/axios"
import Navbar from "../components/Navbar"
import "./dashboard.css"

export default function Dashboard() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get("/images")
      .then(res => {
        setImages(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  return (
    <>
     
      <div className="dashboard">
        <div className="dashboard-header">
          <h2>
            Your Images
            {images.length > 0 && (
              <span className="image-count">
                {images.length} {images.length === 1 ? 'image' : 'images'}
              </span>
            )}
          </h2>
          <button onClick={() => window.location.href = "/upload"}>
            Upload Image
          </button>
        </div>

        {loading ? (
          <div className="image-grid">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="skeleton-card"></div>
            ))}
          </div>
        ) : images.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">📸</div>
            <h3>No images yet</h3>
            <p>Start building your collection by uploading your first image</p>
            <button onClick={() => window.location.href = "/upload"}>
              Upload Your First Image
            </button>
          </div>
        ) : (
          <div className="image-grid">
            {images.map(img => (
              <div className="image-card" key={img._id}>
                <img 
                  src={`http://localhost:5000/${img.originalPath}`} 
                  alt="Uploaded content"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}