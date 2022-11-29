export interface HeaderProps {
  children: React.ReactNode;
}

export interface TextProps {
  children: string;
  variant?: string;
}
export interface HeadingProps {
  children: string;
  variant?: string;
}
export interface ArrowProps {
  children: string;
}
export interface BodyProps {
  children: string;
  hideArrow: boolean;
  onClick: () => void;
}

