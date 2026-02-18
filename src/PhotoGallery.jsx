import { useState, useEffect, useRef } from "react";
import { storage, db } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  collection,
  addDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

export default function PhotoGallery({ shapeName, shapeColor, firebaseReady }) {
  const [photos, setPhotos] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showUpload, setShowUpload] = useState(false);
  const [contributorName, setContributorName] = useState("");
  const [caption, setCaption] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const fileInputRef = useRef(null);

  // Listen for photos for this shape
  useEffect(() => {
    if (!firebaseReady) return;

    const q = query(
      collection(db, "photos"),
      where("shapeName", "==", shapeName),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const photoData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPhotos(photoData);
      },
      (error) => {
        console.log("Firestore listener error:", error);
      }
    );

    return () => unsubscribe();
  }, [shapeName, firebaseReady]);

  const handleUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file || !firebaseReady) return;

    // Validate file
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("Image must be under 5MB.");
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    try {
      // Create a unique filename
      const timestamp = Date.now();
      const safeName = shapeName.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
      const ext = file.name.split(".").pop();
      const filePath = `photos/${safeName}/${timestamp}-${Math.random().toString(36).slice(2, 8)}.${ext}`;

      // Upload to Firebase Storage
      const storageRef = ref(storage, filePath);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error("Upload error:", error);
          alert("Upload failed. Please try again.");
          setUploading(false);
        },
        async () => {
          // Upload complete — get URL and save metadata
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          await addDoc(collection(db, "photos"), {
            shapeName,
            imageUrl: downloadURL,
            storagePath: filePath,
            contributor: contributorName.trim() || "Anonymous",
            caption: caption.trim() || "",
            createdAt: serverTimestamp(),
          });

          setUploading(false);
          setUploadProgress(0);
          setCaption("");
          setShowUpload(false);
          if (fileInputRef.current) fileInputRef.current.value = "";
        }
      );
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed. Please try again.");
      setUploading(false);
    }
  };

  if (!firebaseReady) {
    return (
      <div
        style={{
          padding: "0.75rem",
          background: "#f8f2e8",
          borderRadius: "4px",
          textAlign: "center",
          fontSize: "0.8rem",
          color: "#8a7050",
          fontStyle: "italic",
        }}
      >
        Photo sharing is not yet configured.
        <br />
        <span style={{ fontSize: "0.7rem" }}>
          (Firebase setup needed — see README)
        </span>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "0.75rem" }}>
      {/* Photo grid */}
      {photos.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
            gap: "6px",
            marginBottom: "0.75rem",
          }}
        >
          {photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              style={{
                aspectRatio: "1",
                borderRadius: "4px",
                overflow: "hidden",
                cursor: "pointer",
                border: "2px solid transparent",
                transition: "border-color 0.15s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = shapeColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "transparent")
              }
            >
              <img
                src={photo.imageUrl}
                alt={`${shapeName} by ${photo.contributor}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Photo count */}
      <div
        style={{
          fontSize: "0.7rem",
          color: "#8a7050",
          marginBottom: "0.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>
          {photos.length === 0
            ? "No community photos yet — be the first!"
            : `${photos.length} community photo${photos.length !== 1 ? "s" : ""}`}
        </span>
      </div>

      {/* Upload button / form */}
      {!showUpload ? (
        <button
          onClick={() => setShowUpload(true)}
          style={{
            background: "none",
            border: `1px dashed ${shapeColor}`,
            color: shapeColor,
            padding: "0.5rem 1rem",
            fontSize: "0.78rem",
            cursor: "pointer",
            fontFamily: "Georgia, serif",
            width: "100%",
            borderRadius: "4px",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = shapeColor + "10")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "none")
          }
        >
          📷 Add a Photo
        </button>
      ) : (
        <div
          style={{
            background: "#f8f2e8",
            padding: "0.75rem",
            borderRadius: "4px",
            border: `1px solid ${shapeColor}30`,
          }}
        >
          <div
            style={{
              fontSize: "0.8rem",
              fontWeight: "bold",
              color: "#2a1f14",
              marginBottom: "0.5rem",
              fontFamily: "Georgia, serif",
            }}
          >
            Share a photo of {shapeName}
          </div>

          <input
            type="text"
            placeholder="Your name (optional)"
            value={contributorName}
            onChange={(e) => setContributorName(e.target.value)}
            style={{
              width: "100%",
              padding: "0.4rem 0.6rem",
              border: "1px solid #c4a870",
              background: "#faf6ef",
              fontFamily: "Georgia, serif",
              fontSize: "0.78rem",
              marginBottom: "0.4rem",
              color: "#2a1f14",
              boxSizing: "border-box",
            }}
          />

          <input
            type="text"
            placeholder="Caption (optional)"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            style={{
              width: "100%",
              padding: "0.4rem 0.6rem",
              border: "1px solid #c4a870",
              background: "#faf6ef",
              fontFamily: "Georgia, serif",
              fontSize: "0.78rem",
              marginBottom: "0.5rem",
              color: "#2a1f14",
              boxSizing: "border-box",
            }}
          />

          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <label
              style={{
                background: shapeColor,
                color: "#fff",
                padding: "0.4rem 0.8rem",
                fontSize: "0.78rem",
                cursor: uploading ? "not-allowed" : "pointer",
                fontFamily: "Georgia, serif",
                borderRadius: "3px",
                opacity: uploading ? 0.6 : 1,
              }}
            >
              {uploading
                ? `Uploading ${Math.round(uploadProgress)}%`
                : "Choose Photo"}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleUpload}
                disabled={uploading}
                style={{ display: "none" }}
              />
            </label>

            <button
              onClick={() => {
                setShowUpload(false);
                setCaption("");
              }}
              style={{
                background: "none",
                border: "none",
                color: "#8a7050",
                fontSize: "0.75rem",
                cursor: "pointer",
                fontFamily: "Georgia, serif",
              }}
            >
              Cancel
            </button>
          </div>

          {uploading && (
            <div
              style={{
                marginTop: "0.5rem",
                height: "4px",
                background: "#e0d0b0",
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${uploadProgress}%`,
                  height: "100%",
                  background: shapeColor,
                  transition: "width 0.3s",
                }}
              />
            </div>
          )}

          <div
            style={{
              fontSize: "0.65rem",
              color: "#8a7050",
              marginTop: "0.4rem",
              fontStyle: "italic",
            }}
          >
            Max 5MB · JPG, PNG, or WebP · Photos are shared with the community
          </div>
        </div>
      )}

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            cursor: "pointer",
          }}
        >
          <img
            src={selectedPhoto.imageUrl}
            alt={shapeName}
            style={{
              maxWidth: "90vw",
              maxHeight: "75vh",
              objectFit: "contain",
              borderRadius: "4px",
            }}
          />
          <div
            style={{
              color: "#e8d5b0",
              marginTop: "1rem",
              textAlign: "center",
              fontFamily: "Georgia, serif",
            }}
          >
            {selectedPhoto.caption && (
              <div style={{ fontSize: "0.9rem", marginBottom: "0.3rem" }}>
                {selectedPhoto.caption}
              </div>
            )}
            <div style={{ fontSize: "0.75rem", color: "#b0956a" }}>
              Contributed by {selectedPhoto.contributor}
            </div>
          </div>
          <div
            style={{
              color: "#666",
              fontSize: "0.7rem",
              marginTop: "1rem",
            }}
          >
            Click anywhere to close
          </div>
        </div>
      )}
    </div>
  );
}
