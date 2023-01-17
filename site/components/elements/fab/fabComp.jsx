import {Fab} from "@mui/material";

const FabComp = ({children, props}) => {
    return (
        <>
            <div className={"flex flex-col"}>
                <Fab variant="extended" size="medium"
                     className={"bg-blue-500 hover:bg-blue-600 justify-between normal-case z-10"} {...props}>
                    {children}
                </Fab>
            </div>
        </>
    )
}

export {FabComp}