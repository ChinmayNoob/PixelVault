'use client'

import { CldUploadButton } from "next-cloudinary"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { UploadIcon } from "lucide-react"

interface UploadResult {
    info: {
        public_id: string;
    };
    event: "success";
}

function ImageUploadButton() {
    const router = useRouter();

    const handleUploadSuccess = (result: any) => {
        console.log("Upload Completed");
        setTimeout(() => {
            router.refresh();
        }, 2000);
    };

    return (
        <Button asChild>
            <CldUploadButton
                onSuccess={handleUploadSuccess}
                uploadPreset="yd2z7ho0"
            >
                <div className="flex gap-2 items-center">
                    <UploadIcon className="w-5 h-5" />
                    Upload
                </div>
            </CldUploadButton>
        </Button>
    )
}

export default ImageUploadButton