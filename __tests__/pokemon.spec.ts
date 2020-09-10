import {dbConfig} from "../src/dbcofig";

beforeEach( async () => {
    await dbConfig.seed.run();
});

describe("Creates a pokemon", () =>{

});