import HeaderTemplate from "./Header"

export interface PageTemplateProps{
    children: React.ReactNode
    className?: string
}

export default function PageTemplate(props: PageTemplateProps){
    return (
        <div className="flex flex-col min-h-screen">
            <HeaderTemplate />
            <main
                className={`
                    flex-1 w-[1200px] mx-auto
                    ${props.className ?? ''} py-10
                `}
            >
                {props.children}
            </main>

        </div>
    )

}