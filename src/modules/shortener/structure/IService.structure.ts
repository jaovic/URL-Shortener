export interface IFindShortener {
  code: string;
}

export interface IFindUrlServiceReturn {
  URL: String;
}

export interface IFindShortenerService {
  execute(data: IFindShortener): Promise<IFindUrlServiceReturn>;
}
