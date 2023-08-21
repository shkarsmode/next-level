export interface ICustomBreakpoints {
	readonly Handset: string;
	readonly Web: string;
	readonly Small: string;
	readonly Medium: string;
	readonly Large: string;
	readonly XLarge: string;
}

export enum CustomBreakpointsEnum {
	Handset = '(max-width: 725px)',
    Web = '(min-width: 960px)',
    Small = '(min-width: 961px) and (max-width: 959px)',
    Medium = '(min-width: 961px) and (max-width: 1279px)',
    Large = '(min-width: 1280px) and (max-width: 1919px)',
    XLarge = '(min-width: 1920px)'
}

export type CustomBreakpoints = 
	"Handset" | "Web" | "Small" | "Medium" | "Large" | "XLarge";
