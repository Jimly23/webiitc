import DeleteCompetitionApi from "@/api/admin/competition/Delete";
import GetCompetitionsApi from "@/api/homepage/GetCompetitionsApi";
import { Button } from "@/components";
import CompetitonCard from "@/components/atoms/CompetitonCard";
import DashboardCard from "@/components/atoms/DashboardCard";
import Modals from "@/components/organisms/admin/Modals";
import DashboardAdminTemplate from "@/components/pagetemplate/DashboardAdmin";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { MdArrowForwardIos } from "react-icons/md";
const AdminLomba = ({ competitions }) => {
  const [isDelete, setIsDelete] = useState(false);
  const [slug, setSlug] = useState("");
  const [isHitApi, setIsHitApi] = useState(false);
  const router = useRouter();
  const handleDeleteCompetition = (slug) => {
    setSlug(slug);
    setIsDelete(true);
  };
  const onDelete = (e) => {
    e.preventDefault();
    DeleteCompetitionApi({ slug }).then((res) => {
      //console.log(res);
      if (res.status == 1) {
        setIsDelete(false);
        router.reload();
      } else return;
    });
  };
  const handleEdit = ({ slug }) => {
    router.push(`/admin/competition/edit?cmpt=${slug}`);
  };
  return (
    <>
      <PopupDelete
        isModal={isDelete}
        setIsModal={setIsDelete}
        onDelete={onDelete}
      />
      <DashboardAdminTemplate title={"Lomba"}>
        <DashboardCard>
          <ul className="flex items-center gap-2">
            <p>
              <BiHomeAlt className="text-gray-400" />
            </p>
            <p>
              <MdArrowForwardIos className="text-xs text-gray-400" />
            </p>
            <p className="text-blue-600 text-sm">Lomba</p>
          </ul>
          <div className="flex justify-between items-center mt-2">
            <h1 className="text-2xl fomt-semibold">Lomba</h1>
            <Link href={"/admin/competition/add"}>
              <Button
                isSquare
                color={"blue"}
                additionals={"flex items-center gap-2"}
              >
                <FiPlus className="text-white" />
                <p>Buat Lomba</p>
              </Button>
            </Link>
          </div>
          <ol className="rounded-xl w-full mt-12 flex flex-wrap gap-3">
            {competitions?.map((competition, index) => (
              <CompetitonCard
                isAdmin={true}
                onDelete={() => handleDeleteCompetition(competition?.slug)}
                key={index}
                category={competition?.categories}
                imgSrc={competition?.cover}
                maxMembers={competition?.maxMembers}
                title={competition?.name}
                slug={competition?.slug}
                handleCLickButton={() =>
                  handleEdit({ slug: competition?.slug })
                }
              />
            ))}
          </ol>
        </DashboardCard>
      </DashboardAdminTemplate>
    </>
  );
};

export default AdminLomba;

export async function getServerSideProps() {
  try {
    const res = await GetCompetitionsApi();
    if (res.status == 1) {
      const competitions = res.data?.competitions;
      return {
        props: {
          competitions,
        },
      };
    } else if (res.status == 0) {
      return {
        props: {
          competitions: [],
        },
      };
    }
  } catch (error) {
    console.error(error);
    return {
      props: {
        competitions: [],
      },
    };
  }
}

const PopupDelete = ({ onDelete, isModal, setIsModal }) => {
  return (
    <Modals onSubmit={onDelete} isModal={isModal}>
      <h1 className="text-xl mb-2">Hapus Lomba</h1>
      <div className="flex items-center space-x-2 mt-4 justify-end">
        <Button
          type="button"
          onClick={() => setIsModal(false)}
          isSquare
          color={"bluelight"}
        >
          Batal
        </Button>
        <Button type="submit" isSquare color={"red"}>
          Hapus
        </Button>
      </div>
    </Modals>
  );
};
