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
export interface BodyProps {
  children: string;
  hideArrow: boolean;
  onClick: () => void;
}

export interface FooterProps {
  children: React.ReactNode;


  
}

