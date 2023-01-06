import {Content} from "../components/layouts/content/content";

export default function Custom500() {
    return (
        <>
            <Content title={"Server-side error occurred"} description={"Server-side error occurred"}>
                <h1>500 - Server-side error occurred</h1>
            </Content>
        </>
    )
}