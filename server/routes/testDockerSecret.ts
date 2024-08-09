import { readFileSync } from 'fs';
import { defineEventHandler } from 'h3';

// Путь к файлу секрета
const secretPath = '/run/secrets/graphql_url';

// Функция для чтения секрета из файла
const getGraphqlUrl = () => {
    try {
        // Читаем содержимое файла
        const secret = readFileSync(secretPath, 'utf8');
        return secret.trim(); // Удаляем лишние пробелы и переводы строк
    } catch (error) {
        console.error('Error reading secret file:', error);
        return null;
    }
};

export default defineEventHandler((event) => {
    const graphqlUrl = getGraphqlUrl();

    return {
        hello: `graphql_url: ${graphqlUrl}`
    };
});