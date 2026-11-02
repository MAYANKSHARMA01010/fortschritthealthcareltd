const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");
const env = require("./env.config");

class DatabaseService {
    static instance;

    static async getInstance() {
        if (!this.instance) {
            const adapter = new PrismaPg({ connectionString: env.DATABASE_URL });
            this.instance = new PrismaClient({ adapter });

            try {
                await this.instance.$connect();
                console.log("Database connection established successfully");
            } catch (error) {
                console.error("Failed to connect to database:", error);
                throw error;
            }
        }
        return this.instance;
    }

    static async disconnect() {
        if (this.instance) {
            await this.instance.$disconnect();
            console.log("Database connection closed");
        }
    }
}

module.exports = {
    db: DatabaseService
};