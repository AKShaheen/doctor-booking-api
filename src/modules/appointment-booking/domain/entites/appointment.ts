export class Appointment {
  constructor(
    public id: string,
    public slotId: string,
    public patientId: string,
    public patientName: string,
    public reservedAt: Date
  ) {}
}
