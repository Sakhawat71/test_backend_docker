import type { Server } from 'http';
import app from './app.js';


async function main() {
    try {
        const server: Server = app.listen(5000, () => {
            console.log(`Server is running on port ${5000}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
    }
}

main().catch(error => {
    console.error('Error in main function:', error);
});
