import React, { useState, useEffect } from "react";
import GetAllCategoryApi from "@/api/admin/categories/GetAll";
import CreateCompetitionApi from "@/api/admin/competition/Create";

import {
  AiOutlineCheckCircle,
  AiOutlineEdit,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { FiPlus, FiXCircle } from "react-icons/fi";
import { IoIosStats } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import Alert from "@/components/atoms/Alert";
import DashboardAdminTemplate from "@/components/pagetemplate/DashboardAdmin";
import DashboardCard from "@/components/atoms/DashboardCard";
import InputTitle from "@/components/molecules/InputTitle";
import PromptStyle from "@/components/organisms/admin/PromptStyle";
import DynamicInput from "@/components/organisms/admin/DynamicInput";
import FileInput from "@/components/atoms/FilePond";
import { Button } from "@/components";

const AddCompetition = () => {
  const [categories, setCategories] = useState([]);
  const [competitionData, setCompetitionData] = useState({
    cover: null,
    name: "",
    price: "",
    deadline: "",
    guideBookLink: "",
    maxMembers: "",
    description: "",
    categories: [],
    isIndividu: false,
    techStack: [],
    criteria: [],
  });

  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({
    message: "",
    isSuccess: false,
    isVisible: false,
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await GetAllCategoryApi();
        setCategories(res?.data?.categories || []);
      } catch (error) {
        console.error("Failed to load categories", error);
      }
    };
    fetchCategories();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompetitionData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e, id) => {
    if (!id) return; // Add this check

    const { checked } = e.target;
    setCompetitionData((prev) => ({
      ...prev,
      categories: checked
        ? [...prev.categories, id]
        : prev.categories.filter((categoryId) => categoryId !== id),
    }));
  };

  const handleClickIndividu = (e) => {
    const isChecked = e.target.checked;
    setCompetitionData((prev) => ({
      ...prev,
      isIndividu: isChecked,
      maxMembers: isChecked ? "1" : "",
    }));
  };

  // valid url
  const isValidURL = (url) => {
    const pattern = /^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$/i;
    return pattern.test(url);
  };
  const handleSubmit = async () => {
    const parsedPrice = parseFloat(competitionData.price);
    const isValidPrice = !isNaN(parsedPrice);
    const isValidguideBookLinkLink = isValidURL(competitionData.guideBookLink);

    if (!isValidPrice) {
      setAlert({
        message: "Harga harus berupa angka.",
        isSuccess: false,
        isVisible: true,
      });
      return;
    }

    if (!isValidguideBookLinkLink) {
      setAlert({
        message: "Format guide book link tidak valid.",
        isSuccess: false,
        isVisible: true,
      });
      return;
    }

    setIsLoading(true);
    try {
      const res = await CreateCompetitionApi({
        ...competitionData,
        price: parsedPrice,
        isIndividu: competitionData.isIndividu ? 1 : 0,
        maxMembers: parseInt(competitionData.maxMembers),
      });

      setAlert({
        message: res.message,
        isSuccess: res.status === 1,
        isVisible: true,
      });

      if (res.status === 1) {
        setCompetitionData({
          cover: null,
          name: "",
          price: "",
          deadline: "",
          guideBookLink: "",
          maxMembers: "",
          description: "",
          categories: [],
          isIndividu: false,
          techStack: [],
          criteria: [],
        });
      }
    } catch (error) {
      setAlert({
        message:
          error.response?.data?.message ||
          "Terjadi kesalahan saat membuat kompetisi",
        isSuccess: false,
        isVisible: true,
      });
    } finally {
      setIsLoading(false);
    }
  };
  console.log(competitionData);
  return (
    <div className="overflow-hidden">
      <Alert
        isOpen={alert.isVisible}
        onClose={() => setAlert({ ...alert, isVisible: false })}
        className={alert.isSuccess ? "text-green-400" : "text-red"}
      >
        {alert.isSuccess ? (
          <AiOutlineCheckCircle className="text-xl text-green-500" />
        ) : (
          <FiXCircle className="text-xl text-rose-500" />
        )}
        <p>{alert.message}</p>
      </Alert>
      <DashboardAdminTemplate>
        <DashboardCard>
          <ul className="flex items-center gap-2">
            <BiHomeAlt className="text-gray-400" />
            <MdArrowForwardIos className="text-xs text-gray-400" />
            <p className="text-blue-600 text-sm">Lomba</p>
            <MdArrowForwardIos className="text-xs text-gray-400" />
            <p className="text-blue-600 text-sm">Buat</p>
          </ul>
          <div className="flex justify-between items-center mt-2">
            <h1 className="text-2xl font-semibold">Buat Lomba</h1>
            <Button
              onClick={handleSubmit}
              isSquare
              color="blue"
              additionals="flex items-center gap-2"
            >
              {isLoading ? (
                <AiOutlineLoading3Quarters className="text-white animate-spin" />
              ) : (
                "Publish"
              )}
            </Button>
          </div>
        </DashboardCard>
        <div className="flex justify-center items-start w-11/12 mx-auto lg:space-x-3 lg:flex-row flex-col">
          <DashboardCard className="w-full space-y-3 flex flex-col">
            <div className="p-1 bg-slate-200 rounded-md w-fit">
              <AiOutlineEdit className="text-xl" />
            </div>
            <InputTitle
              value={competitionData.name}
              onChange={handleInputChange}
              name="name"
              required
              placeholder="Nama lomba"
              title="Nama Lomba"
            />
            <div className="text-dark">
              <p>Pilih kategori lomba</p>
              <ul className="flex w-full flex-wrap gap-4 mt-1">
                {categories.map((category, index) => (
                  <li key={index}>
                    <label className="flex space-x-1">
                      <input
                        type="checkbox"
                        onChange={(e) => handleCheckboxChange(e, category.id)}
                      />
                      <p>{category.name}</p>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <InputTitle
              type="number"
              value={competitionData.price}
              onChange={handleInputChange}
              name="price"
              required
              placeholder="Harga lomba"
              title="HTM"
            />
            <InputTitle
              value={competitionData.maxMembers}
              onChange={handleInputChange}
              name="maxMembers"
              required
              disabled={competitionData.isIndividu}
              placeholder="Masukan jumlah anggota"
              title="Total Anggota Per Tim"
            />
            <label className="flex text-xs text-dark space-x-2">
              <p>Lomba bersifat individu</p>
              <input
                type="checkbox"
                checked={competitionData.isIndividu}
                onChange={handleClickIndividu}
              />
            </label>
            <label className="text-dark">
              <p>Deadline</p>
              <input
                value={competitionData.deadline}
                onChange={handleInputChange}
                name="deadline"
                type="date"
                className="w-full px-4 py-2 border rounded-md mt-1 focus:ring-0 focus:outline-none"
                placeholder="Tanggal"
              />
            </label>
            <label className="text-dark">
              <p className="mb-1">Tech Stack</p>
              <PromptStyle
                keywords={competitionData.techStack}
                setKeywords={(techStack) =>
                  setCompetitionData((prev) => ({ ...prev, techStack }))
                }
              />
            </label>
            <label className="text-dark">
              <p className="mb-1">Deskripsi</p>
              <textarea
                value={competitionData.description}
                onChange={handleInputChange}
                name="description"
                required
                placeholder="Masukan Deskripsi"
                className="border focus:outline-none rounded-md w-full  px-4 py-2"
              ></textarea>
            </label>
            <InputTitle
              value={competitionData.guideBookLink}
              onChange={handleInputChange}
              name="guideBookLink"
              type="url"
              placeholder="Masukan link guideBookLink"
              title="guideBookLink"
            />
          </DashboardCard>
          <div className="w-11/12 mx-auto">
            <p>Cover</p>
            <FileInput
              image={competitionData.cover}
              setImage={(cover) =>
                setCompetitionData((prev) => ({ ...prev, cover }))
              }
            />
            <DashboardCard className="w-full">
              <div className="p-1 bg-slate-200 rounded-md w-fit">
                <IoIosStats className="text-xl" />
              </div>
              <DynamicInput
                array={competitionData.criteria}
                setArray={(criteria) =>
                  setCompetitionData((prev) => ({ ...prev, criteria }))
                }
              />
            </DashboardCard>
          </div>
        </div>
      </DashboardAdminTemplate>
    </div>
  );
};

export default AddCompetition;
