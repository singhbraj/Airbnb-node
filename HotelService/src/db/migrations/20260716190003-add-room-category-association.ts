import { QueryInterface } from 'sequelize';

const migration = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.addConstraint('rooms', {
      fields: ['room_category_id'],
      type: 'foreign key',
      name: 'rooms_room_category_id_fkey',
      references: {
        table: 'room_categories',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.removeConstraint('rooms', 'rooms_room_category_id_fkey');
  },
};

export = migration;
