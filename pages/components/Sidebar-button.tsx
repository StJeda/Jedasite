import sass from '/styles/mainpage.module.scss'

const SidebarButton: React.FC<{ children: React.ReactNode; className?: string; }> = ({ children, className = "" }) => {
    return(
        <div className={className}>
            {children}
        </div>
    )
}

export default SidebarButton;
