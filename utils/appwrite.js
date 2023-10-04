import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('651db2ecea7550a260eb'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';