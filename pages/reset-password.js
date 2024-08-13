import ResetPasswordApi from '@/api/auth/ResetPasswordApi'
import { Button } from '@/components'
import Alert from '@/components/atoms/Alert'
import Text from '@/components/atoms/Text'
import InputTitle from '@/components/molecules/InputTitle'
import AuthPage from '@/components/pagetemplate/AuthPage'
import Link from 'next/link'
import { useRouter } from "next/router";
import React, { useState } from 'react'
import { AiFillCheckCircle, AiFillWarning, AiOutlineLoading3Quarters } from 'react-icons/ai'
import { IoMdArrowBack } from 'react-icons/io'

const ResetPassword = () => {
  const router = useRouter();
  const { token, email } = router.query;
  const [password, setPassword] = useState("");
  const [isHitApi, setIsHitApi] = useState(false);
  const [isSucces, setIsSucces] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [Message, setMessage] = useState("");
  
  const handleChangePassword = async(e) => {
    e.preventDefault();
    const data = {
      token,
      email,
      password
    }

    setIsHitApi(true)
    const res = await ResetPasswordApi(data)
    setIsHitApi(false)
    
    if(res.status === 1){
      setMessage("Berhasil mengubah password")
      setIsSucces(true)
      setTimeout(() => {
        setIsSucces(false)
      }, 3000);
      router.push("/login");
    } else {
      setIsWrong(true)
      console.log(res);
      setMessage("Terjadi kesalahan")
    }
  };

  return (
    <div className="overflow-hidden">
      <Alert onClose={() => setIsSucces(false)} isOpen={isSucces}>
      <AiFillCheckCircle className='text-green-400 text-xl'/>
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

export default ResetPassword