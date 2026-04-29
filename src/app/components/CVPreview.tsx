import { PersonalDetails } from "@/../../type";
import React, { useMemo } from "react";
import Image from "next/image";
import { Mail, MapPinCheckInside, Phone } from "lucide-react";

interface Props {
  personalDetails: PersonalDetails;
  file: File | null;
  theme: string;
}

const ContactInfo: React.FC<{ personalDetails: PersonalDetails }> = ({
  personalDetails,
}) => (
  <div className="mt-4 flex-col w-full">
    <h1 className="uppercase font-bold my-2">Contact</h1>
    <ul className="space-y-2">
      {personalDetails.phone && (
        <li className="flex">
          <div className="break-all text-sm relative">
            <div className="ml-8">{personalDetails.phone}</div>
            <div className="absolute left-0 top-0">
              <Phone className="w-5 text-primary" />
            </div>
          </div>
        </li>
      )}
      {personalDetails.email && (
        <li className="flex">
          <div className="break-all text-sm relative">
            <div className="ml-8">{personalDetails.email}</div>
            <div className="absolute left-0 top-0">
              <Mail className="w-5 text-primary" />
            </div>
          </div>
        </li>
      )}
      {personalDetails.address && (
        <li className="flex">
          <div className="break-all text-sm relative">
            <div className="ml-8">{personalDetails.address}</div>
            <div className="absolute left-0 top-0">
              <MapPinCheckInside className="w-5 text-primary" />
            </div>
          </div>
        </li>
      )}
    </ul>
  </div>
);

const CVPreview: React.FC<Props> = ({ personalDetails, file, theme }) => {
  const imageUrl = useMemo(() => {
    if (!file) return null;
    const url = URL.createObjectURL(file);
    return url;
  }, [file]);

  React.useEffect(() => {
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);

  return (
    <div
      className={`flex p-16 w-[950px] h-[1200px] shadow-lg`}
      data-theme={theme}
    >
      <div className="flex flex-col w-1/3">
        <div className="h-60 w-60 rounded-full border-8 overflow-hidden border-primary">
          {imageUrl ? (
            <Image
              src={imageUrl}
              width={300}
              height={300}
              className="w-full h-full rounded-lg object-cover"
              alt="profile picture"
            />
          ) : personalDetails.photoUrl ? (
            <Image
              src={personalDetails.photoUrl}
              width={300}
              height={300}
              className="w-full h-full rounded-lg object-cover"
              alt="profile picture"
            />
          ) : null}
        </div>
        <ContactInfo personalDetails={personalDetails} />
      </div>

      <div className="w-2/3 ml-8">
        <div className="w-full flex flex-col space-y-4">
          <h1 className="uppercase text-xl">{personalDetails.fullName}</h1>
          {personalDetails.postSeeking && (
            <h2 className="uppercase text-5xl text-primary font-bold">
              {personalDetails.postSeeking}
            </h2>
          )}
          {personalDetails.description && (
            <p className="break-all w-full text-sm">
              {personalDetails.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(CVPreview);
