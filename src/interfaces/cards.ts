export interface HeaderProps {
  children: React.ReactNode;
  imageSrc: string;
  heading: string;
}

export interface BodyProps {
  children: React.ReactNode;
}
export interface BodyTextProps {
  children: React.ReactNode;
  toggle?: boolean;
}
export interface ToggleProps {
  toggle?: boolean;
  onClick?: () => void;
}

export interface FooterProps {
  children: React.ReactNode;
  toggle?: boolean;
}
export interface FooterTextProps {
  children: React.ReactNode;
}
