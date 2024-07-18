import sql from "better-sqlite3";
const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //throw new Error("OOPS, failed to Fetch data");
  return db.prepare("SELECT * FROM meals").all();
}

export function getData(slug) {
  return db.prepare("SELECT * FROM meals where slug = ?").get(slug);
}
