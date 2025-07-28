import mysql from 'mysql2/promise';

// Database connection using your Railway MySQL
async function connectDB() {
  try {
    const connection = await mysql.createConnection({
      host: 'interchange.proxy.rlwy.net',
      port: 25771,
      user: 'root',
      password: 'XWEVQBsjPtldbVsqXrQomEmQdkNJkluf',
      database: 'railway'
    });
    return connection;
  } catch (error) {
    console.error('Database connection failed:', error);
    throw error;
  }
}

export default async function handler(req, res) {
  const { method } = req;

  try {
    const connection = await connectDB();

    switch (method) {
      case 'GET':
        // Get all members
        const [members] = await connection.execute('SELECT * FROM members');
        await connection.end();
        res.status(200).json(members);
        break;

      case 'POST':
        // Add new member
        const { name, email, phone } = req.body;
        const [result] = await connection.execute(
          'INSERT INTO members (name, email, phone) VALUES (?, ?, ?)',
          [name, email, phone]
        );
        await connection.end();
        res.status(201).json({ 
          id: result.insertId, 
          message: 'Member added successfully' 
        });
        break;

      case 'PUT':
        // Update member (use ?id=123 in URL)
        const { id } = req.query;
        const { name: updateName, email: updateEmail, phone: updatePhone } = req.body;
        await connection.execute(
          'UPDATE members SET name = ?, email = ?, phone = ? WHERE id = ?',
          [updateName, updateEmail, updatePhone, id]
        );
        await connection.end();
        res.status(200).json({ message: 'Member updated successfully' });
        break;

      case 'DELETE':
        // Delete member (use ?id=123 in URL)
        const { id: deleteId } = req.query;
        await connection.execute('DELETE FROM members WHERE id = ?', [deleteId]);
        await connection.end();
        res.status(200).json({ message: 'Member deleted successfully' });
        break;

      default:
        res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ 
      error: 'Database operation failed',
      details: error.message 
    });
  }
}