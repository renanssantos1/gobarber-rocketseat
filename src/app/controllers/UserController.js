class UserController {
  store(req, res) {
    return res.json({
      message: 'Ok',
    });
  }

  async update(req, res) {
    return res.json({ message: 'Ok..' });
  }
}

export default new UserController();
