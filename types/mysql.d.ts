import { Connection } from 'mysql2/promise';

declare module '#app' {
  interface NuxtApp {
    $db: Connection;
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $db: Connection;
  }
}
