import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Gabriel } from "./components/gabriel";

const urlGithubApi = 'https://api.github.com/users'
const range = 6
const initialPage = 1

export function App() {
  const [fetching, setFething] = useState(false);
  const [nickName, setNickName] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [reposUser, setReposUser] = useState([]);
  const [reposSlice, setReposSlice] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(initialPage)
  const toast = useToast();


  const handleChange = (e) => setNickName(e.target.value);

  const getUser = async () => {
    if (nickName.length > 0) {
      const response = await fetch(`${urlGithubApi}/${nickName}`);

      if (response.status === 200) {
        const data = await response.json();
        setUserInfo(data);
      }
      else if (response.status === 404) {
        toast({
          title: `User not found.`,
          status: 'error',
          isClosable: true,
          duration: 3000
        })
      }
    }
  }

  const handleSubmit = async () => {
    setFething(true)
    await getUser()
    setNickName("")
    setPage(initialPage)
    setFething(false)
  }

  const handleEnter = (el) => {
    if (nickName.length > 0) {
      const enter = ['NumpadEnter','Enter']
      if (enter.includes(el.code)) handleSubmit()
    }
  }

  const handlePage = () => {
    if (page < totalPage) setPage((prevState) => prevState + 1)
   }

  useEffect(() => {
    const getRepos = async () => {
      const response = await fetch(userInfo.repos_url)
      if (response.status === 200) {
        const data = await response.json();
        setReposUser(data);
      }

    }
    if (userInfo) getRepos()
  }, [setReposUser, userInfo])

  useEffect(() => {
    const init = (page * range) - range
    const end = init + range

    if (reposUser.length > 0) {
      setTotalPage(Math.ceil(reposUser.length / range))
    }
    if (reposUser.length > 0 ) setReposSlice(reposUser.slice(init, end))
  }, [reposUser, page])

  

  return (
    <Gabriel
      handleChange={handleChange}
      getUser={handleSubmit}
      fetching={fetching}
      userInfo={userInfo}
      nickName={nickName}
      handleEnter={handleEnter}
      reposUser={reposSlice}
      setPage={handlePage}
    />
  )
}

