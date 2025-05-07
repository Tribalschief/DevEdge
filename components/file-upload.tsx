"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, X, Check, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface FileUploadProps {
  onFileChange: (file: File | null) => void
  accept?: string
  maxSize?: number // in MB
  label?: string
  required?: boolean
}

export function FileUpload({
  onFileChange,
  accept = ".pdf",
  maxSize = 4000, // Default 5MB
  label = "Upload a file",
  required = true,
}: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null)

    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]

      // Check file type
      const fileType = selectedFile.type
      const fileExtension = selectedFile.name.split(".").pop()?.toLowerCase()

      // For PDF validation
      if (accept === ".pdf" && (fileType !== "application/pdf" || fileExtension !== "pdf")) {
        setError("Please upload a PDF file only")
        toast({
          title: "Invalid file format",
          description: "Please upload a PDF file only",
          variant: "destructive",
        })
        return
      }

      // Check file size
      const maxSizeBytes = maxSize * 1024 * 1024
      if (selectedFile.size > maxSizeBytes) {
        setError(`File size should not exceed ${maxSize}MB`)
        toast({
          title: "File too large",
          description: `File size should not exceed ${maxSize}MB`,
          variant: "destructive",
        })
        return
      }

      setFile(selectedFile)
      onFileChange(selectedFile)
      toast({
        title: "File uploaded",
        description: `${selectedFile.name} has been uploaded successfully.`,
      })
    }
  }

  const removeFile = () => {
    setFile(null)
    onFileChange(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="block mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        {file && (
          <button
            type="button"
            onClick={removeFile}
            className="text-red-500 text-sm flex items-center hover:text-red-700"
          >
            <X className="h-4 w-4 mr-1" />
            Remove
          </button>
        )}
      </div>

      <p className="text-sm text-gray-600 mb-2">
        Maximum size: {maxSize} MB ({accept.replace(/\./g, "").toUpperCase()})
      </p>

      {!file ? (
        <div className="border border-dashed border-gray-300 rounded-sm p-8 text-center">
          <input
            type="file"
            id="file-upload"
            ref={fileInputRef}
            className="hidden"
            accept={accept}
            onChange={handleFileChange}
          />
          <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
            <Upload className="h-6 w-6 text-[#6208CA] mb-2" />
            <p className="text-[#6208CA] font-medium mb-2">Upload a file</p>
            <p className="text-sm text-gray-600">
              Drag and drop or <span className="text-[#6208CA] font-medium">Browse file</span>
            </p>
          </label>
        </div>
      ) : (
        <div className="border border-green-200 bg-green-50 rounded-sm p-4">
          <div className="flex items-center">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            <div className="flex-1 truncate">
              <p className="font-medium">{file.name}</p>
              <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="flex items-center text-red-500 text-sm mt-1">
          <AlertCircle className="h-4 w-4 mr-1" />
          {error}
        </div>
      )}
    </div>
  )
}
