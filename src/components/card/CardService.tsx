import { ICardService } from "@/models/CardService";

export default function CardService(props: ICardService) {
    return <>
        <div className="flex flex-col rounded-xl drop-shadow-md bg-white w-100 px-10 py-10">
            <span className="text-center mb-3">
                {props.icon}
            </span>
            <p className="text-center font-semibold text-gray-600 mb-3">
                {props.title}
            </p>
            <p className="text-center text-xs text-gray-500 leading-normal">
                {props.description}
            </p>
        </div>
    </>
}