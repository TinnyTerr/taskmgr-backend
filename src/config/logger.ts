import { logger } from "logmatic";

export default (name: string) => {
	return new logger(name);
};
