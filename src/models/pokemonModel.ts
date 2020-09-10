import {dbConfig} from "../dbcofig";

interface IPokemon {
    name: string;
    pokemonNumber: number;
}

export async function getById(id:number) {
    return dbConfig("pokemon")
        .select("name", "pokemonNumber")
        .where({id});

}

export async function createPokemon(pokemon:IPokemon) {
    const [id] = await dbConfig("pokemon").insert(pokemon).returning("id");
    return getById(id);
}

export async function deletePokemon(id:number) {
    const toBeDeleted = getById(id);
    if(toBeDeleted){
        dbConfig("pokemon").del().where({id});
        return toBeDeleted;
    }
    return null;
}