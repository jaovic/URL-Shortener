export interface ICreateUrl {
  url: string;
}

export interface ICreateUrlServiceReturn {
  URL: String;
}
export interface ICreateUrlrService {
  execute(data: ICreateUrl): Promise<ICreateUrlServiceReturn>;
}
