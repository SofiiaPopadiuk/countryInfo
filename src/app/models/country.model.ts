export interface Country {
  countryCode: string;
  name: string;
}

export interface CountryInfo {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: Border[];
}

export type Border = Omit<CountryInfo, 'borders'> & { borders: null };
