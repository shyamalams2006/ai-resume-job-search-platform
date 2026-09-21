import { useState } from 'react'

function ResumeUpload() {
  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!file) {
      console.log('Please select a resume')
      return
    }

    console.log('Selected file:', file.name)

    // Later: send the file to the backend here
  }

  return (
    <div>
      <h2>Upload Your Resume</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
        />

        <button type="submit">
          Analyze Resume
        </button>
      </form>

      {file && <p>Selected: {file.name}</p>}
    </div>
  )
}

export default ResumeUpload