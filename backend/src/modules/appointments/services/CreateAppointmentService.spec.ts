import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';
import AppError from '@shared/errors/AppError';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(fakeAppointmentsRepository);

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '13254656879',
    });
    expect(appointment).toHaveProperty('id');
  });

  it('should not be able to create two appointments at the same time', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(fakeAppointmentsRepository);

    const AppointmentDate = new Date(2020, 4, 10, 11);

    await createAppointment.execute({
      date: AppointmentDate,
      provider_id: '13254656879',
    });

    expect(createAppointment.execute({
      date: AppointmentDate,
      provider_id: '13254656879',
    }),
    ).rejects.toBeInstanceOf(AppError);
  });
});



