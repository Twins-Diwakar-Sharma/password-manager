// TODO: @utkarsh Do we even need this?
export class SessionsController {
    login(req, res) {
        // TODO: @utkarsh do this
        res.send('Sessions login');
    }

    logout(req, res) {
        // TODO: @utkarsh do this
        res.send('Sessions logout');
    }
}

export default new SessionsController();