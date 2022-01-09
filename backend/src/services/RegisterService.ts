

class RegisterService {

    async insertRegisterDateTime(dateTime: number, entryTime: boolean): Promise<object> {

        return {
            "dateTime": dateTime,
            "entryTime": entryTime
        };
    }
}
export let registerService = new RegisterService();