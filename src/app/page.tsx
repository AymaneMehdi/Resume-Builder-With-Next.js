"use client";

import { RotateCw } from "lucide-react";
import { useState } from "react";
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import { PersonalDetails } from "@/../../type";
import { personalDetailsPreset } from "@/../../presets";
import CVPreview from "./components/CVPreview";

export default function Home() {
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>(
    personalDetailsPreset,
  );
  const [file, setFile] = useState<File | null>(null);
  const [theme, setTheme] = useState<string>("dark");
  const [zoom, setZoom] = useState<number>(163);

  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];
  const handleResetPersonalDetails = () =>
    setPersonalDetails({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      photoUrl: "",
      postSeeking: "",
      description: "",
    });
  return (
    <div>
      <div className="hidden lg:block">
        <section className="flex items-center h-screen">
          <div className="w-1/3 h-full p-10 bg-base-200 scrollable no-scrollbar">
            <div className="mb-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold italic">
                Resume
                <span className="text-[#00AFB9]">Builder</span>
              </h1>
            </div>
            <div className="flex flex-col gap-6 rounded-lg">
              <div className="flex justify-between items-center">
                <h1 className="badge badge-outline p-4">
                  Profile
                </h1>
                <button
                  className="btn btn-sm"
                  onClick={handleResetPersonalDetails}
                >
                  <RotateCw className="w-4" />
                </button>
              </div>
              <PersonalDetailsForm
                personalDetails={personalDetails}
                setPersonalDetails={setPersonalDetails}
                setFile={setFile}
              />
            </div>
          </div>
          <div className="flex items-center justify-center fixed z-[9999] top-5 right-5">
            <input
              type="range"
              min={50}
              max={200}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="range range-xs"
            />
            <p className="ml-4 text-sm">{zoom}%</p>
          </div>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="select select-bordered fixed z-[9999] select-sm top-12 right-5"
          >
            {themes.map((themeName) => (
              <option key={themeName}>{themeName}</option>
            ))}
          </select>
          <div className="w-2/3 h-full bg-base-100 bg-[url('/file.svg')] bg-cover bg-center scrollable-preview">
            <div
              className="flex justify-center items-center"
              style={{
                transform: `scale(${zoom / 200})`,
              }}
            >
              <CVPreview
                personalDetails={personalDetails}
                file={file}
                theme={theme}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
