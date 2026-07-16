import { QueryInterface } from 'sequelize';

const now = new Date();

const seeder = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('hotels', [
      {
        name: 'Grand Palace Hotel',
        address: '123 Marine Drive',
        location: 'Mumbai',
        rating: 4.5,
        rating_count: 120,
        created_at: now,
        updated_at: now,
      },
      {
        name: 'Beach View Resort',
        address: '456 Calangute Beach Road',
        location: 'Goa',
        rating: 4.2,
        rating_count: 85,
        created_at: now,
        updated_at: now,
      },
      {
        name: 'City Center Inn',
        address: '789 Connaught Place',
        location: 'Delhi',
        rating: 4.0,
        rating_count: 60,
        created_at: now,
        updated_at: now,
      },
    ]);

    await queryInterface.bulkInsert('room_categories', [
      { hotel_id: 1, name: 'Standard', created_at: now, updated_at: now },
      { hotel_id: 1, name: 'Deluxe', created_at: now, updated_at: now },
      { hotel_id: 1, name: 'Suite', created_at: now, updated_at: now },
      { hotel_id: 2, name: 'Standard', created_at: now, updated_at: now },
      { hotel_id: 2, name: 'Deluxe', created_at: now, updated_at: now },
      { hotel_id: 3, name: 'Standard', created_at: now, updated_at: now },
      { hotel_id: 3, name: 'Deluxe', created_at: now, updated_at: now },
      { hotel_id: 3, name: 'Suite', created_at: now, updated_at: now },
    ]);

    const availabilityDates = [
      new Date('2026-07-20'),
      new Date('2026-07-21'),
      new Date('2026-07-22'),
    ];

    const roomTemplates = [
      { hotel_id: 1, room_category_id: 1, price: 3000 },
      { hotel_id: 1, room_category_id: 2, price: 5000 },
      { hotel_id: 1, room_category_id: 3, price: 8000 },
      { hotel_id: 2, room_category_id: 4, price: 2500 },
      { hotel_id: 2, room_category_id: 5, price: 4500 },
      { hotel_id: 3, room_category_id: 6, price: 3500 },
      { hotel_id: 3, room_category_id: 7, price: 5500 },
      { hotel_id: 3, room_category_id: 8, price: 7500 },
    ];

    const rooms: Array<{
      hotel_id: number;
      room_category_id: number;
      date_of_availability: Date;
      price: number;
      booking_id: null;
      created_at: Date;
      updated_at: Date;
    }> = [];

    for (const date of availabilityDates) {
      for (const room of roomTemplates) {
        rooms.push({
          hotel_id: room.hotel_id,
          room_category_id: room.room_category_id,
          date_of_availability: date,
          price: room.price,
          booking_id: null,
          created_at: now,
          updated_at: now,
        });
      }
    }

    await queryInterface.bulkInsert('rooms', rooms);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('rooms', {});
    await queryInterface.bulkDelete('room_categories', {});
    await queryInterface.bulkDelete('hotels', {});
  },
};

export = seeder;
