import mongoose from 'mongoose';
import config from '../config/index.js';
let connectionPromise = null;
export const connectToDatabase = async () => {
    if (mongoose.connection.readyState === 1) {
        return mongoose;
    }
    if (!config.MONGO_URI) {
        throw new Error('MONGO_URI is not set ');
    }
    if (!connectionPromise) {
        connectionPromise = mongoose.connect(config.MONGO_URI);
    }
    return connectionPromise;
};
//# sourceMappingURL=db.js.map