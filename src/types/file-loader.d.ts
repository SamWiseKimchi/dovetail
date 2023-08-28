declare module "*.gif" {
    const url: string;
    export = url;
  }
  
  declare module "*.jpg" {
    const url: string;
    export = url;
  }
  
  declare module "*.png" {
    const url: string;
    export = url;
  }
  
  declare module "*.svg" {
    import { FC, SVGProps } from "react";
    const url: string;
    export = url;
    const ReactComponent: FC<SVGProps<SVGSVGElement>>;
    export { ReactComponent };
  }
  
  declare module "*.md" {
    const text: string;
    export = text;
  }
  
  declare module "*.m4a" {
    const text: string;
    export = text;
  }
  
  declare module "*.mp3" {
    const text: string;
    export = text;
  }
  
  declare module "*.mp4" {
    const text: string;
    export = text;
  }
  
  declare module "*.mov" {
    const text: string;
    export = text;
  }
  
  declare module "*.webp" {
    const text: string;
    export = text;
  }
  
  declare module "*.woff2" {
    const text: string;
    export = text;
  }
  
  declare module "*.webm" {
    const text: string;
    export = text;
  }
  
  declare module "mjml-browser";
  