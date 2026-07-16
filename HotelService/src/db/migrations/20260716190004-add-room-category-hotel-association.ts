import { QueryInterface } from 'sequelize';

const migration = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.addConstraint('room_categories', {
      fields: ['hotel_id'],
      type: 'foreign key',
      name: 'room_categories_hotel_id_fkey',
      references: {
        table: 'hotels',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.removeConstraint(
      'room_categories',
      'room_categories_hotel_id_fkey'
    );
  },
};

export = migration;
