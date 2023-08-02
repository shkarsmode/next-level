export interface ICustomBreakpoints {
	readonly Handset: string;
	readonly Tablet: string;
	readonly Web: string;
	readonly Small: string;
	readonly Medium: string;
	readonly Large: string;
	readonly XLarge: string;
}

export enum CustomBreakpointsEnum {
	Handset = '(max-width: 599px)',
    Tablet = '(min-width: 600px) and (max-width: 959px)',
    Web = '(min-width: 960px)',
    Small = '(min-width: 961px) and (max-width: 959px)',
    Medium = '(min-width: 961px) and (max-width: 1279px)',
    Large = '(min-width: 1280px) and (max-width: 1919px)',
    XLarge = '(min-width: 1920px)'
}

export type CustomBreakpoints = 
	"Handset" | "Tablet" | "Web" | "Small" | "Medium" | "Large" | "XLarge";
