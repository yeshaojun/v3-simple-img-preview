export interface ImageConfig {
  urls: string[];
  current: number;
  loop?: boolean;
  header?: any;
  success?: (status: string) => void;
  fail?: (status: string) => void;
}
