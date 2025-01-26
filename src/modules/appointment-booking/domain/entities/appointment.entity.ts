export class Appointment {
  constructor(
    public readonly slotId: string,
    public readonly patientId: string,
    public readonly patientName: string,
    public readonly appointmentTime: Date,
    public readonly reservedAt: Date = new Date(),
    public readonly status: string = 'scheduled'
  ) {}

  validate(): void {
    if (!this.slotId) {
      throw new Error('Slot ID is required');
    }
    if (!this.patientId) {
      throw new Error('Patient ID is required');
    }
    if (!this.patientName) {
      throw new Error('Patient name is required');
    }
  }
}
