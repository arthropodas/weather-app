import React, { useEffect, useState } from "react";
import { useStore } from "../../zustand/useStore";
import { FaSearch } from "react-icons/fa";
import current from "../../services/Services";
import Loader from "../../components/loader/Loader";
import { useTranslation } from "react-i18next";
import Chatbot from "../../components/chatbot/Chatbot";
import { Tooltip } from "@mui/material";

function Home() {
  const { weatherDetails, setWeatherDetails, language } = useStore((state) => ({
    weatherDetails: state.weatherDetails,
    setWeatherDetails: state.setWeatherDetails,
    language: state.language,
  }));
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const [searchTerm, setSearchTerm] = useState("kerala");
  const [loading, setLoading] = useState(true);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await current(searchTerm);
      setWeatherDetails(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="mt-10 flex h-screen">

      <div className="mt-10 flex-1/3 w-1/3 bg-white-600 flex justify-center">
        <div className="text-center m-2 items-center gap-4 min-w-[30vw]">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-2 border-gray-300 p-2 rounded-lg w-full"
              placeholder={t("searchCity")}
            />
            <FaSearch
              onClick={handleSearch}
              className="absolute right-3 top-3 text-gray-500 cursor-pointer"
            />
          </div>
          {loading ? (
            <Loader />
          ) : (
            <>
              <div>
                <h1>{t('welcome')}</h1>
                <p className="mt-5 text-2xl">
                  {weatherDetails?.location?.name}
                </p>
              </div>
              <br />
              {weatherDetails?.current?.conditions?.icon}
              <p className="text-7xl">
                <span>{weatherDetails?.current?.temp_c} °C</span>
              </p>
              <div className="flex justify-center">
                <img
                  src={weatherDetails?.current?.condition?.icon}
                  alt="Weather Icon"
                  className="w-44 h-44"
                />
              </div>
              <p className="text-2xl font-light">
                {weatherDetails?.current?.condition?.text}
              </p>
              <div className="flex justify-center">
                <hr className="flex border-t-4 border-gray-500 my-4 w-2/3" />
              </div>
              <p className="">{weatherDetails?.location?.region}</p>
              <p>{t("feelsLike")}: {weatherDetails?.current?.feelslike_c}°C</p>
              <p className="mt-12 font-medium">
                {new Date(weatherDetails?.location?.localtime).toLocaleString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  }
                )}
              </p>
              <p className="mt-10 font-medium text-5xl">
                <span className="text-3xl">
                  {weatherDetails?.location?.region}
                </span>
                <span className="text-5xl"> | </span>
                <span className="mx-2 country-style">
                  {weatherDetails?.location?.country}
                </span>
              </p>
              <div className="text-bottom">
                <p className="mt-12 font-medium">
                {t("lastUpdated")} :{" "}
                  {new Date(
                    weatherDetails?.current?.last_updated
                  ).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="flex-2/3 w-2/3 bg-gray-200">
        <div className="m-14 grid grid-cols-3 gap-20">
          <div className="bg-blue-400 h-44 border-r rounded-3xl text-white">
            <div className="m-6">
              <p className="text-3xl">{t("windSpeed")}:</p>
              <p className="mt-5 text-xl">
                {weatherDetails?.current?.wind_kph} kph
              </p>
            </div>
          </div>
          <div className="bg-blue-400 h-44 border-r rounded-3xl text-white">
            <div className="m-6">
              <p className="text-3xl">{t("humidity")}:</p>
              <p className="mt-5 text-xl">
                {weatherDetails?.current?.humidity} %
              </p>
            </div>
          </div>
          <div className="bg-blue-400 h-44 border-r rounded-3xl text-white">
            <div className="m-6">
              <p className="text-3xl">{t("visibility")}:</p>
              <p className="mt-5 text-xl">
                {weatherDetails?.current?.vis_km} kph
              </p>
            </div>
          </div>
          <div className="bg-blue-400 h-44 border-r rounded-3xl text-white">
            <div className="m-6">
              <p className="text-3xl">{t("uvIndex")} :</p>
              <p className="mt-5 text-xl">{weatherDetails?.current?.uv}</p>
            </div>
          </div>
          <div className="bg-blue-400 h-44 border-r rounded-3xl text-white">
            <div className="m-6">
              <p className="text-3xl">{t("pressure")}:</p>
              <p className="mt-5 text-xl">
                {weatherDetails?.current?.pressure_mb} mb
              </p>
            </div>
          </div>
     
  <Chatbot />

        </div>
      </div>
    </div>
  );
}

export default Home;
