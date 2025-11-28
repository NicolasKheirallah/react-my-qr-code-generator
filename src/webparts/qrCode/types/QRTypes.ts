export enum QRContentType {
  URL = 'url',
  Text = 'text',
  WiFi = 'wifi',
  VCard = 'vcard',
  Email = 'email',
  SMS = 'sms',
  Phone = 'phone',
  CurrentPage = 'currentPage'
}

export interface IWiFiData {
  ssid: string;
  password: string;
  encryption: 'WPA' | 'WEP' | 'nopass';
  hidden: boolean;
}

export interface IVCardData {
  firstName: string;
  lastName: string;
  organization: string;
  title: string;
  phone: string;
  email: string;
  website: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
}

export interface IEmailData {
  to: string;
  subject: string;
  body: string;
}

export interface ISMSData {
  phone: string;
  message: string;
}

export interface IPhoneData {
  phone: string;
}

export interface IQRHistory {
  id: string;
  type: QRContentType;
  content: string;
  timestamp: Date;
  name: string;
}

export interface IQRTemplate {
  id: string;
  name: string;
  icon: string;
  type: QRContentType;
  description: string;
}
