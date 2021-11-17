exports.up = async function up(sql) {
  await sql`
    CREATE TABLE ratings (
      id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
      ratings integer UNIQUE NOT NULL ,
      user_id integer REFERENCES users(id) ON DELETE CASCADE,
			restaurant_id integer REFERENCES restaurants(id) ON DELETE CASCADE,
      UNIQUE (user_id, restaurant_id)

    )
  `;
};
// Drop table with ley down

exports.down = async function down(sql) {
  await sql`
    DROP TABLE ratings
  `;
};