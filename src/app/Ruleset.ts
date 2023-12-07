export interface Ruleset {
  id: number;
  name: string;
  creation_date: number | string;
  rules: { 
    id: number; 
    priority: number; 
    event_type: string; 
    conditions: {
      id: number, 
      fact_type: string, 
      value_type: string
    }[] 
  }[];
}
