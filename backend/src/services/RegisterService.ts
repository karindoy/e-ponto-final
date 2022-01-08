

class RegisterService {

    async insertRegisterDateTime(dateTime: number): Promise<number> {

        return dateTime;
    }
}
export let registerService = new RegisterService();