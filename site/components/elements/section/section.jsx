const Section = ({children}) => {
    return(
        <>
        <div className={"flex flex-col items-center py-16 xl:w-96 w-full bg-gray-100 shadow-2xl rounded-3xl"}>
            {children}
        </div>
        </>
    )
}

export {Section}