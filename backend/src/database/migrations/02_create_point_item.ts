import Knex from "knex";

export async function up(knex:Knex) {
    return knex.schema.createTable('place_items', table => {
        table.increments('id').primary();

        table.integer('place_id').notNullable()
        .references('id')
        .inTable('points')

        table.integer('item_id').notNullable()
        .references('id')
        .inTable('items')
    })
}

export async function down(knexs:Knex) {
    return knexs.schema.dropTable('place_items');
}