import General from "./general";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic"

export default function Index() {
    return (
        <>
            <General/>
        </>
    )
}

const getStaticProps = makeStaticProps(["general", "layout"])
export { getStaticPaths, getStaticProps }