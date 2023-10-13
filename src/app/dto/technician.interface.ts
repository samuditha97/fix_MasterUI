export interface TechnicianDTO {
    id: string;
    name: string;
    mobileNo: string;
    serviceId: string;
    location: string;
    review: {
      message: string;
      date: string;
    }[];
    rate: number;
  }
  