export interface Entity {
  "@context": "http://purl.imsglobal.org/ctx/caliper/v1p2";
  id: string;
  type: string;
  name?: string;
  description?: string;
  dateCreated?: string;
  dateModified?: string;
}
