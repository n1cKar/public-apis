// types.ts
export interface ApiParameter {
  name: string;
  type?: string;
  required?: boolean;
  description?: string;
}

export interface ApiItem {
  name: string;
  endpoint: string;
  method: string;
  description: string;
  parameters: ApiParameter[];
  example_request: string;
  example_response: any | null;
}

export interface ApiData {
  apis: ApiItem[];
}
