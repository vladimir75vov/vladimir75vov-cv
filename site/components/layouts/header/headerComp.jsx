import {BsFillMoonFill, BsTranslate} from "react-icons/bs";
import {IconButton} from "@mui/material";

const HeaderComp = ({children,}) => {
    return (
        <>
            <header>
                <div className={"fixed top-10 right-10 flex flex-row w-28 justify-between z-40"}>
                    <IconButton className={"bg-blue-500 hover:bg-blue-600 w-12 h-12"}>
                        <BsTranslate className={"w-7 h-7"}/>
                    </IconButton>
                    <IconButton className={"bg-blue-500 hover:bg-blue-600 w-12 h-12"}>
                        <BsFillMoonFill className={"w-7 h-7"}/>
                    </IconButton>
                </div>
            </header>
            {children}
        </>
    )
}

export {HeaderComp}