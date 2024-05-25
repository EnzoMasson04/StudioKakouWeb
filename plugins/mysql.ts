import { defineNuxtPlugin } from '#app';
import mysql, { Connection } from 'mysql2/promise';

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig();

  const connection: Connection = await mysql.createConnection({
    host: config.dbHost,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
  });

  nuxtApp.provide('db', connection);
});
