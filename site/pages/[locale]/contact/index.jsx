import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic"

export default function Contact() {
    return (
        <>
            <h2>Contact</h2>
        </>
    )
}

const getStaticProps = makeStaticProps(["layout"])
export { getStaticPaths, getStaticProps }