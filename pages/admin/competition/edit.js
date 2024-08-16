import GetAllCategoryApi from "@/api/admin/categories/GetAll";
import EditCompetitionApi from "@/api/admin/competition/Edit";
import GetDetailCompetitionsApi from "@/api/homepage/GetDetailCompetitionApi";
import { Button } from "@/components";
import Alert from "@/components/atoms/Alert";
import DashboardCard from "@/components/atoms/DashboardCard";
import FileInput from "@/components/atoms/FilePond";
import InputTitle from "@/components/molecules/InputTitle";
import DynamicInput from "@/components/organisms/admin/DynamicInput";
import PromptStyle from "@/components/organisms/admin/PromptStyle";
import DashboardAdminTemplate from "@/components/pagetemplate/DashboardAdmin";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineEdit,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { FiXCircle } from "react-icons/fi";
import { IoIosStats } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";

export async function getServerSideProps(context) {
  const { cmpt } = context.query;

  try {
    const [categoriesRes, competitionRes] = await Promise.all([
      GetAllCategoryApi(),
      GetDetailCompetitionsApi({ slug: cmpt }),
    ]);

    const categories =
      categoriesRes?.status === 1 ? categoriesRes.data?.categories || [] : [];
    const competition =
      competitionRes?.status === 1 && competitionRes?.data?.competition
        ? competitionRes.data.competition
        : null;

    return {
      props: {
        categories,
        competition,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        categories: [],
        competition: null,
      },
    };
  }
}

const EditCompetition = ({ categories, competition }) => {
  const router = useRouter();

  const [stacks, setStacks] = useState(competition?.techStacks || []);
  const [juknis, setJuknis] = useState(competition?.criteria || []);
  const [isIndividu, setIsIndividu] = useState(competition?.maxMembers === 1);
  const [cover, setCover] = useState(competition?.cover || null);
  const [name, setName] = useState(competition?.name || "");
  const [htm, setHtm] = useState(competition?.competitionPrice || "");
  const [deadline, setDeadline] = useState(competition?.deadlineDate || "");
  const [guidebook, setGuidebook] = useState(competition?.guideBookLink || "");
  const [maxMembers, setMaxMembers] = useState(
    `${competition?.maxMembers || ""}`
  );
  const [description, setDescription] = useState(
    competition?.description || ""
  );
  const [selectedCategories, setSelectedCategories] = useState(
    competition?.categories?.map((item) => item.id) || []
  );
  const [resCategories, setResCategories] = useState(
    competition?.categories?.map((item) => item.name) || []
  );
  const [isHitApi, setIsHitApi] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [message, setMessage] = useState("");

  const handleAddCategory = (e, id) => {
    if (e) {
      if (!selectedCategories.includes(id)) {
        setSelectedCategories([...selectedCategories, id]);
      }
    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== id)
      );
    }
  };

  const handleEditCompetition = () => {
    setIsHitApi(true);
    const coverSend = typeof cover === "string" ? null : cover;

    EditCompetitionApi({
      slug: router.query.cmpt,
      cover: coverSend,
      name,
      isIndividu: isIndividu ? 1 : 0,
      selectedCategories,
      deadline,
      maxMembers: parseInt(maxMembers),
      price: htm,
      techStack: stacks,
      description,
      guideBookLink: guidebook,
      criteria: juknis,
    }).then((res) => {
      if (res.status === 1) {
        // Reset form states after success
        setCover(null);
        setName("");
        setIsIndividu(false);
        setSelectedCategories([]);
        setDeadline("");
        setMaxMembers("");
        setHtm("");
        setStacks([]);
        setDescription("");
        setGuidebook("");
        setJuknis([]);
        setMessage(res.message);
        setIsHitApi(false);
        setIsSuccess(true);
      } else {
        setIsHitApi(false);
        setMessage(res.message);
        setIsWrong(true);
      }
    });
  };

  const handleClickIndividu = (e) => {
    const isChecked = e.target.checked;
    setIsIndividu(isChecked);
    if (isChecked) {
      setMaxMembers("1");
    } else {
      setMaxMembers("");
    }
  };

  return (
    <div className="overflow-hidden">
      <Alert onClose={() => setIsSuccess(false)} isOpen={isSuccess}>
        <AiOutlineCheckCircle className="text-green-400 text-xl" />
        <p>{message}</p>
      </Alert>
      <Alert onClose={() => setIsWrong(false)} isOpen={isWrong}>
        <FiXCircle className="text-red text-xl" />
        <p>{message}</p>
      </Alert>
      <DashboardAdminTemplate>
        <DashboardCard>
          <ul className="flex items-center gap-2">
            <p>
              <BiHomeAlt className="text-gray-400" />
            </p>
            <p>
              <MdArrowForwardIos className="text-xs text-gray-400" />
            </p>
            <p className="text-blue-600 text-sm">Lomba</p>
            <p>
              <MdArrowForwardIos className="text-xs text-gray-400" />
            </p>
            <p className="text-blue-600 text-sm">Edit</p>
          </ul>
          <div className="flex justify-between items-center mt-2">
            <h1 className="text-2xl font-semibold">Edit Lomba</h1>
            <Button
              onClick={() => handleEditCompetition()}
              isSquare
              color="blue"
              additionals="flex items-center gap-2"
            >
              <p>
                {isHitApi ? (
                  <AiOutlineLoading3Quarters className="text-white animate-spin" />
                ) : (
                  "Publish"
                )}
              </p>
            </Button>
          </div>
        </DashboardCard>
        <div className="flex justify-center items-start w-11/12 mx-auto lg:space-x-3 lg:flex-row flex-col">
          <DashboardCard className="w-full space-y-3 flex flex-col">
            <div className="p-1 bg-slate-200 rounded-md w-fit">
              <AiOutlineEdit className="text-xl" />
            </div>
            <InputTitle
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Nama lomba"
              title="Nama Lomba"
            />
            <div className="text-dark">
              <p>Pilih kategori lomba</p>
              <ul className="flex w-full flex-wrap gap-4 mt-1">
                {categories?.map((category, index) => (
                  <li key={index}>
                    <label className="flex space-x-1">
                      <input
                        defaultChecked={resCategories.includes(category.name)}
                        type="checkbox"
                        onChange={(e) =>
                          handleAddCategory(e.target.checked, category?.id)
                        }
                      />
                      <p>{category?.name}</p>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <InputTitle
              value={htm}
              onChange={(e) => setHtm(e.target.value)}
              required
              placeholder="Harga lomba"
              title="HTM"
            />
            <InputTitle
              value={maxMembers}
              onChange={(e) => setMaxMembers(e.target.value)}
              required
              disabled={isIndividu}
              placeholder="Masukan jumlah anggota"
              title="Total Anggota Per Tim"
            />
            <label className="flex text-xs text-dark space-x-2">
              <p>Lomba bersifat individu</p>
              <input
                type="checkbox"
                checked={isIndividu}
                onChange={(e) => handleClickIndividu(e)}
              />
            </label>
            <label className=" text-dark">
              <p>Deadline</p>
              <input
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                type="date"
                className="w-full px-4 py-2 border rounded-md mt-1 focus:ring-0 focus:outline-none"
                placeholder="Tanggal"
              />
            </label>
            <label className="text-dark">
              <p className="mb-1">Tech Stack</p>
              <PromptStyle keywords={stacks} setKeywords={setStacks} />
            </label>

            <label className="text-dark">
              <p className="mb-1">Deskripsi</p>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                placeholder="Masukan Deskripsi"
                className="border focus:outline-none rounded-md w-full  px-4 py-2"
              ></textarea>
            </label>
            <InputTitle
              value={guidebook}
              onChange={(e) => setGuidebook(e.target.value)}
              required
              placeholder="Masukan link guidebook"
              title="Guidebook"
            />
          </DashboardCard>
          {/* RIGHT */}
          <div className="w-11/12 mx-auto">
            <p>Cover</p>
            <FileInput image={cover} setImage={setCover} />
            <DashboardCard className="w-full">
              <div className="p-1 bg-slate-200 rounded-md w-fit">
                <IoIosStats className="text-xl" />
              </div>
              <DynamicInput array={juknis} setArray={setJuknis} />
            </DashboardCard>
          </div>
        </div>
      </DashboardAdminTemplate>
    </div>
  );
};

export default EditCompetition;
