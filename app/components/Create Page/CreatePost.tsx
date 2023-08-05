"use client";
import * as React from "react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { TbPhotoPlus } from "react-icons/tb";
import axios from "axios";
import { useRouter } from "next/navigation";

declare global {
  var cloudinary: any;
}

const uploadPreset = "wtljrgsr";

interface ICreatePostProps {}

const CreatePost: React.FunctionComponent<ICreatePostProps> = (props) => {
  const [imgVal, setImgVal] = React.useState<string>();
  const [caption, setCaption] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const handleUpload = React.useCallback((result: any) => {
    setImgVal(result.info.secure_url);
  }, []);

  const handleCaptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCaption(e.target.value);
  };

  const handlePostSubmit = async () => {
    setIsLoading(true);

    const data = {
      image: imgVal,
      caption: caption,
    };

    axios
      .post("/api/post", data)
      .then(() => {
        setIsLoading(false);
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="pt-[80px] w-full max-w-[500px] mx-auto">
      <CldUploadWidget
        onUpload={handleUpload}
        uploadPreset={uploadPreset}
        options={{
          maxFiles: 1,
        }}
      >
        {({ open }) => {
          return (
            <div
              onClick={() => open?.()}
              className="
              relative
              cursor-pointer
              hover:opacity-70
              transition
              border-dashed 
              border-2 
              p-20 
              border-neutral-300
              flex
              flex-col
              justify-center
              items-center
              gap-4
              text-neutral-600
              min-h-[800px]
              max-h-[1000px]
              h-auto
            "
            >
              <TbPhotoPlus size={50} />
              <div className="font-semibold text-lg">Click to upload</div>
              {imgVal && (
                <div
                  className="
              absolute inset-0 w-full h-full"
                >
                  <Image
                    fill
                    style={{ objectFit: "cover" }}
                    src={imgVal}
                    alt="House"
                  />
                </div>
              )}
            </div>
          );
        }}
      </CldUploadWidget>

      <div className="relative mt-10 -inset-y-[25px]">
        <input
          type="text"
          placeholder=" "
          className="border border-[#dadada] rounded-sm w-full h-10 focus:outline-0 focus:ring-0 text-[14px] pl-[10px]"
          value={caption}
          onChange={handleCaptionChange}
          required
        />
        <span
          className={`absolute text-gray-500 font-light whitespace-nowrap  ${
            caption
              ? "text-[8px] left-[10px] top-[2px]"
              : "text-[14px] top-[9px] left-[10px]"
          }`}
        >
          Enter Caption
        </span>
      </div>

      <div className="flex justify-center">
        <button
          className="h-[40px] bg-rose-500 rounded-[15px] text-white text-center px-5 py-2"
          onClick={handlePostSubmit}
          disabled={isLoading}
        >
          Create Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
