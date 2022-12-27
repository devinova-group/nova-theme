export interface DialogProps {
  children: React.ReactNode;
}
export interface HeaderProps {
  children: React.ReactNode;
  error?: boolean;
}
export interface BodyProps {
  children: React.ReactNode;
}
export interface FooterProps {
  onClick: () => void;
  error?: boolean;
}
