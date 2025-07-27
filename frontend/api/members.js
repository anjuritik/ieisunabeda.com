// api/members.js - Members API route for Vercel
import { executeQuery } from '../lib/db';

export default async function handler(req, res) {
  // Only allow GET requests for now (matching your original route)
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      message: 'Only GET requests are supported for this endpoint' 
    });
  }

  try {
    console.log('🔍 Fetching members from database...');
    
    // Execute the query using async/await instead of callback
    const results = await executeQuery('SELECT * FROM members');
    
    console.log(`✅ Successfully fetched ${results.length} members`);
    
    // Return the results in the same format as your original
    res.status(200).json(results);
    
  } catch (err) {
    console.error('❌ MySQL Query Error:', err);
    
    // Return error in same format as your original
    res.status(500).json({ 
      error: 'Database query failed',
      message: err.message 
    });
  }
}