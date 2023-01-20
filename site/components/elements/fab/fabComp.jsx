import {Fab} from "@mui/material";

const FabComp = ({children, props}) => {
    return (
        <>
            <div className={"flex flex-col"}>
                <Fab color={"primary"}
                     className={"blue-500 hover:blue-600 justify-between normal-case z-10"} variant="extended" size="medium"{...props}>
                    {children}
                </Fab>
            </div>
        </>
    )
}

export {FabComp}