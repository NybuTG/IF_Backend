import {Application, Router} from "https://deno.land/x/oak/mod.ts";
import * as postgres from "https://deno.land/x/postgres@v0.14.0/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

const databaseUrl = Deno.env.get("DATABASE_URL");
