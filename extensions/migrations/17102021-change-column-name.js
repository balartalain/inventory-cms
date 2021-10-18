exports.up = function(knex, Promise) {
    return knex.schema.raw('ALTER TABLE public.directus_users RENAME COLUMN store_id TO store');
  };
exports.down = function(knex, Promise) {
    return knex.schema.raw('ALTER TABLE public.directus_users RENAME COLUMN store TO store_id');
  };