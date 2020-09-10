import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("pokemon", tableBuilder => {
        tableBuilder.increments("id");
        tableBuilder.text("name").notNullable().unique();
        tableBuilder.integer("pokemonNumber");
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("pokemon");
}

