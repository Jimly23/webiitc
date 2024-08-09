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

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isHitApi, setIsHitApi] = useState(false);
  const [isSucces, setIsSucces] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [Message, setMessage] = useState("Link sudah di kirim, silahkan cek email anda");
  const handleLogin = (e) => {
    e.preventDefault();
    setIsSucces(true)
    setTimeout(() => {
      setIsSucces(false)
    }, 8000);
    router.push("/reset-password")
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
        onSubmit={handleLogin}
        title={"Daftar IITC"}
      >
        <Button
          onClick={() => router.push("/login")}
          additionals={"flex lg:absolute top-8 lg:mb-0 mb-4 items-center"}
          color={"silver"}
          size={"base"}
          type="button"
        >
          <IoMdArrowBack className="text-lg cursor-pointer mr-2" />
          Kembali
        </Button>

        <Text size={"mdtitle"} weight={"bold"}>
          Lupa Password
        </Text>

        <div className="space-y-3 mb-10 mt-5">
          <InputTitle
            type="email"
            title={"Email"}
            value={email}
            required={true}
            placeholder="Masukan email Kamu"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button disabled={isHitApi} color={"gradient2"}>
          {isHitApi ? (
            <AiOutlineLoading3Quarters className="text-white text-xl animate-spin" />
          ) : (
            "Kirim"
          )}
        </Button>
      </AuthPage>
    </div>
  )
}

export default ForgotPassword