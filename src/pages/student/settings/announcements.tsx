import Header from "@/components/header";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS
import upload from "../../../../public/assets/upload.svg";

export default function Announcements() {
  const { query } = useRouter();

  // State to store the form data
  const [formData, setFormData] = useState<{
    topic: string;
    detail: string;
    images: File[];
  }>({
    topic: "",
    detail: "",
    images: [],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const uploadedImages = Array.from(e.target.files);
      if (uploadedImages.length + formData.images.length > 1) {
        toast.error("Maximum number of 1 image only");
        return;
      }
      setFormData({
        ...formData,
        images: [...formData.images, ...uploadedImages],
      });
      toast.success("Image(s) uploaded successfully!");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.topic || !formData.detail) {
      toast.error("Please fill in all required fields.");
      return;
    }
    // Logic for submitting the form data
    toast.success("Announcement submitted successfully!");
    console.log(formData);
  };

  return (
    <div>
      <Header title={query.title} fromQuery={true} showNotificationIcon />
      <section className="rounded-md bg-white p-6">
        <h2 className="pb-3 text-2xl font-light">
          Welcome back, <br /> You are about to create a new announcement.
        </h2>
        <p className="py-3 text-lg font-medium text-[#D32D44]">
          Please fill in the following fields appropriately to complete this
          announcement.
        </p>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-md bg-[#F8F9FB] p-6"
        >
          {/* Topic Input */}
          <div>
            <label htmlFor="topic" className="block text-sm font-medium">
              Topic
            </label>
            <input
              type="text"
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 p-2"
              placeholder="Type in the topic of the announcement here..."
              required
            />
          </div>

          {/* Images Upload */}
          <div>
            <label htmlFor="images" className="block text-sm font-medium">
              Images
            </label>
            <div className="relative flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white p-8 text-center">
              <input
                type="file"
                id="images"
                name="images"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="absolute inset-0 cursor-pointer opacity-0"
              />
              <div className="flex flex-col items-center text-sm text-gray-500">
                <Image src={upload} alt="upload" />
                <p className="text-sm font-medium text-[#4B4A4F99]">
                  Click to upload an image or drag and drop an image here
                </p>
                <p className="text-sm font-medium text-[#D32D44]">
                  Maximum number of 1 image only
                </p>
              </div>
            </div>

            {/* Preview uploaded images */}
            {formData.images.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-4">
                {formData.images.map((file, index) => (
                  <div key={index} className="relative">
                    <Image
                      src={URL.createObjectURL(file)}
                      alt={`Uploaded image ${index + 1}`}
                      width={100}
                      height={100}
                      className="rounded-md object-cover"
                    />
                    <button
                      type="button"
                      className="absolute right-0 top-0"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          images: formData.images.filter((_, i) => i !== index),
                        })
                      }
                    >
                      <IoCloseCircle className="text-red-500" size={20} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Detail Textarea */}
          <div>
            <label htmlFor="detail" className="block text-sm font-medium">
              Detail
            </label>
            <textarea
              id="detail"
              name="detail"
              value={formData.detail}
              onChange={handleInputChange}
              rows={5}
              className="mt-1 block w-full rounded-md border-gray-300 p-2"
              placeholder="Type in the detail of the announcement here..."
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-lg bg-[#D32D44] px-6 py-2 text-white"
            >
              Continue
            </button>
          </div>
        </form>

        {/* Toast container */}
        <ToastContainer position="top-right" autoClose={3000} />
      </section>
    </div>
  );
}
