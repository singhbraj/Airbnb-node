import { QueryInterface } from 'sequelize';

const migration = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.addConstraint('rooms', {
      fields: ['hotel_id'],
      type: 'foreign key',
      name: 'rooms_hotel_id_fkey',
      references: {
        table: 'hotels',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.removeConstraint('rooms', 'rooms_hotel_id_fkey');
  },
};

export = migration;
