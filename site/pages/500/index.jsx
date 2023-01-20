import {HeadingComp} from "../../components/elements/heading/headingComp";
import Link from "next/link";
import {FabComp} from "../../components/elements/fab/fabComp";
import {useRouter} from "next/router";

export default function Custom500() {
    const router = useRouter()

    return (
        <>
            <HeadingComp title={"Server-side error occurred"} description={"Server-side error occurred"}/>
            <h1>500 - Server-side error occurred</h1>
            <div className={"flex flex-col items-center"}>
                <h1 className={"font-bold text-blue-500 text-9xl"}>500</h1>
                <h6 className={"mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"}>
                    <span className={"text-blue-500"}>Oops!</span> Внутренняя ошибка сервера
                </h6>
                <p className={"mb-8 text-center text-gray-500 md:text-lg"}>
                    Произошла ошибка на стороне сервера.
                </p>
                <div className={"flex flex-col space-y-2"}>
                    <Link href={"/"}>
                        <FabComp>
                            Домой
                        </FabComp>
                    </Link>
                    <FabComp onClick={() => router.back()}>
                        Назад
                    </FabComp>
                </div>
            </div>

        </>
    )
}