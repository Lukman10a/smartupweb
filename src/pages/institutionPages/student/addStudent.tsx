import Header from "@/components/header";
import Image from "next/image";
import React, { useState } from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import photo from "@../../../public/assets/photo.svg";
import birth from "@../../../public/assets/birth.svg";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SelectInput from "@/components/institutionComponents/selectInput";

const schema = yup.object().shape({
  firstname: yup.string().required("Firstname is required"),
  lastname: yup.string().required("Lastname is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  dateOfBirth: yup.date().required("Date of birth is required"),
  gender: yup.string().required("Gender is required"),
  className: yup.string().required("Class is required"),
  address: yup.string().required("House address is required"),
  lga: yup.string().required("L.G.A. is required"),
  country: yup.string().required("Country is required"),
  state: yup.string().required("State is required"),
  accessCode: yup.string().required("Access code is required"),
  primaryGuardianName: yup
    .string()
    .required("Primary guardian's name is required"),
  secondaryGuardianName: yup.string(),
  primaryGuardianNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Primary guardian's number is required"),
  secondaryGuardianNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
});

export default function AddStudent() {
  const genderOptions = ["Male", "Female", "Other"];
  const classOptions = ["Class 1", "Class 2", "Class 3"];
  const lgaOptions = ["LGA 1", "LGA 2", "LGA 3"];
  const countryOptions = ["Country 1", "Country 2", "Country 3"];
  const stateOptions = ["State 1", "State 2", "State 3"];

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IoChevronBackCircleOutline size={35} />
          <p className="font-dm_sans text-2xl font-medium">Add Student</p>
        </div>
        <button className="rounded-md bg-[#D32D441A] p-2 px-4 text-[#D32D44]">
          Cancel
        </button>
      </div>

      <article>
        <div className="rounded-md bg-white p-4">
          <p className="py-4">
            Please fill in the following information appropriately to add a new
            student.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Personal details */}
            <div className="space-y-4 rounded-md bg-[#F8F9FB] p-6">
              <p className="text-2xl font-medium text-[#D32D44]">
                Personal details
              </p>
              <p>Photo:</p>
              <div className="flex items-center gap-2">
                <Image src={photo} alt="photo" />
                <div className="space-y-1">
                  <button className="rounded-md bg-[#D32D441A] p-2 px-4 text-[#D32D44]">
                    Upload Photo
                  </button>
                  <p>Upload a clear photo of the student</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p>Firstname</p>
                  <input
                    type="text"
                    placeholder="Enter firstname"
                    className="w-[435px] rounded-md p-2 px-4"
                    {...register("firstname")}
                  />
                  {errors.firstname && (
                    <p className="text-red-500">{errors.firstname.message}</p>
                  )}
                </div>
                <div>
                  <p>Lastname</p>
                  <input
                    type="text"
                    placeholder="Enter Lastname"
                    className="w-[435px] rounded-md p-2 px-4"
                    {...register("lastname")}
                  />
                  {errors.lastname && (
                    <p className="text-red-500">{errors.lastname.message}</p>
                  )}
                </div>
                <div>
                  <p>Phone number</p>
                  <input
                    type="text"
                    placeholder="Enter Phone number"
                    className="w-[435px] rounded-md p-2 px-4"
                    {...register("phoneNumber")}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500">{errors.phoneNumber.message}</p>
                  )}
                </div>
                <div>
                  <p>Email address</p>
                  <input
                    type="text"
                    placeholder="Enter Email address"
                    className="w-[435px] rounded-md p-2 px-4"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div className="relative">
                  <p>Date of Birth</p>
                  <input
                    type="date"
                    placeholder="Enter Date of Birth"
                    className="w-[435px] rounded-md p-2 px-4"
                    {...register("dateOfBirth")}
                  />
                  <Image
                    src={birth}
                    alt="birth"
                    className="absolute right-2 top-8 cursor-pointer"
                  />
                  {errors.dateOfBirth && (
                    <p className="text-red-500">{errors.dateOfBirth.message}</p>
                  )}
                </div>

                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <SelectInput
                      label="Gender"
                      options={genderOptions}
                      selected={field.value}
                      onSelect={field.onChange}
                    />
                  )}
                />
                {errors.gender && (
                  <p className="text-red-500">{errors.gender.message}</p>
                )}

                <Controller
                  name="className"
                  control={control}
                  render={({ field }) => (
                    <SelectInput
                      label="Class"
                      options={classOptions}
                      selected={field.value}
                      onSelect={field.onChange}
                    />
                  )}
                />
                {errors.className && (
                  <p className="text-red-500">{errors.className.message}</p>
                )}

                <div>
                  <p>Access code</p>
                  <input
                    type="text"
                    placeholder="Access code will be generated"
                    className="w-[435px] rounded-md p-2 px-4"
                    {...register("accessCode")}
                  />
                  {errors.accessCode && (
                    <p className="text-red-500">{errors.accessCode.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Address details */}
            <div className="space-y-4 rounded-md bg-[#F8F9FB] p-6">
              <p className="text-2xl font-medium text-[#D32D44]">
                Address details
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p>House address</p>
                  <input
                    type="text"
                    placeholder="Enter house address"
                    className="w-[435px] rounded-md p-2 px-4"
                    {...register("address")}
                  />
                  {errors.address && (
                    <p className="text-red-500">{errors.address.message}</p>
                  )}
                </div>

                <Controller
                  name="lga"
                  control={control}
                  render={({ field }) => (
                    <SelectInput
                      label="L.G.A."
                      options={lgaOptions}
                      selected={field.value}
                      onSelect={field.onChange}
                    />
                  )}
                />
                {errors.lga && (
                  <p className="text-red-500">{errors.lga.message}</p>
                )}

                <Controller
                  name="country"
                  control={control}
                  render={({ field }) => (
                    <SelectInput
                      label="Country"
                      options={countryOptions}
                      selected={field.value}
                      onSelect={field.onChange}
                    />
                  )}
                />
                {errors.country && (
                  <p className="text-red-500">{errors.country.message}</p>
                )}

                <Controller
                  name="state"
                  control={control}
                  render={({ field }) => (
                    <SelectInput
                      label="State"
                      options={stateOptions}
                      selected={field.value}
                      onSelect={field.onChange}
                    />
                  )}
                />
                {errors.state && (
                  <p className="text-red-500">{errors.state.message}</p>
                )}
              </div>
            </div>

            {/* Guardian details */}
            <div className="space-y-4 rounded-md bg-[#F8F9FB] p-6">
              <p className="text-2xl font-medium text-[#D32D44]">
                Guardian details
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p>Primary guardian’s name</p>
                  <input
                    type="text"
                    placeholder="Enter primary guardian’s name"
                    className="w-[435px] rounded-md p-2 px-4"
                    {...register("primaryGuardianName")}
                  />
                  {errors.primaryGuardianName && (
                    <p className="text-red-500">
                      {errors.primaryGuardianName.message}
                    </p>
                  )}
                </div>

                <div>
                  <p>Secondary guardian’s name</p>
                  <input
                    type="text"
                    placeholder="Enter secondary guardian’s name"
                    className="w-[435px] rounded-md p-2 px-4"
                    {...register("secondaryGuardianName")}
                  />
                  {errors.secondaryGuardianName && (
                    <p className="text-red-500">
                      {errors.secondaryGuardianName.message}
                    </p>
                  )}
                </div>

                <div>
                  <p>Primary guardian’s number</p>
                  <input
                    type="text"
                    placeholder="Enter primary guardian’s number"
                    className="w-[435px] rounded-md p-2 px-4"
                    {...register("primaryGuardianNumber")}
                  />
                  {errors.primaryGuardianNumber && (
                    <p className="text-red-500">
                      {errors.primaryGuardianNumber.message}
                    </p>
                  )}
                </div>

                <div>
                  <p>Secondary guardian’s number</p>
                  <input
                    type="text"
                    placeholder="Enter secondary guardian’s number"
                    className="w-[435px] rounded-md p-2 px-4"
                    {...register("secondaryGuardianNumber")}
                  />
                  {errors.secondaryGuardianNumber && (
                    <p className="text-red-500">
                      {errors.secondaryGuardianNumber.message}
                    </p>
                  )}
                </div>

                <div className="col-span-2 flex justify-end">
                  <button
                    type="submit"
                    className="rounded-md bg-[#D32D44] p-2 px-[188px] text-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
}
