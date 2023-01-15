const Section = ({children}) => {
    return (
        <>
            <div className={"flex flex-col items-center py-16 shadow-2xl rounded-3xl"}>
                {children}
            </div>
        </>
    )
}

export {Section}