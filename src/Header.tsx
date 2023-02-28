interface HeaderProps {
    title: string;
    className?: string;
}

export const Header: React.FunctionComponent<HeaderProps> = (props) => {
    return <div className={"header " + (props.className ?? "")}>
        {props.title}
    </div>;
};