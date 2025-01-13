import React, { ChangeEvent, useRef, useState } from "react";
import Button from "../Button";

interface ImageUploadProps {
  onUploadSuccess: (imageUrl: string) => void;
  initialImageUrl?: string; // 초기 이미지 URL prop 추가
}

interface UploadResponse {
  url: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onUploadSuccess,
  initialImageUrl,
}) => {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [previewUrl, setPreviewUrl] = useState<string>(initialImageUrl || "");
  const inputRef = useRef<HTMLInputElement>(null);

  // initialImageUrl이 변경될 때 previewUrl 업데이트
  React.useEffect(() => {
    setPreviewUrl(initialImageUrl || "");
  }, [initialImageUrl]);

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const uploadImage = async (file: File): Promise<void> => {
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setError("파일 크기는 5MB를 초과할 수 없습니다.");
      return;
    }

    // 이전 미리보기 URL 정리
    if (previewUrl && !previewUrl.startsWith("http")) {
      URL.revokeObjectURL(previewUrl);
    }

    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);

    const formData = new FormData();
    formData.append("image", file);

    try {
      setIsUploading(true);
      setError("");

      const response = await fetch(
        "https://assignment-todolist-api.vercel.app/api/Han/images/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("이미지 업로드에 실패했습니다.");
      }

      const data: UploadResponse = await response.json();
      onUploadSuccess(data.url);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "이미지 업로드 중 오류가 발생했습니다."
      );
      setPreviewUrl(initialImageUrl || ""); // 에러 시 초기 이미지로 복원
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      uploadImage(file);
    }
  };

  // 컴포넌트 언마운트 시 미리보기 URL 정리
  React.useEffect(() => {
    return () => {
      if (previewUrl && !previewUrl.startsWith("http")) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div className="flex justify-center items-center h-full border-dashed border-2 border-slate-200 rounded-xl relative flex-1">
      {previewUrl ? (
        <img
          src={previewUrl}
          alt="이미지"
          className="w-full h-full object-contain rounded-xl"
        />
      ) : (
        <img src="/loadingImg.svg" alt="기본 이미지" />
      )}

      {isUploading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl">
          <div className="text-white">업로드 중...</div>
        </div>
      )}

      <Button
        variant="add"
        handleClick={handleButtonClick}
        className="bg-slate-200 border-none bottom-2 right-2 absolute"
        textClassName="hidden"
        IconeColor="text-slate-500"
        disabled={isUploading}
      />
      <input
        ref={inputRef}
        className="hidden"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        disabled={isUploading}
      />

      {error && (
        <div className="absolute bottom-12 left-2 right-2 text-red-500 text-sm bg-white p-2 rounded shadow">
          {error}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
