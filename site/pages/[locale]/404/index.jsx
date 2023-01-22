import {HeadingComp} from "../../../components/elements/heading/headingComp";
import {FabComp} from "../../../components/elements/fab/fabComp";
import Link from "next/link";
import {useRouter} from "next/router";

export default function Custom404() {
    const router = useRouter()

    return (
        <>
            <HeadingComp title={"Page Not Found"} description={"Page Not Found"}/>
            <div className={"flex flex-col items-center"}>
                <h1 className={"font-bold text-blue-500 text-9xl"}>404</h1>
                <h6 className={"mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"}>
                    <span className={"text-blue-500"}>Oops!</span> Страница не найдена
                </h6>
                <p className={"mb-8 text-center text-gray-500 md:text-lg"}>
                    Страница, которую вы ищете, не существует.
                </p>
                <div className={"flex flex-row gap-10"}>
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