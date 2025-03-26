import Technology from "@/models/enums/technologies";

export interface IProps{
    technology?: Technology;
    header: string;
    description: string;
    isOnFocus: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}
