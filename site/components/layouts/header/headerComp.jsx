import {BsFillMoonFill, BsTranslate} from "react-icons/bs";
import {IconButton} from "@mui/material";
import {useRouter} from "next/router";
import {useTheme} from "next-themes";
import {useEffect} from "react";

const HeaderComp = ({children,}) => {
    const {systemTheme, theme, setTheme} = useTheme()

    useEffect(() => {
        setTheme("dark")
    }, [])
    const themeSwitching = () => {
      if(theme === "light"){
          setTheme("dark")
      }
      else {
          setTheme("light")
      }
    }
    
    return (
        <>
            <header>
                <div className={"fixed top-10 right-10 flex flex-row w-28 justify-between z-40"}>
                    <IconButton className={"blue-500 hover:blue-600 w-12 h-12"}>
                        <BsTranslate className={"w-7 h-7"}/>
                    </IconButton>
                    <IconButton className={"blue-500 hover:blue-600 w-12 h-12"} onClick={themeSwitching}>
                        <BsFillMoonFill className={"w-7 h-7"}/>
                    </IconButton>
                </div>
            </header>
            {children}
        </>
    )
}

export {HeaderComp}