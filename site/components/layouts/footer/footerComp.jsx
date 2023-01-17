import {Fab} from "@mui/material";
import {GrUpgrade} from "react-icons/gr";

const FooterComp = ({children}) => {
    return (
        <>
            {children}
            <footer>
                <Fab className={"z-40 fixed bottom-16 right-10 bg-blue-500 hover:bg-blue-600 w-12 h-12"} onClick={e => (window.scroll(0, 0))}>
                    <GrUpgrade className={"w-7 h-7"}/>
                </Fab>
            </footer>
        </>
    )
}

export {FooterComp}