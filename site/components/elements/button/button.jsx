const Button = ({children}) => {
    return (
        <>
            <button className={"shadow-2xl rounded-3xl bg-blue-500"}>
                {children}
            </button>
        </>
    )
}

export {Button}