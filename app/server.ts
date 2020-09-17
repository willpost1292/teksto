import {Express, Request, Response, static as staticMiddleware} from "express";

const CLIENT_BUILD_PATH = './build/frontend';

export class Server {

    private app: Express;

    constructor(app: Express) {
        this.app = app;

        app.use(staticMiddleware(CLIENT_BUILD_PATH));

        this.app.get("/api", (req: Request, res: Response): void => {
            res.send("You have reached the API!");
        });

        this.app.get("*", (req: Request, res: Response): void => {
            res.sendFile(CLIENT_BUILD_PATH + '/index.html');
        });
    }

    public start(port: number): void {
        this.app.listen(port, () => console.log(`Server listening on port ${port}!`));
    }

}
