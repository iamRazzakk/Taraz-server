import mongoose from 'mongoose';
import app from './app';
import config from './config/config';

async function main() {
    try {
        await mongoose.connect(config.URL as string);
        app.listen(config.PORT, () => {
            console.log(`Taraz app listening on port ${config.PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}
main();
