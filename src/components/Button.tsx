interface ButtonProps {
    icon : React.ReactNode
    content : string
}

export function Button(props : ButtonProps) {
    return (
        <button type="submit"
                className="group border border-green-500 flex items-center justify-center p-2 mt-5 md:w-[512px] w-[256px] rounded gap-2 text-green-500 hover:bg-green-500 hover:text-white transition-colors"
        >
            {props.icon}
            <span className="w-[1px] bg-green-500 h-5 group-hover:bg-white transition-colors"></span>
            <span className="flex-1">{props.content}</span>
        </button>
    )
}