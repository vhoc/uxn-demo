declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>> | DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
  export default content;
}

declare module "*.png" {
  const value: any;
  export = value;
}

declare module '*.css';