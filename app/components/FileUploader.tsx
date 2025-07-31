import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { formatSize } from '../lib/utils';

interface FileUploaderProps {
  onFileSelect?: (file: File | null) => void;
}

const FileUploader = ({ onFileSelect }: FileUploaderProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0] || null;
    onFileSelect?.(file);
  }, [onFileSelect]);

  const maxFileSize = 20 * 1024 * 1024; // 20MB

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles
  } = useDropzone({
    onDrop,
    multiple: false,
    accept: { 'application/pdf': ['.pdf'] },
    maxSize: maxFileSize,
  });

  const file = acceptedFiles[0] || null;

  return (
    <div className="w-full border border-dashed border-indigo-300 rounded-xl bg-white dark:bg-[#1e1e2f] p-6 transition duration-300 hover:shadow-md">
      <div {...getRootProps()} className="cursor-pointer">
        <input {...getInputProps()} />
        <div className="space-y-4 text-center">
          {file ? (
            <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-[#2c2c3e] rounded-lg border border-gray-300 dark:border-gray-600">
              <div className="flex items-center gap-3">
                <img src="/images/pdf.png" alt="pdf" className="w-10 h-10" />
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate max-w-xs">
                    {file.name}
                  </p>
                  <p className="text-sm text-gray-500">{formatSize(file.size)}</p>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onFileSelect?.(null);
                }}
                className="p-2 rounded hover:bg-red-100 dark:hover:bg-red-800 transition"
              >
                <img src="/icons/cross.svg" alt="remove" className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 text-gray-600 dark:text-gray-300">
              <img src="/icons/info.svg" alt="upload" className="w-16 h-16" />
              <p className="text-lg">
                <span className="font-semibold text-indigo-600">Click to upload</span> or drag and drop
              </p>
              <p className="text-sm text-gray-500">PDF only (max {formatSize(maxFileSize)})</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
