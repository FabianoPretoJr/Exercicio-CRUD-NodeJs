import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('client', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.integer('age').notNullable();
        table.string('numberPhone').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('client');
}