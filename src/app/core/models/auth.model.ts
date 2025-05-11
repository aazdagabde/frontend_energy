// Auth
export interface LoginDto      { username: string; password: string; }
export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  tokenType:    string;
}
export interface RegisterDto {
  username:  string;
  password:  string;
  email:     string;
  nom:       string;
  prenom:    string;
  telephone: string;
}
// Refresh
export interface RefreshDto   { refreshToken: string; }
export interface RefreshResponse extends LoginResponse {}
// Room & Sensor
export interface Room {
  id:      string;
  name:    string;
  sensors: Sensor[];
}
export interface Sensor {
  id:          string;
  type:        string;
  ref:         string;
  installedAt: string;
}
// Measurement ingestion
export interface IngestDto {
  sensorRef: string;
  value:     number;
  unit:      string;
}
// Measurement web
export interface Measurement {
  id?:        string;
  sensorRef:  string;
  value:      number;
  unit:       string;
  takenAt?:   string;
}
