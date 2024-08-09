import { Button } from '@/components'
import Alert from '@/components/atoms/Alert'
import Text from '@/components/atoms/Text'
import InputTitle from '@/components/molecules/InputTitle'
import AuthPage from '@/components/pagetemplate/AuthPage'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AiFillWarning, AiOutlineLoading3Quarters } from 'react-icons/ai'
import { IoMdArrowBack } from 'react-icons/io'

const forgotPassword = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [isHitApi, setIsHitApi] = useState(false);
  const [isSucces, setIsSucces] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [Message, setMessage] = useState("Berhasil ubah password");
  
  const handleChangePassword = (e) => {
    e.preventDefault();
    setIsSucces(true)
    setTimeout(() => {
      setIsSucces(false)
    }, 8000);
    router.push("/login");
  };

  return (
    <div className="overflow-hidden">
      <Alert onClose={() => setIsSucces(false)} isOpen={isSucces}>
        <AiOutlineLoading3Quarters className="text-green-400 text-xl animate-spin" />
        <p>{Message}</p>
      </Alert>
      <Alert onClose={() => setIsWrong(false)} isOpen={isWrong}>
        <AiFillWarning className="text-red text-xl" />
        <p>{Message}</p>
      </Alert>
      <AuthPage
        description={"Daftar IIT Competition dan jadilah juara sejati!"}
        onSubmit={handleChangePassword}
        title={"Daftar IITC"}
      >

        <Text size={"mdtitle"} weight={"bold"}>
          Ubah Password
        </Text>

        <div className="space-y-3 mb-10 mt-5">
          <InputTitle
            type="password"
            title={"Password"}
            value={password}
            required={true}
            placeholder="Masukan password baru"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button disabled={isHitApi} color={"gradient2"}>
          {isHitApi ? (
            <AiOutlineLoading3Quarters className="text-white text-xl animate-spin" />
          ) : (
            "Ubah"
          )}
        </Button>
      </AuthPage>
    </div>
  )
}

export default forgotPassword